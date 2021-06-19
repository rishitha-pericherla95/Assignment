
import './App.css';
import Home from './Home';
var time = new Date();
const hours = time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
 
function App() {
  return (
    <div className="App">
      <h1>ColourLovers. <strong>Live.</strong></h1>
       <strong><p>Last Updated at {hours}</p></strong>
      <Home/>
    </div>
  );
}

export default App;
