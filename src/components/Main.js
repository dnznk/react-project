import HeaderImage from "../images/restauranfood.jpg";
import Item1Image from "../images/greek salad.jpg";
import Item2Image from "../images/bruchetta.svg";
import Item3Image from "../images/lemon dessert.jpg";

function Main() {
  return (
    <>
      <main>
        <div className="main-container">
          <div className="hero-section">
            <img src={HeaderImage} alt="Logo"></img>
            <div className="hero-section-content">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <button>Reserve a table</button>
            </div>
          </div>
          <div className="specials-section">
            <div className="specials-header">
              <h1>This week's specials!</h1>
              <button>Online Menu</button>
            </div>
            <div className="specials-item-container">
              <div className="specials special-1">
                <img src={Item1Image} alt="Item 1"></img>
                <div className="special-item-data">
                  <h3 className="special-name">Greek salad</h3>
                  <p className="special-price"> $12.99</p>
                </div>
                <div className="special-description">
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    garlic and rosemary croutons.
                  </p>
                  <a>Order a delivery</a>
                </div>
              </div>

              <div className="specials special-2">
                <img src={Item2Image} alt="Item 2"></img>
                <div className="special-item-data">
                  <h3 className="special-name">Greek salad</h3>
                  <p className="special-price"> $12.99</p>
                </div>
                <div className="special-description">
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    garlic and rosemary croutons.
                  </p>
                  <a>Order a delivery</a>
                </div>
              </div>

              <div className="specials special-3">
                <img src={Item3Image} alt="Item 3"></img>
                <div className="special-item-data">
                  <h3 className="special-name">Greek salad</h3>
                  <p className="special-price"> $12.99</p>
                </div>
                <div className="special-description">
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    garlic and rosemary croutons.
                  </p>
                  <a>Order a delivery</a>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-section"></div>
          <div className="about-section"></div>
        </div>
      </main>
    </>
  );
}

export default Main;
