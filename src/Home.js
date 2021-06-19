import PaletteList from "./PaletteList";
import useFetch from "./useFetch";

const Home = () => {
  
    const { error, isPending, data: cards } = useFetch('http://www.colourlovers.com/api/palettes/new?format=json')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { cards && <PaletteList cards={cards} /> }
    </div>
  );
}
 
export default Home;