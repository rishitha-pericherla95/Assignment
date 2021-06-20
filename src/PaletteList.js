import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import moment from 'moment';

const PaletteList = ({ cards }) => {
   //getting the cards data and going through each set using id as key component for map function
   //used moment library for date format conversion
   //used the react-simple-flex-grid library for column and row display
  return (
    <div className="palette-list">
      <Row >
      {cards.map(card => (
        <Col xl={{span:6}}   >
        <div className="card-preview" key={card.id} >
        
        <div className="text"> 
        <h2>{card.title }</h2>
           <p>by {card.userName} at {moment(card.dateCreated).format('hh:mm A')} </p>
          <div > <p className="badge">{card.numViews} views {card.numVotes} votes</p> </div>
           </div>
          <div className="image">  <img src={card.imageUrl} width="100" height= "100" alt="palette"/></div>
            </div></Col>   
      ))}
    </Row>
    </div>
  );
}
 
export default PaletteList;