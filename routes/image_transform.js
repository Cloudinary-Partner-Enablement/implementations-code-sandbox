require("dotenv").config();
const cloudinary = require("cloudinary").v2;

module.exports = (app) => {
  app.post("/image_transform", (req, res) => {
    let result;
    //////
    // Cropping
    //////
    result = cloudinary.image("publicID", { width: 300, crop: "crop" });
    res.render("completed", { multilayer: false, response: result });

    //////
    // Layers
    //////
    // result = cloudinary.image("publicID", {
    //   transformation: [
    //     {
    //       color: "#FFFFFF",
    //       overlay: {
    //         font_family: "Arial",
    //         font_size: 80,
    //         text: "Layer%20Practice",
    //       },
    //     },
    //     { flags: "layer_apply" },
    //   ],
    // });
    // res.render("completed", { multilayer: false, response: result });

    //////
    // Gravity
    //////
    // result = cloudinary.image("publicID", {
    //   gravity: "auto",
    //   height: 700,
    //   width: 300,
    //   crop: "fill",
    // });
    // res.render("completed", { multilayer: false, response: result });

    //////
    // Format
    //////
    // result = cloudinary.image("publicID", {
    //   transformation: [{ width: 500, crop: "scale" }, { fetch_format: "auto" }],
    // });
    // res.render("completed", { multilayer: false, response: result });

    //////
    // Quality
    //////
    // result = cloudinary.image("publicID", {
    //   transformation: [
    //     { width: 500, crop: "scale" },
    //     { fetch_format: "auto" },
    //     { quality: "auto" },
    //   ],
    // });
    // res.render("completed", { multilayer: false, response: result });
  });
};
