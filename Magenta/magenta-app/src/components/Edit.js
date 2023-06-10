import React, { useState } from 'react';

const Edit = ({ pet }) => {
  const [editedPet, setEditedPet] = useState(pet);
  const [editSuccess, setEditSuccess] = useState(false);

  const handleNameChange = (e) => {
    setEditedPet((prevPet) => ({ ...prevPet, name: e.target.value }));
  };

  const handleAgeChange = (e) => {
    setEditedPet((prevPet) => ({ ...prevPet, age: e.target.value }));
  };

  const savePet = () => {
    fetch(`http://localhost:9292/pets/${editedPet.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedPet),
    })
      .then((response) => response.json())
      .then((data) => {
        setEditSuccess(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="edit-popup">
      <h3>Edit Pet</h3>
      <form>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={editedPet.name} onChange={handleNameChange} />
        </div>

        <div className="form-row">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={editedPet.age} onChange={handleAgeChange} />
        </div>

        <div className="form-row">
          <button type="button" onClick={savePet}>Save</button>
        </div>
      </form>

      {editSuccess && <p className="edit-success">Edit Successful!</p>}

      <style jsx>{`
        .edit-popup {
          padding: 20px;
          border: 1px solid #ccc;
          background-color: #333;
          color: #fff;
        }

        .form-row {
          margin-bottom: 10px;
        }

        label {
          font-weight: bold;
        }

        input[type="text"],
        input[type="number"] {
          width: 100%;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }

        button {
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }

        .edit-success {
          margin-top: 10px;
          color: green;
        }
      `}</style>
    </div>
  );
};

export default Edit;
