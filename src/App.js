import moment from 'moment';
import './App.css';
import Home from './Home';
//used moment library for date format conversion
var time = new Date();
const hours = moment(time).format('hh:mm A')

function App() { 
  return (
    <div className="App">
      <div className="heading">ColourLovers. <strong>Live.</strong></div>
       <strong><p>Last Updated at {hours}</p></strong>
      <Home/>
    </div>
  );
}

export default App;
