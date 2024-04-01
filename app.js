const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
require("./routes/eager_incoming")(app);
require("./routes/image_transform")(app);
require("./routes/manage")(app);
require("./routes/preset")(app);
require("./routes/search")(app);
require("./routes/security")(app);
require("./routes/tag")(app);
require("./routes/upload")(app);
require("./routes/video_chunk")(app);
require("./routes/video_transform")(app);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
