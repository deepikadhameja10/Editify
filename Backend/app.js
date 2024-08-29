// import fs from "node:fs";

// async function removeBg(blob) {
//   const formData = new FormData();
//   formData.append("size", "auto");
//   formData.append("image_file", blob);
//   const response = await fetch("https://api.remove.bg/v1.0/removebg", {
//     method: "POST",
//     headers: { "X-Api-Key": "wVcWHMqpHo39kCSsuS3owmNg" },
//     body: formData,
//   });
//   if (response.ok){
//     return await response.arrayBuffer();
//   } else {
//     throw new Error(`${response.status}: ${response.statusText}`);
//   }
// }

// // const inputPath = "one.jpg";
// // const fileBlob = await fs.openAsBlob(inputPath);
// // const rbgResultData = await removeBg(fileBlob);
// // fs.writeFileSync("no-bg.png", Buffer.from(rbgResultData));

// import fs from "node:fs";
// import { Blob } from "node:buffer";
// import { URL } from "url";

// async function removeBg(blob) {
//   const formData = new FormData();
//   formData.append("size", "auto");
//   formData.append("image_file", blob);
//   const response = await fetch("https://api.remove.bg/v1.0/removebg", {
//     method: "POST",
//     // headers: { "X-Api-Key": "wVcWHMqpHo39kCSsuS3owmNg" },
//     body: formData,
//   });
//   if (response.ok) {
//     return await response.arrayBuffer();
//   } else {
//     throw new Error(`${response.status}: ${response.statusText}`);
//   }
// }

// const inputPath = "one.jpg";
// const fileBlob = await fs.promises.readFile(inputPath).then(buffer => new Blob([buffer]));

// try {
//   const rbgResultData = await removeBg(fileBlob);
//   const outputPath = "no-bg.png";
//   fs.writeFileSync(outputPath, Buffer.from(rbgResultData));

//   // Create a Blob from the result data and generate a URL
//   const resultBlob = new Blob([rbgResultData], { type: "image/png" });
//   const imageUrl = URL.createObjectURL(resultBlob);

//   // Print the URL in the console
//   console.log("Image URL:", imageUrl);

//   // Now you can use this URL on the frontend in React to display or download the image
// } catch (error) {
//   console.error("Error:", error.message);
// }


// const express = require("express");
// const fs = require("fs");
// const fetch = require("node-fetch");
// const FormData = require("form-data");
// const { Blob } = require("buffer");

// import express from "express";
// import fetch from "node-fetch";
// import fs from "fs";
// import FormData from "form-data";
// import { Blob } from "buffer";
// import cors from "cors"; 

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use(cors({
//   origin: "http://localhost:3000"
// }));

// async function removeBg(blob) {
//   const formData = new FormData();
//   formData.append("size", "auto");
//   formData.append("image_file", blob);
//   const response = await fetch("https://api.remove.bg/v1.0/removebg", {
//     method: "POST",
//     headers: { "X-Api-Key": "wVcWHMqpHo39kCSsuS3owmNg" },
//     body: formData,
//   });
//   if (response.ok) {
//     return await response.arrayBuffer();
//   } else {
//     throw new Error(`${response.status}: ${response.statusText}`);
//   }
// }
// app.get("/",async(req,res)=>{
//   res.json({message:"hello deepika ji "})
// })

// app.post("/upload", async (req, res) => {
//   try {
//     const inputPath = "one.jpg"; 
//     const fileBlob = await fs.promises.readFile(inputPath).then(buffer => new Blob([buffer]));

//     const rbgResultData = await removeBg(fileBlob);

//     // Create a Blob from the result data and generate a URL
//     const resultBlob = new Blob([rbgResultData], { type: "image/png" });
//     const imageUrl = URL.createObjectURL(resultBlob);
//     console.log("dubey");

//     // Return the URL as a response
//     res.json({ imageUrl });
//   } catch (error) {
//     console.log("saiyam");
    
//     console.error("Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });


// import express from "express";
// import fetch from "node-fetch";
// import fs from "fs";
// import FormData from "form-data";
// import cors from "cors"; 
// import path from "path";

// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:3000"
// }));



// async function removeBg(fileBuffer) {
//   const formData = new FormData();
//   formData.append("size", "auto");
//   formData.append("image_file", fileBuffer, "image.jpg");

//   const response = await fetch("https://api.remove.bg/v1.0/removebg", {
//     method: "POST",
//     headers: { "X-Api-Key": "wVcWHMqpHo39kCSsuS3owmNg" },
//     body: formData,
//   });

//   if (response.ok) {
//     return await response.arrayBuffer();
//   } else {
//     throw new Error(`${response.status}: ${response.statusText}`);
//   }
// }

// app.get("/", (req, res) => {
//   res.json({ message: "Hello Deepika ji" });
// });

// app.post("/upload", async (req, res) => {
//   try {
//     const inputPath = path.join(__dirname, "one.jpg");
//     const fileBuffer = await fs.promises.readFile(inputPath);

//     const rbgResultData = await removeBg(fileBuffer);

//     // Save the image with no background to the filesystem
//     const outputPath = path.join(__dirname, "no-bg.png");
//     await fs.promises.writeFile(outputPath, Buffer.from(rbgResultData));

//     // Return the file path as a URL
//     const imageUrl = `http://localhost:5000/no-bg.png`;

//     res.json({ imageUrl });
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// // Serve the static file
// app.use(express.static(__dirname));

// app.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });



// app.post("/upload", async (req, res) => {
//   try {
//     const inputPath = path.join(__dirname, "one.jpg");
//     const fileBuffer = await fs.promises.readFile(inputPath);

//     const rbgResultData = await removeBg(fileBuffer);

//     // Save the image with no background to the filesystem
//     const outputPath = path.join(__dirname, "no-bg.png");
//     await fs.promises.writeFile(outputPath, Buffer.from(rbgResultData));

//     // Return the file path as a URL
//     const imageUrl = `http://localhost:5000/no-bg.png`;

//     res.json({ imageUrl });
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });
// app.post("/upload", async (req, res) => {
//   try {
//     const inputPath = path.join(__dirname, "one.jpg");
//     const fileBuffer = await fs.promises.readFile(inputPath);

//     const rbgResultData = await removeBg(fileBuffer);

//     // Save the image with no background to the filesystem
//     const outputPath = path.join(__dirname, "no-bg.png");
//     await fs.promises.writeFile(outputPath, Buffer.from(rbgResultData));

//     // Set headers to prompt a download
//     res.setHeader('Content-Disposition', 'attachment; filename=no-bg.png');
//     res.setHeader('Content-Type', 'image/png');
//     res.sendFile(outputPath);
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// import express from "express";
// import fetch from "node-fetch";
// import fs from "fs";
// import FormData from "form-data";
// import cors from "cors"; 
// import path from "path";
// import { fileURLToPath } from "url";

// // Get __dirname equivalent in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:3000"
// }));

// async function removeBg(fileBuffer) {
//   const formData = new FormData();
//   formData.append("size", "auto");
//   formData.append("image_file", fileBuffer, "image.jpg");

//   const response = await fetch("https://api.remove.bg/v1.0/removebg", {
//     method: "POST",
//     headers: { "X-Api-Key": "wVcWHMqpHo39kCSsuS3owmNg" },
//     body: formData,
//   });

//   if (response.ok) {
//     return await response.arrayBuffer();
//   } else {
//     throw new Error(`${response.status}: ${response.statusText}`);
//   }
// }

// app.get("/", (req, res) => {
//   res.json({ message: "Hello Deepika ji" });
// });

// app.post("/upload", async (req, res) => {
//   try {
//     const inputPath = path.join(__dirname, "one.jpg");
//     const fileBuffer = await fs.promises.readFile(inputPath);

//     const rbgResultData = await removeBg(fileBuffer);

//     // Generate a unique filename based on timestamp
//     const timestamp = Date.now();
//     const outputPath = path.join(__dirname, `no-bg-${timestamp}.png`);
//     await fs.promises.writeFile(outputPath, Buffer.from(rbgResultData));

//     // Set headers to prompt a download
//     res.json({ imageUrl: `http://localhost:5000/serve/${timestamp}` });
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// // Serve the static file
// app.use('/serve', express.static(__dirname));


// // Serve the static file
// app.use(express.static(__dirname));

// app.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });

// import express from 'express';
// import fs from 'fs';
// import path from 'path';
// import fetch from 'node-fetch';
// import FormData from 'form-data';
// import { Blob } from 'buffer';
// import cors from 'cors'; 

// const app = express();
// app.use(express.json());
// app.use(cors());

// async function removeBg(blob) {
//   const formData = new FormData();
//   formData.append("size", "auto");
//   formData.append("image_file", blob);
//   const response = await fetch("https://api.remove.bg/v1.0/removebg", {
//     method: "POST",
//     headers: { "X-Api-Key": "wVcWHMqpHo39kCSsuS3owmNg" },
//     body: formData,
//   });
//   if (response.ok) {
//     return await response.arrayBuffer();
//   } else {
//     throw new Error(`${response.status}: ${response.statusText}`);
//   }
// }

// app.post("/upload", async (req, res) => {
//   try {
//     const inputPath = path.join(__dirname, "one.jpg");
//     const fileBuffer = await fs.promises.readFile(inputPath);

//     const rbgResultData = await removeBg(fileBuffer);

//     // Generate a unique filename based on timestamp
//     const timestamp = Date.now();
//     const outputPath = path.join(__dirname, `no-bg-${timestamp}.png`);
//     await fs.promises.writeFile(outputPath, Buffer.from(rbgResultData));

//     // Return the URL to the file
//     res.json({ imageUrl: `/serve/no-bg-${timestamp}.png` });
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// // Serve the static files from the current directory
// app.use('/serve', express.static(__dirname));

// app.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });

import express from 'express';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import FormData from 'form-data';
import { Blob } from 'buffer';
import cors from 'cors'; 
import { fileURLToPath } from 'url';

// Create the directory name based on the module's URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

async function removeBg(blob) {
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file", blob);
  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: { "X-Api-Key": "wVcWHMqpHo39kCSsuS3owmNg" },
    body: formData,
  });
  if (response.ok) {
    return await response.arrayBuffer();
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}

app.post("/upload", async (req, res) => {
  try {
    const inputPath = path.join(__dirname, "one.jpg");
    const fileBuffer = await fs.promises.readFile(inputPath);

    const rbgResultData = await removeBg(fileBuffer);

    // Generate a unique filename based on timestamp
    const timestamp = Date.now();
    const outputPath = path.join(__dirname, `no-bg.png`);
    await fs.promises.writeFile(outputPath, Buffer.from(rbgResultData));

    // Return the URL to the file
    res.json({ imageUrl: `no-bg.png` });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Serve static files from the current directory
app.use('/', express.static(__dirname));

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
