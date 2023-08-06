import { useState } from "react";


const Color = ({color,setSelectedColor}) => {
  return (
  <div 
  className={color}
  onClick={()=> setSelectedColor(color)}
  ></div>
  )
}

const App = () => {

  const [selectedColor, setSelectedColor] = useState("")

  return (
    <div id="container">
      <div id="navbar"
      style={{backgroundColor: selectedColor}}>

        <div>Currently selected: </div>
        <div className= {selectedColor} >{selectedColor} </div>
      </div>
      <div id="colors-list">
        <Color color="black" setSelectedColor={setSelectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor}/>
        <Color color="orange" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
