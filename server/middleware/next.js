const handle = require('../nextApp').handle;
const isFeathersService = require('../nextApp').isFeathersService;

// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
  return function next(req, res, next) {
    if (isFeathersService(req.originalUrl)) {
      return next();
    } else {
      return handle(req, res);
    }
  };
};
