

const validate= (Schema) => async (req, res, next) => {
    try {

      const parseBody= await Schema.parseAsync(req.body);
      req.body = parseBody;
      next();

    } 
    catch (err) {
      const status = 200;
      const message = "ok"
      const errorDetail= err.errors[0].message;
   
      const error = {
        status,
        message,
        errorDetail
      }

      console.log(error);
      next(error)
      //res.status(400).json({ msg : message })
    }
}

module.exports= validate;




















