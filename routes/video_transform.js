require("dotenv").config();
const cloudinary = require("cloudinary").v2;

module.exports = (app) => {
  app.post("/video_transform", (req, res) => {
    let result;
    //////
    // Cropping
    //////
    result = cloudinary.video("publicID", {
      height: 200,
      width: 200,
      crop: "crop",
    });
    res.render("completed", { multilayer: false, response: result });

    //////
    // Cropping w/ Gravity
    //////
    // result = cloudinary.video("publicID", {
    //   width: 200,
    //   crop: "fill",
    //   gravity: "auto",
    // });
    // res.render("completed", { multilayer: false, response: result });

    //////
    // Trim
    //////
    // result = cloudinary.video("publicID", {
    //   end_offset: "3.5",
    //   start_offset: "1.5",
    // });
    // res.render("completed", { multilayer: false, response: result });

    //////
    // Loop
    //////
    // result = cloudinary.video("publicID", { effect: "loop:2" });
    // res.render("completed", { multilayer: false, response: result });

    //////
    // Reverse
    //////
    // cloudinary.video("publicID", { effect: "reverse" });
    // res.render("completed", { multilayer: false, response: result });
  });
};
