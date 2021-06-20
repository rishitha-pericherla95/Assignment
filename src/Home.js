import PaletteList from "./PaletteList";
import useFetch from "./useFetch";

const Home = () => {
  //sending the url of the API to the useFetch function and storing the data in cards constant.
    const { error, isPending, data: cards } = useFetch('http://www.colourlovers.com/api/palettes/new?format=json')
    console.log("cards", cards)
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {/* sending the cards data to PaletteList Component */}
      { cards && <PaletteList cards={cards} />}
    </div>
  );
}
 
export default Home;