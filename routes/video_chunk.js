require("dotenv").config();
const cloudinary = require("cloudinary").v2;

module.exports = (app) => {
  app.post("/video_transform", (req, res) => {
    let result;
    //////
    // Basic Upload
    //////
    // Video from pixabay
    cloudinary.uploader
      .upload_large(
        "https://cdn.glitch.global/492a0778-4ecc-4e43-bc2f-9eccf59ffe64/Mountains%20-%2081945.mp4?v=1671660352246",
        { resource_type: "video" }
      )
      .then((result) => {
        console.log(result);
        res.render("completed", { multilayer: true, response: result });
      })
      .catch((error) => {
        console.log(error);
        res.render("completed", { multilayer: true, response: error });
      });
  });
};
