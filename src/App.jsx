import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Navbar from './components/Navbar';
import Body from './components/Body';
import imageData from './components/Data';

function App() {
  return (
    <div>
      <Navbar/>
      <Body imageData={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
