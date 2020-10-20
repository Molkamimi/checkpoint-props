import React from "react";
import "./App.css";

 import Picture from "./Profile/Component/Picture"
 import Profile from './Profile/Component/Profile';
 import Handle from './Profile/Component/Handle';

function App() {
  const HandleName = (name) => alert(name);
 const styleObject ={color:"rgb(192, 60, 104)",textAlign:"center",backgroundColor:"beige",padding: "20px",
 fontFamily: "Oblique"};
  return (
    <div className="App">
       <div className="FullName">
         <div style={styleObject}>
  <Picture></Picture>
  <Profile name="Molka Ben Othmen" bio="I have gotten my matser's degree from IHEC since 2018 and I am studuing development web in GoMyCode" profession="Developer" ></Profile>
  <img/>
<Handle name ="My name is Molka" handleClick={HandleName}/> 
      </div> 
     

        
    </div>
    </div>
  );
}

export default App;
