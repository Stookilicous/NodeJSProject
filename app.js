const express = require("express");
const path = require("path");
const site = require("./data/siteConfig");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.site = site;
  res.locals.currentPath = req.path;
  next();
});

app.get("/", (req, res) => res.render("pages/home", { title: "Home" }));
app.get("/about", (req, res) => res.render("pages/about", { title: "About" }));
app.get("/locations", (req, res) => res.render("pages/locations", { title: "Locations" }));
app.get("/contact", (req, res) => res.render("pages/contact", { title: "Contact" }));
app.get("/menu", (req, res) => res.render("pages/menu", { title: "Menu" }));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});