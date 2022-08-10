import "../App.css";
import Bannermid from "./Banners/Bannermid";
import Bannertop from "./Banners/Bannertop";
import Bannerbot from "./Banners/Bannerbot";
import Footer from "./Footer";
import Header from "./Header";
import Holdings from "./HomeBody/Holdings";
import Newsfeed from "./HomeBody/Newsfeed";
import Stats from "./HomeBody/Stats";
import Movements from "./HomeBody/Movements";
import Moreinfo from "./HomeBody/Moreinfo";
import Crypto from "./HomeBody/Crypto";

function Home() {
  return (
    <div className="App">
      <Bannertop />
      <div className="app__header"><Header /></div>
      <div className="app__body">
        <div className="app__container"><Newsfeed /><Stats /></div>
      </div>
      <div className="app__bannermid"><Bannermid /></div>
      <div className="app__movements"><Movements/></div>
      <div className="app__crypto"><Crypto/></div>
      <div className="app__bannermid"><Bannerbot /></div>
      <Holdings />
      <div className="app__moreinfo"><Moreinfo/></div>
    </div>
  );
}

export default Home;