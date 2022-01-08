const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

hbs.registerPartials(partialsPath);
// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Setup static directory to serve
app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Piotr",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Weather App",
    name: "Piotr",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    console.log(req.query.address);
    return res.send("Error: Invalid query.");
  }
  forecast(req.query.address, (error, forecastData) => {
    // if (error) {
    //   res.send({ error });
    // }
    res.send({
      forecast: forecastData.body.current.weather_descriptions,
      // location,
      address: req.query.address,
    });
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weather App",
    name: "Piotr",
  });
});

app.get("/title", (req, res) => {
  res.send(`<h1>This is a weather website</h1>`);
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      Error: "You must provide a valid search value.",
    });
  }

  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.send("<p>Help article not found</p>");
});

app.get("*", (req, res) => {
  res.render("error404", { title: "Weather App" });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
