import React, { useState } from "react";
import "./Inventory.css"; // For the inventory page

const InventoryPage = () => {
  // Example inventory data
  const inventory = [
    {
      name: "Raw Materials",
      description: "Basic materials for manufacturing",
      items: [
        { name: "Wood", quantity: 50, unit: "Sheets" },
        { name: "Metal", quantity: 30, unit: "Kilograms" },
      ],
    },
    {
      name: "Finished Goods",
      description: "Products ready for sale",
      items: [
        { name: "Laptop", quantity: 20, unit: "Units" },
        { name: "T-shirt", quantity: 100, unit: "Pieces" },
      ],
    },
    {
      name: "Spare Parts",
      description: "Parts for maintenance and repairs",
      items: [
        { name: "Battery", quantity: 15, unit: "Pieces" },
        { name: "Fan", quantity: 5, unit: "Units" },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="inventory-page">
      <h1>Inventory Management</h1>
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          {inventory.map((category, index) => (
            <li key={index}>
              <button onClick={() => setSelectedCategory(category)}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedCategory && (
        <div className="category-details">
          <h3>{selectedCategory.name}</h3>
          <p>{selectedCategory.description}</p>
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              {selectedCategory.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InventoryPage;
