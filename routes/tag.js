require("dotenv").config();
const cloudinary = require("cloudinary").v2;

module.exports = (app) => {
  app.post("/tag", (req, res) => {
    //////
    // Tag an Existing Asset
    //////
    // Syntax: cloudinary.uploader.add_tag(tag, public_ids, options, callback);
    cloudinary.uploader
      .add_tag("tag", ["public_id"])
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
