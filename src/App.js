import logo from './logo.svg';
import Accordion from './components/Accordion';
import RandomBackgroundColor from './components/RandomBackgroundColor'
import Slicer from './components/Slicer';
import './style.css'
import StarRating from './components/StarRating';
import LoadMoreData from './components/LoadMoreData';
import SideMenu from './components/SideMenu';
import QrCodeComponent from './components/QrCodeComponent';
function App() {
  return (
    <div className='app'>
      {/* <Accordion /> */}
      {/* <RandomBackgroundColor /> */}
      {/* <StarRating /> */}
      {/* <Slicer /> */}
      {/* <LoadMoreData /> */}
      {/* <SideMenu /> */}
      <QrCodeComponent />
    </div>
  );
}

export default App;
