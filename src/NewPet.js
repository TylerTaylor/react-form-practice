import React from 'react';

const NewPet = () => {

  // TODO 1. Create state to hold your form data, whether individual states (name, species) or an object ({ name: '', species: '' })

  // TODO 2. Wire up your input elements - when you type in the input, it needs to trigger a function to set your state. Remember to add a `value` property that lines up with your state.

  // TODO 3. Wire up the form element with a function to handle submitting the form. This function will need to send a POST request, AND add your new object to the array of Pets (from App.js) - how can we get access to that setter function from here? How do we add to an array non-destructively?

  return (
    <div className="form-container">
      <h1>Add Your Pet</h1>
      <form className="pet-form">
        <input 
          type="text" 
          placeholder="Name"
          name="name"
        />
        <input 
          type="text" 
          placeholder="Species" 
          name="species"
        />

        <input type="submit" value="Add your pet" className="btn" />
      </form>
    </div>
  )

}

export default NewPet;