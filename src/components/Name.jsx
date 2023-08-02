import { Link } from "react-router-dom";
const Name = () => {
    return (
      <div className="titleName">
        <div className="titleWrapper">
        <div className="recipeLogo"></div>
        <h1>Recipe.io</h1>
        </div>
        <p>Don&apos;t have idea? Now You have!</p>
        <p><Link to={"/random"}>Random food here</Link></p>
      </div>
    );
  };
  
  export default Name;
  