import React, {useState} from "react";
import {v4 as uuid} from "uuid"

function ItemForm({onItemFormSubmit}){
    const[newItem,setNewItem]= useState("");
    const[category,setCategory]= useState("Produce");

    function handleNameChange(event){
      setNewItem(event.target.value);
    }

    function handleCategoryChange(event){
      setCategory(event.target.value);
    }

    function handleFormSubmit(event){
      event.preventDefault();
      onItemFormSubmit({
        id:uuid(),
        newItem,
        category,
      });
    }

  
  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text"
          name="name" 
          value={newItem}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
