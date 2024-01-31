import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };

    addRecipe(newRecipe);

    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Cuisine:</td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={cuisine}
                onChange={(event) => setCuisine(event.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Photo URL:</td>
            <td>
              <input
                type="text"
                name="photo"
                value={photo}
                onChange={(event) => setPhoto(event.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Ingredients:</td>
            <td>
              <textarea
                name="ingredients"
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
                required
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Preparation:</td>
            <td>
              <textarea
                name="preparation"
                value={preparation}
                onChange={(event) => setPreparation(event.target.value)}
                required
              ></textarea>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
