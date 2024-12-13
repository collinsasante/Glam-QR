import React, { useState } from "react";
import "./StockMovement.css";

const StockMovement = () => {
  // Sample stock movement data (Replace with dynamic data as needed)
  const initialStockMovements = [
    {
      id: 1,
      item: "Product A",
      movementType: "Incoming",
      quantity: 50,
      date: "2024-12-01",
    },
    {
      id: 2,
      item: "Product B",
      movementType: "Outgoing",
      quantity: 30,
      date: "2024-12-02",
    },
    {
      id: 3,
      item: "Product C",
      movementType: "Incoming",
      quantity: 100,
      date: "2024-12-03",
    },
    {
      id: 4,
      item: "Product D",
      movementType: "Outgoing",
      quantity: 25,
      date: "2024-12-04",
    },
    {
      id: 5,
      item: "Product E",
      movementType: "Incoming",
      quantity: 200,
      date: "2024-12-05",
    },
    // Add more data as necessary
  ];

  const [stockMovements, setStockMovements] = useState(initialStockMovements);
  const [newMovement, setNewMovement] = useState({
    item: "",
    movementType: "Incoming",
    quantity: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovement({
      ...newMovement,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStockMovements([
      ...stockMovements,
      { ...newMovement, id: stockMovements.length + 1 },
    ]);
    setNewMovement({
      item: "",
      movementType: "Incoming",
      quantity: "",
      date: "",
    });
  };

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(stockMovements.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const currentMovements = stockMovements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="stock-movement-container">
      <h1>Stock Movement</h1>

      {/* Stock Movement Table */}
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Movement Type</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentMovements.map((movement) => (
            <tr key={movement.id}>
              <td>{movement.item}</td>
              <td>{movement.movementType}</td>
              <td>{movement.quantity}</td>
              <td>{movement.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Add New Stock Movement Form */}
      <form onSubmit={handleFormSubmit}>
        <h2>Add Stock Movement</h2>
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            name="item"
            value={newMovement.item}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Movement Type</label>
          <select
            name="movementType"
            value={newMovement.movementType}
            onChange={handleInputChange}
            required
          >
            <option value="Incoming">Incoming</option>
            <option value="Outgoing">Outgoing</option>
          </select>
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={newMovement.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={newMovement.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Save Movement</button>
      </form>
    </div>
  );
};

export default StockMovement;
