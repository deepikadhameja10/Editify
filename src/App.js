import React, { useState, useRef } from "react";
import "./index.css";
import Linkspart from './components/linkspart';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const hiddenFileInput = useRef(null);

  const colorOptions = [
    "#F55733", "#33FF57", "#3357FF", "#F333FF", "#FFFF33", "#FF33A1",
    "#33FFF5", "#F360F5", "#530FF5", "#33F6F5", "#00F000", "#648F82",
    "#045733",
  ];

  const imageBackgroundOptions = [
    "url('bg8.png')", "url('bg1.png')", "url('bg2.png')", "url('bg3.png')",
    "url('bg4.png')", "url('bg5.png')", "url('bg6.png')", "url('bg7.png')",
    "url('bg8.png')", "url('bg9.png')", "url('bg10.png')", "url('bg11.png')",
    "url('bg12.png')",
  ];

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        if (backgroundColor.includes("url")) {
          const backgroundImage = new Image();
          backgroundImage.src = backgroundColor.split("url('")[1].split("')")[0];
          backgroundImage.onload = () => {
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
            drawImageOnCanvas(img, canvas, ctx);
          };
        } else {
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          drawImageOnCanvas(img, canvas, ctx);
        }
      };
    };
  };

  const drawImageOnCanvas = (img, canvas, ctx) => {
    ctx.drawImage(img, 0, 0, img.width, img.height);
    canvas.toBlob(async (blob) => {
      const fileWithBlob = new File([blob], img.name, {
        type: "image/png",
        lastModified: Date.now(),
      });
      setImage(fileWithBlob);
      const bgRemovedImage = await removeBackground(fileWithBlob);
      setProcessedImage(bgRemovedImage);
    }, "image/png", 0.8);
  };

  const removeBackground = async (imageFile) => {
    const formData = new FormData();
    formData.append("image_file", imageFile);
    formData.append("size", "auto");

    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": "7ttXgVZz8DiAWkP9F14CwD4j",
      },
      body: formData,
    });

    if (response.ok) {
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "image/png" });
      return URL.createObjectURL(blob);
    } else {
      console.error("Error:", response.statusText);
      return null;
    }
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const img = new Image();
    img.src = processedImage;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");

      if (backgroundColor.includes("url")) {
        const backgroundImage = new Image();
        backgroundImage.src = backgroundColor.split("url(")[1].split(")")[0];
        backgroundImage.onload = () => {
          ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, img.width, img.height);
          triggerDownload(canvas);
        };
      } else {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height);
        triggerDownload(canvas);
      }
    };
  };

  const triggerDownload = (canvas) => {
    canvas.toBlob((blob) => {
      const link = document.createElement("a");
      console.log("saiyam")
      link.href = URL.createObjectURL(blob);
      link.download = "background-removed-image.png";
      link.click();
    }, "image/png");
  };

  const handleColorSelect = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="image-upload-container">
      <div className="editor">
        <div className="toolbar">
          <button className="toolbar-item">Background Image Remover</button>
        </div>
        <div className="color-picker">
          <div className="color-options">
            {colorOptions.map((color, index) => (
              <div
                key={index}
                className="color-circle"
                style={{
                  background: color,
                  border: backgroundColor === color ? "2px solid #000" : "none",
                }}
                onClick={() => handleColorSelect(color)}
              ></div>
            ))}
          </div>
          <div className="color-options">
            {imageBackgroundOptions.map((image, index) => (
              <div
                key={index}
                className="image-circle"
                style={{
                  backgroundImage: image,
                  border: backgroundColor === image ? "2px solid #000" : "none",
                }}
                onClick={() => handleColorSelect(image)}
              ></div>
            ))}
          </div>
        </div>
        <div className="image-area" style={{ background: backgroundColor }}>
          {image && (
            <img
              src={processedImage || URL.createObjectURL(image)}
              alt="Selected"
              className="img-display"
            />
          )}
        </div>
        <div className="download-button-container">
          {processedImage && (
            <button onClick={handleDownload} className="download-button">
              Download
            </button>
          )}
        </div>
      </div>
      <div className="sidebar">
        <div className="logo">
          <img src="niftel.png" className="niftel" alt="niftel" />
        </div>
        <div className="dpmain">
          <img src="dp.png" className="dp" alt="Deepika , I am ..." />
        </div>
        <h3>Select Image</h3>
        <button onClick={handleClick} className="upload-button">
          Upload Your Image
        </button>
        <input
          id="image-upload-input"
          type="file"
          onChange={handleImageChange}
          ref={hiddenFileInput}
          style={{ display: "none" }}
        />
        <Linkspart />
      </div>
    </div>
  );
}

export default ImageUpload;