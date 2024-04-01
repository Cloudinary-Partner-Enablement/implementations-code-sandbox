require("dotenv").config();
const cloudinary = require("cloudinary").v2;

module.exports = (app) => {
  app.post("/preset", (req, res) => {
    //////
    // Create an Upload Preset
    //////
    // Syntax: cloudinary.api.create_upload_preset(options, callback);
    cloudinary.api
      .create_upload_preset({
        name: "practice_preset",
        unsigned: false,
        tags: "practice",
        use_filename: true,
      })
      .then((result) => {
        console.log(result);
        res.render("completed", { multilayer: true, response: result });
      })
      .catch((error) => {
        console.log(error);
        res.render("completed", { multilayer: true, response: error });
      });

    //////
    // Upload Using a Preset
    //////
    // cloudinary.uploader
    //   .upload(
    //     "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
    //     {
    //       upload_preset: "practice_preset",
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //     res.render("completed", { multilayer: true, response: result });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     res.render("completed", { multilayer: true, response: error });
    //   });
  });
};
