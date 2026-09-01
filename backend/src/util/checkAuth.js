const { AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");

module.exports = (context) => {
  // context = { ...headers }
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    // convention for tokens: "Bearer ..."
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, `"sddsdds"`);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error(`Authentication token must be 'Bearer [token]'`);
  }
  // TODO: Add better error handling
  throw new Error(`Permission Denied`);
};
