const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "unauthorized access" });
  }
  const token = req?.headers?.authorization.split(" ")[1];
  // console.log(token);
  jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};
module.exports = authMiddleware;
