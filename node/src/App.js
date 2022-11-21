import './App.css';
import {useState} from 'react';
function App() {
  
  return (
    <di>
      <h1>React App</h1>
      
      <h2>Saludandos</h2>
      {Hora()}
      {
        Saludo_Usuario()
      }

    </di>
  )
}
function Hora(respuesta=0) {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours > 8 && hours < 12) {
    timeOfDay = "Buenos dias";
  } else if (hours >= 12 && hours < 21) {
    timeOfDay = "Buenas tardes";
  } else {
    timeOfDay = "Buenas noches";
  }
  if(respuesta==1){
    return timeOfDay;
  }else{
    return <h3>La hora del dia es: {timeOfDay}</h3>
  }
}
function Saludo_Usuario() {
  const [nombre, setNombre] = useState("");

  function handleChange(event) {
    setNombre(event.target.value);
  }
  return (
    <div>
      <h3>Saludando a {nombre}</h3>
      <input type="text" placeholder="Nombre" onChange={handleChange} />
      <h3>La hora del dia es: {Hora(1)}</h3>
    </div>
  )
}
  

export default App;
