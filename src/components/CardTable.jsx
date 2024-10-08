import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://visiting-card-ocer-server.onrender.com/api/cards"
        );
        setCards(response.data);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <p className="loading">Loading cards...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="card-list">
      <div className="header">
        <h2>Saved Visiting Cards</h2>
        <Link to="/upload" className="add-button">
          Add Visiting Card
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th> {/* New column for image */}
              <th>Name</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {cards.length === 0 ? (
              <tr>
                <td colSpan="7">No cards found</td>
              </tr>
            ) : (
              cards.map((card, index) => (
                <tr key={index}>
                  <td>
                    {card.imagePath ? (
                      <img
                        src={`https://visiting-card-ocer-server.onrender.com/${card.imagePath}`}
                        alt="Card"
                        className="card-image"
                      />
                    ) : (
                      <p>No image</p>
                    )}
                  </td>
                  <td>{card.name}</td>
                  <td>{card.jobTitle}</td>
                  <td>{card.company}</td>
                  <td>{card.email}</td>
                  <td>{card.phone}</td>
                  <td>{card.address}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardList;
