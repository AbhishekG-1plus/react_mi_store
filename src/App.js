import './App.css';
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Slider from './components/Slider.js'
import pkg from './data/data.json'
import Offers from './components/offer.js'
import Heading from './components/Heading.js'
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from './components/ProductReviews.js'
import VIDEOS from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js';

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={pkg.miPhones} redmiPhones={pkg.redmiPhones} tv={pkg.tv} laptop={pkg.laptop} 
      fitnessAndLifestyle ={pkg.fitnessAndLifeStyle} home ={pkg.home}  audio={pkg.audio} accessories={pkg.accessories}/>

      <Slider start={pkg.banner.start} />
      <Offers offer={pkg.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct StarProduct={pkg.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path="/music" element={<HotAccessories music={pkg.hotAccessories.music} musicCover={pkg.hotAccessoriesCover.music} />} />
      </Routes>

      <Routes>
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={pkg.hotAccessories.smartDevice} smartDeviceCover={pkg.hotAccessoriesCover.smartDevice} />} />
      </Routes>

      <Routes>
        <Route exact path="/home" element={<HotAccessories home={pkg.hotAccessories.home} homeCover={pkg.hotAccessoriesCover.home} />} />
      </Routes>

      <Routes>
        <Route exact path="/lifestyle" element={<HotAccessories lifestyle={pkg.hotAccessories.lifeStyle} lifestyleCover={pkg.hotAccessoriesCover.lifeStyle} />} />
      </Routes>

      <Routes>
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={pkg.hotAccessories.mobileAccessories} mobileAccessoriesCover={pkg.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Heading text="PRODUCT REVIEW" />

      <ProductReviews productReviews={pkg.productReviews}/>

      <Heading text="VIDEOS" />

      <VIDEOS videos={pkg.videos}/>

      <Heading text='IN THE PRESS'/>
       
      <Banner banner={pkg.banner} />

      <Footer footer={pkg.footer}/>
    </Router>

  );
}

export default App;
