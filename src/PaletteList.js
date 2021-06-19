import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
const PaletteList = ({ cards }) => {
  return (
    <div className="palette-list">
      <Row >
      {cards.map(card => (
        <Col xl={{span:6}} sm={{span:6}}  >
        <div className="card-preview" key={card.id} >
        
        <div className="text"> 
        <h2>{card.title }</h2>
           <p>by {card.userName} at {card.dateCreated} </p>
          <div className="badge"> <p>{card.numViews} views {card.numVotes} votes</p> </div> </div>
          <div className="image">  <img src={card.imageUrl} width="100" height= "100" alt="palette"/></div>
            </div></Col>   
      ))}
    </Row>
    </div>
  );
}
 
export default PaletteList;