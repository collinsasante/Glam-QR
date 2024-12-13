import React, { useState } from "react";
import "./ProductTable.css"; // Import the CSS

const ProductTable = () => {
  // Example product data (you can add more products for demonstration)
  const products = [
    {
      name: "Product Name",
      sku: "SKU12345",
      size: "Large",
      quantity: 100,
      price: "$50.00",
      batchNumber: "Batch001",
      productImage: "https://example.com/product-image.jpg",
      productInfo: "This is a detailed description of the product.",
      manufacturingDate: "2024-12-01 10:30:00",
    },
    {
      name: "Sample Product",
      sku: "SKU67890",
      size: "Medium",
      quantity: 50,
      price: "$30.00",
      batchNumber: "Batch002",
      productImage: "https://example.com/sample-image.jpg",
      productInfo: "This product is a sample for demonstration.",
      manufacturingDate: "2024-11-25 14:15:00",
    },
    // Add more products as needed
  ];

  const productsPerPage = 5; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Function to download the CSV file
  const downloadCSV = () => {
    const csvData = products.map((product) => [
      product.name,
      product.sku,
      product.size,
      product.quantity,
      product.price,
      product.batchNumber,
      product.productImage,
      product.productInfo,
      product.manufacturingDate,
    ]);

    // Add headers to the CSV data
    const headers = [
      "Name",
      "SKU",
      "Size",
      "Quantity",
      "Price",
      "Batch Number",
      "Product Picture URL",
      "Product Info",
      "Manufacturing Date and Time",
    ];
    csvData.unshift(headers);

    // Convert to CSV string
    const csvString = csvData.map((row) => row.join(",")).join("\n");

    // Create a Blob and download the CSV
    const blob = new Blob([csvString], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "products.csv";
    link.click();
  };

  // Paginate the products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <h1>Available Products</h1>

      {/* Remove the CSV import field */}
      <div className="buttons-container">
        <button onClick={downloadCSV}>Download CSV</button>
      </div>

      {/* Table displaying product data */}
      <table id="productTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Batch Number</th>
            <th>Product Picture URL</th>
            <th>Product Info</th>
            <th>Manufacturing Date and Time</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.size}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.batchNumber}</td>
              <td>{product.productImage}</td>
              <td>{product.productInfo}</td>
              <td>{product.manufacturingDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="next-page-button"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
