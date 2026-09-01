import { UserInputError } from "apollo-server";
import { TeamMember } from "../../models/teamMember";
const bcrypt = require("bcryptjs");
const { User } = require("../../models/User");
const checkAuth = require("../../util/checkAuth");
const checkRole = require("../../util/checkRole");

import axios from "axios";
import uploadLabeledImages from "../../util/uploadLabeledImages";
const roleResolvers = {
  Query: {
    async getAllRole(_: any, {}, context: any) {
      const { id } = await checkAuth(context);

      await checkRole(id, ["role"]);

      try {
        const set = await User.find({}).populate("member");

        return set;
      } catch (error) {
        console.warn(error);
      }
    },
    async getRoleById(_: any, { id: _id }: any, context: any) {
      const { id } = await checkAuth(context);

      await checkRole(id, ["role"]);

      try {
        const set = await User.findOne({ _id }).populate("member");
        return set;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addRole(
      _: any,
      {
        user,
        role,
        password,

        assignRole,
      }: any,
      context: any
    ) {
      const { id } = await checkAuth(context);

      await checkRole(id, ["role"]);

      const set = await TeamMember.findOne({ _id: user });

      const set2 = await User.findOne({ member: user });
      if (set2) {
        return new UserInputError("User AllReady Exist");
      }

      const hash = await bcrypt.hash(password, 10);

      try {
        const set3 = await User.create({
          member: user,
          role,
          password: hash,
          createdAt: new Date().toISOString(),
          assignRole: JSON.parse(assignRole),
        });

        const find = await User.findOne({ _id: set3.id }).populate("member");

        let result = await uploadLabeledImages(
          [
            `https://pulseplaydigital.sgp1.digitaloceanspaces.com${set.memberAvatar}`,
            `https://pulseplaydigital.sgp1.digitaloceanspaces.com${set.memberCover}`,
          ],
          set.memberName,
          set3.id
        );
        return find;
      } catch (error) {
        console.warn(error);
      }
    },

    async editRole(
      _: any,
      {
        user,
        role,

        assignRole,
      }: any,
      context: any
    ) {
      const { id } = await checkAuth(context);

      await checkRole(id, ["role"]);

      const something = await User.findOneAndUpdate(
        { _id: user },
        {
          $set: {
            role,
            assignRole: JSON.parse(assignRole),
          },
        },
        { new: true, upsert: true }
      )
        .populate("member")
        .exec();

      try {
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { roleResolvers };
