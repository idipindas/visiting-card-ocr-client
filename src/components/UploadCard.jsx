import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Tesseract from "tesseract.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadCard = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate();
  const [ocrResult, setOcrResult] = useState({
    name: "",
    jobTitle: "",
    company: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedImage(URL.createObjectURL(file));
    processOCR(file);
  };

  const processOCR = (file) => {
    setIsLoading(true);

    Tesseract.recognize(file, "eng", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        extractDetailsFromText(text);
      })
      .finally(() => setIsLoading(false));
  };

  const extractDetailsFromText = (text) => {
    const nameMatch = text.match(/Name[:\-]?\s*(.*)/i);
    const jobTitleMatch = text.match(
      /(Job Title|Title|Position)[:\-]?\s*(.*)/i
    );
    const companyMatch = text.match(
      /(Company|Organization|Business)[:\-]?\s*(.*)/i
    );
    const emailMatch = text.match(
      /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i
    );
    const phoneMatch = text.match(
      /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/
    );
    const addressMatch = text.match(/Address[:\-]?\s*(.*)/i);

    setOcrResult({
      name: nameMatch ? nameMatch[1] : "",
      jobTitle: jobTitleMatch ? jobTitleMatch[2] : "",
      company: companyMatch ? companyMatch[2] : "",
      email: emailMatch ? emailMatch[0] : "",
      phone: phoneMatch ? phoneMatch[0] : "",
      address: addressMatch ? addressMatch[1] : "",
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOcrResult({ ...ocrResult, [name]: value });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await axios.post("https://visiting-card-ocer-server.onrender.com/api/saveCardData", ocrResult);
      if(response){
        setOcrResult({
          name: "",
          jobTitle: "",
          company: "",
          email: "",
          phone: "",
          address: "",
        });
        navigate("/");
      }
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>
            Drag 'n' drop a visiting card image here, or click to select one
          </p>
        )}
        {uploadedImage && (
          <div className="preview">
            <p>Image preview:</p>
            <img src={uploadedImage} alt="Preview" />
          </div>
        )}
      </div>

      {isLoading && <p className="loading">Processing the image...</p>}

      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={ocrResult.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          value={ocrResult.jobTitle}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Company Name:</label>
        <input
          type="text"
          name="company"
          value={ocrResult.company}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={ocrResult.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={ocrResult.phone}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Address:</label>
        <textarea
          name="address"
          value={ocrResult.address}
          onChange={handleInputChange}
        />
      </div>

      {/* Save Button */}
      <button className="save-button" onClick={handleSave} disabled={isSaving}>
        {isSaving ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default UploadCard;
