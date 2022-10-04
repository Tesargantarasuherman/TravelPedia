import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';
import { Img1, Img2, Img3, Location, Logo } from './assets';

function App() {
  return (
    <div>
      <div className="navbar">
        <motion.div
          className="navbar-list">
          <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 2, type: 'spring', stiffness: 120 }} className="navbar-image">
            <img src={Logo} alt="" srcset="" width={50} height={50} />
          </motion.div>
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}>
            <ul className='navbar-menu'>
              <li>Download App</li>
              <li>Partner With Us</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </motion.div>
        </motion.div>
        <div className="navbar-content">
          <p className='title-navbar-content'>Travel Around The World</p>
          <p className="description-navbar-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, sit voluptate? Modi nesciunt in magnam, dicta soluta maxime animi dolores!
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            className="input-search-navbar">
            <img src={Location} alt="" className='icon-search-navbar' />
            <input type="text" className='input input-search-destination' placeholder='City,Destination' />
            <input type="text" className='input-search-date' placeholder='Date' />
            <input type="text" className='input input-search-category' placeholder='Category' />
            <motion.button whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
              whileTap={{ scale: 0.9 }}
              className='button-input-search'><span className="lnr lnr-magnifier" /></motion.button>
          </motion.div>
        </div>
      </div>
      <div className="container-content">
        <p className='label-container-content'>Guides For Your Next Vacation</p>
        <p className='description-container-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, hic.</p>
        <div className="container-button-sort-category">
          <button className='active'>All</button>
          <button>Trending</button>
          <button>Popular</button>
          <button>Features</button>
          <button>Recommended</button>
          <button>Tour Packages</button>
        </div>
        <div className="content">
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            className="body-card-content">
            <img src={Img1} alt="" srcset="" className='image-content' />
            <div className="container-title">
              <p className="text-location-content">
                <span className="lnr lnr-map-marker" />
                Bandung
              </p>
              <p className="text-price-content">
                Rp.800.000
              </p>
            </div>
            <div className="spacing-content" />
            <p className='description-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quae dolorum id libero corrupti! Optio harum cupiditate nostrum magnam quasi! <a href='' className='link-content'>Read More...</a></p>
          </motion.div>
          <div className="body-card-content">
            <img src={Img2} alt="" srcset="" className='image-content' />
            <div className="container-title">
              <p className="text-location-content">
                <span className="lnr lnr-map-marker" />
                Bandung
              </p>
              <p className="text-price-content">
                Rp.800.000
              </p>
            </div>
            <div className="spacing-content" />
            <p className='description-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quae dolorum id libero corrupti! Optio harum cupiditate nostrum magnam quasi! <a href='' className='link-content'>Read More...</a></p>
          </div>
          <div className="body-card-content">
            <img src={Img3} alt="" srcset="" className='image-content' />
            <div className="container-title">
              <p className="text-location-content">
                <span className="lnr lnr-map-marker" />
                Bandung
              </p>
              <p className="text-price-content">
                Rp.800.000
              </p>
            </div>
            <div className="spacing-content" />
            <p className='description-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quae dolorum id libero corrupti! Optio harum cupiditate nostrum magnam quasi! <a href='' className='link-content'>Read More...</a></p>
          </div>
          <div className="body-card-content">
            <img src={Img2} alt="" srcset="" className='image-content' />
            <div className="container-title">
              <p className="text-location-content">
                <span className="lnr lnr-map-marker" />
                Bandung
              </p>
              <p className="text-price-content">
                Rp.800.000
              </p>
            </div>
            <div className="spacing-content" />
            <p className='description-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quae dolorum id libero corrupti! Optio harum cupiditate nostrum magnam quasi! <a href='' className='link-content'>Read More...</a></p>
          </div>
        </div>
      </div>
      {/* Benefit */}
      <div className="container-benefit">
        <div className="body-benefit">
          <div className="body-card-benefit">
            <div style={{flex:1}}>
            <img src={Img2} alt="" srcset="" className='img-benefit' />
            </div>
            <div className="description-benefit">
              <h1 className='title-description-benefit'>Lorem, ipsum dolor.</h1>
              <p className='label-description-benefit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste pariatur accusantium optio beatae ad exercitationem dicta fugit nihil tenetur cumque eum aliquam incidunt delectus esse excepturi consectetur inventore dignissimos nisi, itaque officiis nostrum deserunt quisquam? Inventore, error voluptas. Architecto excepturi praesentium sint aliquid vel enim consequatur, reiciendis vero nostrum ex.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
