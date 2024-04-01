require("dotenv").config();
const cloudinary = require("cloudinary").v2;

module.exports = (app) => {
  app.post("/eager_incoming", (req, res) => {
    //////
    // Eager
    //////
    cloudinary.uploader
      .upload(
        "https://cdn.pixabay.com/photo/2020/05/02/08/39/azalea-5120368_960_720.jpg",
        {
          public_id: "waterfall_eager",
          eager: [{ width: 50, height: 50, crop: "fill", gravity: "auto" }],
        }
      )
      .then((result) => {
        console.log(result);
        res.render("completed", { multilayer: true, response: result });
      })
      .catch((error) => {
        console.log(error);
        res.render("completed", { multilayer: true, response: error });
      });

    //////
    // Incoming
    //////
    // cloudinary.uploader
    //   .upload(
    //     "https://cdn.pixabay.com/photo/2020/05/02/08/39/azalea-5120368_960_720.jpg",
    //     {
    //       public_id: "waterfall_incoming",
    //       width: 100,
    //       height: 150,
    //       crop: "crop",
    //       gravity: "auto",
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
