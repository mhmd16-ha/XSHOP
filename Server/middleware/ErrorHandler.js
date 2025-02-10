import { constants } from "../constants.js";

export const errorHandler = (err, req, res, next) => {
  const statuscode = res.statusCode || 500;
  switch (statuscode) {
    case constants.VALIDATION_ERROR:
      res
        .status(statuscode)
        .json({
          title: "Validation error",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
    case constants.NOT_FOUND:
      res
        .status(statuscode)
        .json({
          title: "Not found",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
    case constants.UNAUTHORIZE:
      res
        .status(statuscode)
        .json({
          title: "Un authorized",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
    case constants.FORBIDDEN:
      res
        .status(statuscode)
        .json({
          title: "Forbidden",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
    case constants.SERVER_ERROR:
      res
        .status(statuscode)
        .json({
          title: "Server error",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
    default:
      console.log("No errors all is Good");
      break;
  }
};
