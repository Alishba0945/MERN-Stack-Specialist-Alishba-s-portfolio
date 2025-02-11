const Service = require ("../../servicefile/services-model")

const Services =  async (res, req) => {
   try {
    const response = await Service.find();
   
    if(!response){
      res.status(404).json({msg : "No service found"});
      return;
    }
    res.status(200).json({ msg : "response"})

   } catch (error) {
    console.log(`services : ${error}`)
   }
}

module.exports = Services;








