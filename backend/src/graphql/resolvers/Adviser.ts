import { Adviser } from "../../models/adviser";

const checkAuth = require("../../util/checkAuth");
const slugify = require("slugify");

const adviserResolvers = {
    Query: {
        async getAllAdviser(_: any, { data }: any, context: any) {
            try {
                // const data = await client.get("career");
                const blog = await Adviser.find({})
                    .populate({
                        path: "updatedBy",
                        populate: {
                            path: "member",
                        },
                    })
                    .sort({ createdAt: -1 })

                    .exec();

                return blog;
            } catch (error) {
                console.warn(error);
            }
        },

        async getAllActiveAdviser(_: any, { data }: any, context: any) {
            try {
                // const data = await client.get("career");
                const blog = await Adviser.find({ status: true })

                    .sort({ createdAt: -1 })

                    .exec();


                return blog;
            } catch (error) {
                console.warn(error);
            }
        },
        async getAdviserById(_: any, { id: _id }: any, context: any) {
            try {
                const { id } = checkAuth(context);

                const data2 = await Adviser.findOne({ _id: _id }).populate({
                    path: "updatedBy",
                });

                return data2;
            } catch (error) {
                console.warn(error);
            }
        },

        async getAdviserActiveBySlug(_: any, { slug }: any, context: any) {
            try {


                const data2 = await Adviser.findOne({ slug, status: true })

                return data2;
            } catch (error) {
                console.warn(error);
            }
        },
    },

    Mutation: {
        async addAdviser(_: any, { name }: any, context: any) {
            try {
                const user = checkAuth(context);
                const slug = slugify(name, {
                    replacement: "-",
                    remove: undefined,
                    lower: true,
                    strict: false,
                    locale: "vi",
                    trim: true,
                });

                const newBlog = new Adviser({
                    name,
                    slug,
                    updatedBy: user.id,
                });

                const blo = await newBlog.save();



                const find = await Adviser.findOne({ _id: blo.id }).populate({
                    path: "updatedBy",
                });

                return find;
            } catch (error) {
                console.warn(error);
            }
        },

        async editAdviser(
            _: any,
            { name, designation, videoUrl, about, status, id, social, avatar }: any,
            context: any
        ) {
            const user = checkAuth(context);
            console.log(name, designation, videoUrl, about, status, id, social);
            try {
                const something = await Adviser.findOneAndUpdate(
                    { _id: id },
                    {
                        $set: {
                            name,
                            designation,
                            videoUrl,
                            about,
                            status,
                            avatar,
                            updatedBy: user.id,
                            social: social && JSON.parse(social),
                        },
                    },
                    { new: true, upsert: true }
                )
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
    },
};

export { adviserResolvers };
