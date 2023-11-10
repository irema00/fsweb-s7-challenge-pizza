import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import svgKore from "../../Assets/adv-aseets/icons/1.svg";
import svgPizza from "../../Assets/adv-aseets/icons/2.svg";
import svgBurger from "../../Assets/adv-aseets/icons/3.svg";
import svgKizartmalar from "../../Assets/adv-aseets/icons/4.svg";
import svgFastFood from "../../Assets/adv-aseets/icons/5.svg";
import svgGazli from "../../Assets/adv-aseets/icons/6.svg";
import location from "../../Assets/adv-aseets/icons/icon-1.png";
import mail from "../../Assets/adv-aseets/icons/icon-2.png";
import phone from "../../Assets/adv-aseets/icons/icon-3.png";

import li0 from "../../Assets/adv-aseets/insta/li-0.png";
import li1 from "../../Assets/adv-aseets/insta/li-1.png";
import li2 from "../../Assets/adv-aseets/insta/li-2.png";
import li3 from "../../Assets/adv-aseets/insta/li-3.png";
import li4 from "../../Assets/adv-aseets/insta/li-4.png";
import li5 from "../../Assets/adv-aseets/insta/li-5.png";

const Home = () => {
  return (
    <>
      <div className="home-body">
        <div className="home-content">
          <h3>Teknolojik Yemekler</h3>
          <h2>
            KOD ACIKTIRIR <br />
            PIZZA, DOYURUR
          </h2>
          <Link id="order-pizza" to="/pizza">
            <button>
              <p>ACIKTIM</p>
            </button>
          </Link>
        </div>
      </div>

      <div className="home-menu-bar">
        <div className="home-menu-bar-item">
          <img src={svgKore} alt="Kore" />
          <span>YENİ! Kore </span>
        </div>
        <div className="home-menu-bar-item">
          <img src={svgPizza} alt="Pizza" />
          <span>Pizza</span>
        </div>
        <div className="home-menu-bar-item">
          <img src={svgBurger} alt="Burger" />
          <span>Burger</span>
        </div>
        <div className="home-menu-bar-item">
          <img src={svgKizartmalar} alt="Kizartmalar" />
          <span>Kizartmalar </span>
        </div>
        <div className="home-menu-bar-item">
          <img src={svgFastFood} alt="Fast Food" />
          <span>Fast Food </span>
        </div>
        <div className="home-menu-bar-item">
          <img src={svgGazli} alt="Gazli Icecek" />
          <span>Gazli Icecek </span>
        </div>
      </div>

      <div className="advertisement">
        <div className="box1 ">
          <h1>Ozel Lezzetus</h1>
          <p>Position Absolute Aci Burger</p>
          <button id="order-now">
            <p>SIPARIS VER</p>
          </button>
        </div>

        <div className="column">
          <div className="box2">
            <h1> Hackathlon Burger Menu</h1>
            <button id="order-now">
              <p>SIPARIS VER</p>
            </button>
          </div>

          <div className="box3">
            <h1>
              <span>Coooook</span> hizli npm gibi kurye
            </h1>
            <button id="order-now">
              <p>SIPARIS VER</p>
            </button>
          </div>
        </div>
      </div>
      <div className="column-bottom">
        <div className="catchphrase">
          <p>en çok paketlenen menuler</p>
          <h1>Aciktiran Kodlara Doyuran Lezzetler</h1>
        </div>
        <div className="home-menu-bar menu2 ">
          <div className="home-menu-bar-item">
            <img src={svgKore} alt="Kore" />
            <span>Ramen</span>
          </div>
          <div className="home-menu-bar-item">
            <img src={svgPizza} alt="Pizza" />
            <span>Pizza</span>
          </div>
          <div className="home-menu-bar-item">
            <img src={svgBurger} alt="Burger" />
            <span>Burger</span>
          </div>
          <div className="home-menu-bar-item">
            <img src={svgKizartmalar} alt="Kizartmalar" />
            <span>Kizartmalar </span>
          </div>
          <div className="home-menu-bar-item">
            <img src={svgFastFood} alt="Fast Food" />
            <span>Fast Food </span>
          </div>
          <div className="home-menu-bar-item">
            <img src={svgGazli} alt="Gazli Icecek" />
            <span>Gazli Icecek </span>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-info">
          <div className="footer-title">
            <h1>Teknolojik Yemekler</h1>
          </div>
          <div className="contact">
            <div classname="icon">
              <img src={location} alt="location" />
              <p>341 Londonderry Road, Istanbul Turkiye</p>
            </div>
            <div classname="icon">
              <img src={mail} alt="mail" />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div classname="icon">
              <img src={phone} alt="phone" />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
        </div>
        <div className="hot-menu">
          <h3>Siccacik Menuler</h3>
          <p>Terminal Pizza</p>
          <p>5 Kisilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Gecti Mutlu Burger</p>
          <p>Position Absolute Aci Burger</p>
        </div>
        <div className="instagram">
          <h4>Instagram</h4>
          <img src={li0} alt="li0" />
          <img src={li1} alt="li1" />
          <img src={li2} alt="li2" />
          <img src={li3} alt="li3" />
          <img src={li4} alt="li4" />
          <img src={li5} alt="li5" />
        </div>
        <div className="copyright"></div>
      </footer>
    </>
  );
};
export default Home;
