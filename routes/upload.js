require("dotenv").config();
const cloudinary = require("cloudinary").v2;

module.exports = (app) => {
  app.post("/upload", (req, res) => {
    //////
    // Basic Upload
    //////
    cloudinary.uploader
      .upload(
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
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
    // Setting the Public ID
    //////
    // cloudinary.uploader
    //   .upload(
    //     "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
    //     {
    //       public_id: "dog",
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //     res.render("completed", { multilayer: true, response: result });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     res.render("completed", { multilayer: true, response: error });
    //   });

    //////
    // Using the Filename as the Public ID
    //////
    // cloudinary.uploader
    //   .upload(
    //     "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
    //     {
    //       use_filename: true,
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //     res.render("completed", { multilayer: true, response: result });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     res.render("completed", { multilayer: true, response: error });
    //   });

    //////
    // Adding the Unique Parameter to the Filename
    //////
    // cloudinary.uploader
    //   .upload(
    //     "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
    //     {
    //       use_filename: true,
    //       unique_filename: false,
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //     res.render("completed", { multilayer: true, response: result });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     res.render("completed", { multilayer: true, response: error });
    //   });

    //////
    // Setting the Resource Type
    //////
    // cloudinary.uploader
    //   .upload(
    //     "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
    //     {
    //       public_id: "dog",
    //       resource_type: "auto",
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //     res.render("completed", { multilayer: true, response: result });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     res.render("completed", { multilayer: true, response: error });
    //   });
  });
};
