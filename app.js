require("dotenv").config();
const express = require("express");

const route = require("./routes/routes");
const app = express();

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const corsOptions = {
  origin: "https://todofrontend-txbl.vercel.app/",
  optionsSucccessStatus: 200,
};
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", route);

module.exports = app;
