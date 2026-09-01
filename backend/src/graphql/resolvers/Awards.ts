import { Awards } from "../../models/Awards";

const checkAuth = require("../../util/checkAuth");
const slugify = require("slugify");

const awardsResolvers = {
    Query: {
        async getAllAwards(_: any, { data }: any, context: any) {
            try {
                // const data = await client.get("career");
                const blog = await Awards.find({})
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

        async getAllActiveAwards(_: any, { data }: any, context: any) {
            try {
                // const data = await client.get("career");
                const blog = await Awards.find({ status: true })
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

        async getAwardsById(_: any, { id: _id }: any, context: any) {
            try {
                const { id } = checkAuth(context);

                const data2 = await Awards.findOne({ _id: _id }).populate({
                    path: "updatedBy",
                });

                console.log(data2);

                return data2;
            } catch (error) {
                console.warn(error);
            }
        },
    },

    Mutation: {
        async addAwards(_: any, { title }: any, context: any) {
            try {
                const user = checkAuth(context);
                const slug = slugify(title, {
                    replacement: "-",
                    remove: undefined,
                    lower: true,
                    strict: false,
                    locale: "vi",
                    trim: true,
                });

                const newBlog = new Awards({
                    title,
                    slug,
                    updatedBy: user.id,
                });


                const blo = await newBlog.save();



                const find = await Awards.findOne({ _id: blo.id }).populate({
                    path: "updatedBy",
                });

                return find;
            } catch (error) {
                console.warn(error);
            }
        },

        async editAwards(
            _: any,
            { title, location, decription, date, status, img, id }: any,
            context: any
        ) {
            const user = checkAuth(context);
            console.log(title, location, decription, date, status, img, id);
            try {
                const something = await Awards.findOneAndUpdate(
                    { _id: id },
                    {
                        $set: {
                            title,
                            location,
                            decription,
                            date,
                            status,
                            img: img && JSON.parse(img),
                            updatedBy: user.id,
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

export { awardsResolvers };
