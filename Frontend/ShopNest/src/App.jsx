import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <div className="frame-div">
        <div className="rectangle-div" />
        <div className="frame-wrapper1">
          <div className="vuesaxlinearlamp-parent">
            <img
              className="vuesaxlinearlamp-icon"
              loading="lazy"
              alt=""
              src="/vuesaxlinearlamp.svg"
            />
            <div className="electrical-appliances">Electrical Appliances</div>
          </div>
        </div>
        <div className="filter-instance" />
        <div className="sell-text">
          <div className="sell-text-inner">
            <div className="tie-light-parent">
              <img
                className="tie-light-icon"
                loading="lazy"
                alt=""
                src="/tie-light.svg"
              />
              <div className="clothes">Clothes</div>
            </div>
          </div>
          <div className="line-parent">
            <div className="line-div" />
            <div className="frame-wrapper2">
              <div className="vuesaxlinearbrush-parent">
                <img
                  className="vuesaxlinearbrush-icon"
                  alt=""
                  src="/vuesaxlinearbrush.svg"
                />
                <div className="stationery">Stationery</div>
              </div>
            </div>
            <div className="frame-child1" />
          </div>
          <div className="heart-container-wrapper">
            <div className="heart-container">
              <img
                className="book-light-icon"
                loading="lazy"
                alt=""
                src="/book-light.svg"
              />
              <div className="books">Books</div>
            </div>
          </div>
          <div className="ellipse-heart">
            <div className="electric-kettle-parent" />
            <div className="used-electric-kettle-parent">
              <div className="bed-light-parent">
                <img
                  className="bed-light-icon"
                  loading="lazy"
                  alt=""
                  src="/bed-light.svg"
                />
                <div className="furniture">Furniture</div>
              </div>
            </div>
          </div>
          <div className="b-h-parent">
            <div className="search-parent" />
            <div className="search-name">
              <div className="searchlight-component">
                <img
                  className="trophy-light-icon"
                  loading="lazy"
                  alt=""
                  src="/trophy-light.svg"
                />
                <div className="sports-equipment">Sports Equipment</div>
              </div>
            </div>
            <div className="search-parent1" />
            <div className="frame-heart-set">
              <div className="frame-electric-kettle">
                <div className="frame-location-parent">
                  <img
                    className="roll-alt-light-light-icon"
                    loading="lazy"
                    alt=""
                    src="/roll-alt-light-light.svg"
                  />
                  <div className="part-time-jobs">Part Time Jobs</div>
                </div>
              </div>
              <div className="filter-icon1" />
            </div>
          </div>
          <div className="electric-kettle-group">
            <div className="phone-light-parent">
              <img
                className="phone-light-icon"
                loading="lazy"
                alt=""
                src="/phone-light.svg"
              />
              <div className="mobile-phones">Mobile Phones</div>
            </div>
          </div>
          <div className="frame-parent1">
            <div className="line-group">
              <div className="frame-child2" />
              <div className="frame-wrapper3">
                <div className="vuesaxlinearmonitor-parent">
                  <img
                    className="vuesaxlinearmonitor-icon"
                    alt=""
                    src="/vuesaxlinearmonitor.svg"
                  />
                  <input className="laptops" placeholder="Laptops" type="text" />
                </div>
              </div>
            </div>
            <div className="frame-child3" />
          </div>
        </div>
        <div className="frame-wrapper4">
          <div className="vuesaxlinearmouse-parent">
            <img
              className="vuesaxlinearmouse-icon"
              loading="lazy"
              alt=""
              src="/vuesaxlinearmouse.svg"
            />
            <div className="gadgets">Gadgets</div>
          </div>
        </div>
      </div>
      <br />
      <Sidebar />
    </>
  )
}

export default App
