// utils/parseYAML.js
const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

function loadYAMLData() {
  try {
    const filePath = path.join(__dirname, "../data/data.yml");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = yaml.load(fileContents);
    return data;
  } catch (err) {
    console.error("Error al leer el archivo YAML:", err);
    return null;
  }
}

module.exports = { loadYAMLData };
