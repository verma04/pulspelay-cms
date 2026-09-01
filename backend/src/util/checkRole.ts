//@ts-ignore
const { AuthenticationError } = require("apollo-server");
//@ts-ignore
const { User } = require("../models/User");

module.exports = async (id: any, role: any) => {
  try {
    const user = await User.findOne({ _id: id });
    console.log(user);

    if (user.role !== "admin" && !user.roleAssign?.includes(role)) {
      throw new AuthenticationError("Permission Denied");
    }
  } catch (error) {
    throw new AuthenticationError("Permission Denied");
  }

  // // context = { ...headers }
  // const authHeader = context.req.headers.authorization;
  // if (authHeader) {
  //   // convention for tokens: "Bearer ..."
  //   const token = authHeader.split("Bearer ")[1];
  //   if (token) {
  //     try {
  //       const user = await jwt.verify(token, `"sddsdds"`);
  //       return user;
  //     } catch (err) {
  //       console.log(err);
  //       throw new AuthenticationError("Invalid/Expired token");
  //     }
  //   }
  //   throw new Error(`Authentication token must be 'Bearer [token]'`);
  // }
  // // TODO: Add better error handling
  // throw new Error(`Permission Denied`);
};
