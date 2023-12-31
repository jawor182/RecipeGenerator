import axios from "axios";
import { useState } from "react";

const Random = () =>{
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [url,setUrl] = useState("");
    const [type,setType] = useState("");


const apiKey = "d8231659ec8b4d1a9547c1dde34e9da9";
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleSubmit = async (event) => {
    const results = document.querySelector('.results');
    const container = document.querySelector('.container');
    
    event.preventDefault();
    const options = {
        method:"GET",
        url: new URL(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=${type}`),
    }
    try{
        const response = await axios.request(options);
        console.log(response.data);
        setTitle(response.data.recipes[0].title);
        setImage(response.data.recipes[0].image);
        setUrl(response.data.recipes[0].spoonacularSourceUrl);
        results.hidden = false;
        container.hidden = false;
    }catch(error){
        console.error(error)
    }
  };
  return (
  <>
  <div>
    <form onSubmit={handleSubmit} className="form2">
      <label className="label">Select Type:</label>
      <select className="select" value={type} onChange={handleTypeChange}>
        <option value="dinner">Dinner</option>
        <option value="breakfast">Breakfast</option>
        <option value="main course">Main course</option>
        <option value="salad">Salad</option>
        <option value="snack">Snack</option>
        <option value="dessert">Dessert</option>
        <option value="side dish">Side dish</option>
        <option value="beverage">Beverage</option>
        <option value="drink">Drink</option>
      </select>
        <label className="label">Click and get random dish!</label>
        <input type="submit" className="randomBtn"  value="Click me!"></input>
    </form>
    <div className="results" hidden>
        <h2>Result:</h2>
        <h3>{title}</h3>
        <div className="container" hidden>
        <img src={image} alt='recipe' className="image"></img>
        <div className="url">Link to the recipe: <a href={url}>{url}</a></div>
        </div>
    </div>
  </div>
  </>
  )
}
export default Random