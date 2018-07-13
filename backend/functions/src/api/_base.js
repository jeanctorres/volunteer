/**
 * Sends an error back to the client with error as message.
 * @param {Response} res an express response object.
 * @param {Object} err an error object or string with description of the error.
 */
export const error = (res, err) => {
  console.log(err);
  const message = err.toString() || err;
  res.type("json");
  res.status = 500;

  res.json({
    status: "error",
    message
  });
};

/**
 * Sends a successful response to the client with an optional json object as part of the result.
 * @param {Response} res an express response object.
 * @param {Object} result data  needed to be sent back to the client wrapped on a result object.
 */
export const success = (res, result) => {
  const rs = {};
  rs.status = "ok";

  // if result object is provided, return it, else just success.
  if (result !== undefined || result != null) {
    rs.result = result;
  }

  res.type("json");
  res.status = 200;
  res.json(rs);
};
