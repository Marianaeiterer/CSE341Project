const validator = require('../helpers/validate');

const saveBook = (req, res, next) => {
  const validationRule = {                
    title: 'required|string',
    author: 'required|string',
    publishedYear: 'required|string',
    numberPages: 'required|string',
    language: 'required|string',
    genre: 'required|string',
    available: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveClient = (req, res, next) => {
    const validationRule = {                
        firstName: 'required|string',
        lastName: 'required|string',
        birthday: 'required|string',
        phone: 'required|string',
        email: 'required|email',
      
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };

module.exports = {
  saveBook,
  saveClient
};
