import { User } from "../../models/User";
import { BlogCategory } from "../../models/BlogCategory";
import blogSendEmail from "../../util/htmlTemplate/blogSendEmail";
import draftEmail from "../../util/htmlTemplate/darftEmail";
import commentEmail from "../../util/htmlTemplate/commentEmail";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");
var mongoose = require("mongoose");
const { Blog, Comments } = require("../../models/blog");
const checkAuth = require("../../util/checkAuth");
const slugify = require("slugify");

const blogResolvers = {
  Query: {
    async getAllBlog(_: any, { data }: any, context: any) {
      try {
        const { id } = checkAuth(context);

        const user = await User.findOne({ _id: id });

        if (user?.role === "admin" || "Seo/Content") {
          const blog = await Blog.find({})
            .sort({ createdAt: -1 })

            .populate({
              path: "comments",
            })
            .populate({
              path: "author",
              populate: {
                path: "member",
              },
            })
            .populate({
              path: "updatedBy",
              populate: {
                path: "member",
              },
            })
            .exec();

          return blog;
        } else {
          const blog = await Blog.find({})
            .sort({ createdAt: -1 })

            .populate({
              path: "comments",
            })
            .populate({
              path: "author",
              populate: {
                path: "member",
              },
            })
            .populate({
              path: "updatedBy",
              populate: {
                path: "member",
              },
            })
            .exec();
          const find = await blog.filter((t: any) =>
            t.author.map((set: any) => set.id).includes(id)
          );

          return find;
        }
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllTechBlog(_: any, { data }: any, context: any) {
      try {
        const blog = await Blog.find({ publish: true }).sort({ createdAt: -1 });

        const arr: any = [];
        blog.forEach((element: any) => {
          const blog = element?.category?.map((t: any) => t?.label);
          if (blog.includes("Technology Platforms")) {
            arr.push(element);
          }
        });
        return arr;
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllPublishedBlog(_: any, { data }: any, context: any) {
      try {
        const blog = await Blog.find({ publish: true })
          .populate({
            path: "author",
            populate: {
              path: "member",
            },
          })

          .populate({
            path: "user",
            populate: {
              path: "member",
            },
          })
          .sort({ createdAt: -1 });

        return blog;
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllBlogFilter(_: any, { blogAuthor }: any, context: any) {
      try {
        const { id } = checkAuth(context);

        const data = await Blog.find({ blogAuthor: blogAuthor })
          .sort({
            createdAt: -1,
          })
          .populate({
            path: "author",
            populate: {
              path: "member",
            },
          });
        return data;
      } catch (error) {
        console.warn(error);
      }
    },
    async getSingleBlog(_: any, { id: _id }: any, context: any) {
      try {
        const { id } = checkAuth(context);

        const data2 = await Blog.findOne({ _id: _id })
          .populate("comments")
          .populate({
            path: "author",
            populate: {
              path: "member",
            },
          });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },
    async getSingleBlogSlug(_: any, { slug }: any, context: any) {
      try {
        const data2 = await Blog.findOne({ slug: slug })
          .populate({
            path: "author",
            populate: {
              path: "member",
            },
          })
          .populate({
            path: "user",
            populate: {
              path: "member",
            },
          })
          .populate({ path: "comments", match: { status: true } });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllBlogByMember(_: any, { blogAuthor }: any, context: any) {
      try {
        const data = await Blog.find({
          publish: true,
        })
          .sort({
            createdAt: -1,
          })
          .populate({
            path: "author",

            populate: {
              path: "member",
            },
          });

        const find = await data.filter((t: any) =>
          t?.author.map((set: any) => set?.member?.id).includes(blogAuthor)
        );

        return find;
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllBlogCategory(_: any, {}: any, context: any) {
      try {
        const data = await BlogCategory.find({});
        return data;
      } catch (error) {
        console.warn(error);
      }
    },
    async addViewBlog(_: any, { id, ip, page }: any, context: any) {
      try {
        console.log(id, ip, page);
        // const find = await Blog.findOne({ _id: id });
        // if (find) {
        //   const something = await Blog.findOneAndUpdate(
        //     { _id: id },
        //     {
        //       $set: {
        //         views: find.views + 1,
        //       },
        //     },
        //     { new: true, upsert: true }
        //   )
        //     .populate({
        //       path: "user",
        //       populate: {
        //         path: "member",
        //       },
        //     })
        //     .exec();
        //   return something;
        // }
      } catch (error) {
        console.warn(error);
      }
    },
    async getBlogComment(_: any, { id }: any, context: any) {
      try {
        const data = checkAuth(context);

        const something = await Comments.find({ blog: id });

        return something;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addBlog(
      _: any,
      {
        blogTitle,
        blogAvatar,
        blogAuthor,
        blogDescription,
        blogSubTitle,
        category,
      }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const slug = slugify(blogTitle, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const newBlog = new Blog({
          blogTitle,
          slug,
          blogAvatar,
          blogAuthor,
          blogDescription,
          blogSubTitle,
          category: category ? JSON.parse(category) : null,
          author: [user.id],
          createdAt: new Date().toISOString(),
          updatedBy: user.id,
          seo: {
            metaTitle: blogTitle,
          },
        });

        const blo = await newBlog.save();

        const find = await Blog.findOne({ _id: blo.id })
          .populate({
            path: "author",
            populate: {
              path: "member",
            },
          })
          .populate({
            path: "updatedBy",
          });

        draftEmail({ blog: find });

        return find;
      } catch (error) {
        console.warn(error);
      }
    },

    async addBlogCategory(_: any, { title }: any, context: any) {
      try {
        const user = checkAuth(context);

        const newCategory = new BlogCategory({
          title,
        });

        const category = newCategory.save();

        return category;
      } catch (error) {
        console.warn(error);
      }
    },

    async addBlogManger(_: any, { id, author }: any, context: any) {
      try {
        const user = checkAuth(context);

        const list = author ? JSON.parse(author) : null;

        const data = await Blog.findOneAndUpdate(
          { _id: id },

          {
            $set: {
              author: list,
              updatedBy: user.id,
            },
          }
        )
          .populate({
            path: "author",
            populate: {
              path: "member",
            },
          })
          .populate({
            path: "comments",
          })
          .populate({
            path: "updatedBy",
            populate: {
              path: "member",
            },
          })
          .exec();

        console.log(data);
        return data;
      } catch (error) {
        console.warn(error);
      }
    },
    async editBlogCategory(_: any, { title, id }: any, context: any) {
      try {
        const user = checkAuth(context);
        const something = await BlogCategory.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              title,
            },
          },
          { new: true, upsert: true }
        ).exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async searchBlog(_: any, { search }: any, context: any) {
      function escapeRegex(text: any) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      }
      const regex = new RegExp(escapeRegex(search), "gi");

      const arr = await Blog.find({
        $or: [
          { blogTitle: regex },
          { blogAuthor: regex },
          { blogDescription: regex },
          { blogSubTitle: regex },
        ],
      })
        .populate({
          path: "user",
          populate: {
            path: "member",
          },
        })
        .exec();

      return arr;
    },
    async removeBlogCategory(_: any, { id }: any, context: any) {
      try {
        const data = await BlogCategory.findOneAndRemove({ _id: id });
        return data;
      } catch (error) {
        console.warn(error);
      }
    },

    async addBlogComments(
      _: any,
      { id, name, comment, email }: any,
      context: any
    ) {
      try {
        const find = await Blog.findOne({ _id: id });

        if (find) {
          const something = await Comments.create({
            name,
            comment,
            email,
            createdAt: new Date().toISOString(),
            blog: id,
          });

          const set = await Blog.findOneAndUpdate(
            { _id: id },

            {
              $push: { comments: something.id },
            },
            { new: true, upsert: true }
          )
            .populate({
              path: "author",
              populate: {
                path: "member",
              },
            })
            .populate({
              path: "comments",
            })
            .exec();

          commentEmail({ blog: set, comment: something });

          return something;
        }
      } catch (error) {
        console.warn(error);
      }
    },

    async editBlog(
      _: any,
      { blogDescription, id, blogDescriptionHtml }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);
        const something = await Blog.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              blogDescription,
              blogDescriptionHtml,
              updatedBy: user.id,
            },
          },
          { new: true, upsert: true }
        )
          .populate({
            path: "author",
            populate: {
              path: "member",
            },
          })
          .populate({
            path: "updatedBy",
            populate: {
              path: "member",
            },
          })
          .populate({
            path: "updatedBy",
            populate: {
              path: "member",
            },
          })
          .exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async publishBlog(
      _: any,
      { blogTitle, blogAvatar, id, blogSubTitle, tags, category, slug }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const something = await Blog.findOneAndUpdate(
          { _id: id },

          {
            $set: {
              updatedBy: user.id,
              blogTitle,
              blogAvatar,
              slug,
              id,
              blogSubTitle,
              category: category ? JSON.parse(category) : null,
              blogtags: tags ? JSON.parse(tags) : null,
            },
          },
          { new: true, upsert: true }
        )
          .populate({
            path: "author",
            populate: {
              path: "member",
            },
          })
          .populate({
            path: "updatedBy",
            populate: {
              path: "member",
            },
          })
          .populate({
            path: "updatedBy",
            populate: {
              path: "member",
            },
          })
          .exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async setBlogStatus(_: any, { status, id }: any, context: any) {
      try {
        let firstPublish;
        const user = checkAuth(context);

        const find = await Blog.findOne({ _id: id }).populate({
          path: "author",
          populate: {
            path: "member",
          },
        });
        console.log(find.firstPublish);

        if (!find.firstPublish) {
          firstPublish = true;
          blogSendEmail({ blog: find });
        }
        const something = await Blog.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              publish: !status,
              updatedBy: user.id,
              firstPublish: true,
            },
          },
          { new: true, upsert: true }
        )
          .populate({
            path: "author",
            populate: {
              path: "member",
            },
          })
          .populate({
            path: "updatedBy",
            populate: {
              path: "member",
            },
          })
          .exec();

        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async addBlogCommentsStatus(
      _: any,
      { id, status, commentID }: any,
      context: any
    ) {
      try {
        const find = await Blog.findOne({ _id: id });

        const con = await Comments.findOneAndUpdate(
          { _id: id },
          { $set: { status: status } },
          { new: true, upsert: true }
        ).exec();
        return Comments.find({ blog: con.blog });
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { blogResolvers };
