require("dotenv").config();
const cloudinary = require("cloudinary").v2;

module.exports = (app) => {
  app.post("/search", (req, res) => {
    //////
    // By Public ID w/ Admin API's Resources By IDs
    //////
    cloudinary.api
      .resources_by_ids(["public_id_1", "public_id_2"])
      .then((result) => {
        console.log(result);
        res.render("completed", { multilayer: true, response: result });
      })
      .catch((error) => {
        console.log(error);
        res.render("completed", { multilayer: true, response: error });
      });

    //////
    // By Public ID w/ Search API
    //////
    // cloudinary.search
    //   .execute((public_id = some_folder / asset_public_id))
    //   .then((result) => {
    //     console.log(result);
    //     res.render("completed", { multilayer: true, response: result });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     res.render("completed", { multilayer: true, response: error });
    //   });

    //////
    // By Tag w/ Admin API's Resources By Tags
    //////
    // cloudinary.api
    //   .resources_by_tag("some_tag")
    //   .then((result) => {
    //     console.log(result);
    //     res.render("completed", { multilayer: true, response: result });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     res.render("completed", { multilayer: true, response: error });
    //   });

    //////
    // By Tag w/ Search API
    //////
    // cloudinary.search
    //   .execute((tags = some_tag))
    //   .then((result) => {
    //     console.log(result);
    //     res.render("completed", { multilayer: true, response: result });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     res.render("completed", { multilayer: true, response: error });
    //   });

    //////
    // By Contextual Metadata w/ Admin API
    //////
    // cloudinary.api
    //   .resources_by_context("context_key")
    //   .then((result) => {
    //     console.log(result);
    //     res.render("completed", { multilayer: true, response: result });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     res.render("completed", { multilayer: true, response: error });
    //   });

    //////
    // By Structural Metadata w/ Search API
    //////
    // cloudinary.search
    //   .execute((metadata.external_id = specified_value))
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
