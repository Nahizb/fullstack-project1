// server.js
const express = require("express");
const cors = require("cors");
const { loadYAMLData } = require("./utils/parseYAML");

const app = express();
app.use(cors());

let allData = loadYAMLData();
let temperatureValues = allData.temperature.values;

// índice que simula la lectura progresiva
let currentIndex = 0;

// Endpoint para obtener datos progresivos
app.get("/api/data", (req, res) => {
  if (!temperatureValues || temperatureValues.length === 0) {
    return res.status(500).json({ error: "No hay datos disponibles" });
  }

  // Obtener el dato actual y convertir a Celsius (de decikelvin)
  const currentData = temperatureValues[currentIndex];
  const temperatureCelsius = currentData.value / 10 - 273.15;

  // Respuesta
  res.json({
    time: currentData.time,
    temperature: Number(temperatureCelsius.toFixed(2)), // °C
    energy: Number((Math.random() * 5 + 1).toFixed(2)), // Simula energía kWh
  });

  // Mover el índice al siguiente valor
  currentIndex = (currentIndex + 1) % temperatureValues.length;
});

// Arranque del servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Servidor backend ejecutándose en http://localhost:${PORT}`);
});
