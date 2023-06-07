const { CustomAPIError } = require("../errors/custom-error");
const errrorHnadlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "something went wrong,please try again later" });
};

module.exports = errrorHnadlerMiddleware;
