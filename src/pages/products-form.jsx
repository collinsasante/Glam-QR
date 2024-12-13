import React, { useState } from "react";
import "./ProductsForm.css"; // Import the CSS file at the top of the component file

const ProductsForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    productName: "",
    sku: "",
    size: "",
    quantity: 0,
    pictureUrl: "", // Changed to pictureUrl
    price: 0,
    shiftOperator: "",
    productInfo: "",
    manufacturingDate: "",
    batchNumber: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (e.g., save data)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="product-form-container">
      <h1>Create Products</h1>
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>

        {/* SKU and Size on the same line */}
        <div className="form-group-inline">
          <div className="form-group">
            <label htmlFor="sku">SKU:</label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="size">Size:</label>
            <input
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Quantity and Price on the same line */}
        <div className="form-group-inline">
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Batch Number and Product Picture on the same line */}
        <div className="form-group-inline">
          <div className="form-group">
            <label htmlFor="batchNumber">Batch Number:</label>
            <input
              type="text"
              id="batchNumber"
              name="batchNumber"
              value={formData.batchNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pictureUrl">Product Picture URL:</label>
            <input
              type="text"
              id="pictureUrl"
              name="pictureUrl"
              value={formData.pictureUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
              required
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="form-group">
          <label htmlFor="productInfo">Product Info:</label>
          <textarea
            id="productInfo"
            name="productInfo"
            value={formData.productInfo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Manufacturing Date and Time */}
        <div className="form-group">
          <label htmlFor="manufacturingDate">
            Manufacturing Date and Time:
          </label>
          <input
            type="datetime-local"
            id="manufacturingDate"
            name="manufacturingDate"
            value={formData.manufacturingDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Save Product</button>
      </form>
    </div>
  );
};

export default ProductsForm;
