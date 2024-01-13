import Navbar from "./components/navbar/Navbar";
import './App.scss';
import Banner from "./components/banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import { originals,Trendings,Action } from "./urls";


function App() {
  return (
    <div className="App">
     <h1>
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={Trendings} title='Trending' isSmall/>
     </h1>
    </div>
  );
}

export default App;
