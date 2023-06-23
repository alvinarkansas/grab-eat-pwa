import preferredMerchantIcon from "./icons/icon-preferred-merchant.svg";
import "./App.css";

function App() {
  return (
    <section className="page">
      <h1>Restoran Terdekat yang Populer</h1>

      <div className="merchant">
        <div className="merchant-thumbnail">
          <img
            src="https://d1sag4ddilekf6.azureedge.net/compressed/merchants/IDGFSTI00001j9i/hero/352123cb9b34490cb3c35b245ac95714_1625038625666997968.jpeg"
            alt="thumbnail"
          />
          <div className="promo-tag">
            <span>Promo</span>
            <div className="tag-tail"></div>
          </div>
        </div>
        <div className="merchant-description">
          <div className="preferred-merchant">
            <img src={preferredMerchantIcon} alt="icon" />
            <span>Restoran Pilihan</span>
          </div>

          <h2>Sate Taichan Senayan - Brontokusuman</h2>

          <div className="merchant-detail">
            <p>Satay</p>
            <div>
              <div>
                <span>⭐</span>
                <span>4.8</span>
              </div>
              <div>
                <span>🕘</span>
                <span>25 mnt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
