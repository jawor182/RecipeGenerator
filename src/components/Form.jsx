import axios from "axios";
import { useState } from 'react';

const Form = () => {
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [foodItem, setFoodItem] = useState("");
    const [url,setUrl] = useState("");
    const [type,setType] = useState("");

  const handleInputChange = (event) => {
    setFoodItem(event.target.value);
    
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const apiKey = "d8231659ec8b4d1a9547c1dde34e9da9";

  const handleSubmit = async (event) => {
    const results = document.querySelector('.results');
    const container = document.querySelector('.container');
    
    event.preventDefault();
    const queryTerm = foodItem;
    const offset = Math.floor(Math.random() * 250);
    const options = {
        method: 'GET',
        url: new URL(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${queryTerm}&number=${1}&addRecipeInformation=${true}&offset=${offset}&type=${"any"}`), // !other version for random : https://api.spoonacular.com/recipes/random
      };
    try{
        const response = await axios.request(options);
        setTitle(response.data.results[0].title);
        setImage(response.data.results[0].image);
        setUrl(response.data.results[0].spoonacularSourceUrl)
        results.hidden = false;
        container.hidden = false;
    }catch(error)      {
        console.error(error);
    }
    setFoodItem('');
    
  };
  return (
    <>
    <div className="formContainer">
      <div className="form">
        <form onSubmit={handleSubmit} className="content">
          <div className="formWrapper">
            <label className="label">What do you want to eat?</label>
            <input
              type="text"
              className="input"
              placeholder="example: pasta"
              required
              value={foodItem}
              onChange={handleInputChange}
            />
            <label className="label">Add some filters if u want</label>
            <label htmlFor="type"> Food type:
            <select className="select" value={type} onChange={handleTypeChange}>
              <option>main course</option>
              <option>breakfast</option>
              <option>snack</option>
            </select>
            </label>
          </div>
          <input type="submit" className="submitBtn" value="Submit" />
        </form>
        
      </div>
    </div>
    <div className="results" hidden>
        <h2>Result:</h2>
        <h3>{title}</h3>
        <div className="container" hidden>
        <img src={image} alt='recipe' className="image"></img>
        <div className="url">Link to the recipe: <a href={url}>{url}</a></div>
        </div>
    </div>
    </>
  );
};

export default Form;
