import Navbar from "./components/navbar/Navbar";
import './App.scss';
import Banner from "./components/banner/Banner";


function App() {
  return (
    <div className="App">
     <h1>
      <Navbar/>
      <Banner/>
     </h1>
    </div>
  );
}

export default App;
