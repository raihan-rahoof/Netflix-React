import Navbar from "./components/navbar/Navbar";
import './App.scss';
import Banner from "./components/banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import { originals,Trendings,action,comedy,horror,romance,documentary } from "./urls";


function App() {
  return (
    <div className="App">
     <h1>
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={Trendings} title='Trending' isSmall/>
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={comedy} title='Comedy' isSmall/>
      <Rowpost url={romance} title='Romance' isSmall/>
      <Rowpost url={horror} title='Horror' isSmall/>
      <Rowpost url={documentary} title='Documentary' isSmall/>
     </h1>
    </div>
  );
}

export default App;
