import HeaderImage from "../images/restauranfood.jpg";
import Item1Image from "../images/greek salad.jpg";
import Item2Image from "../images/bruchetta.svg";
import Item3Image from "../images/lemon dessert.jpg";
import Person1Image from "../images/p1.jpg";
import Person2Image from "../images/p2.jpg";
import Person3Image from "../images/p3.jpg";
import Person4Image from "../images/p4.jpg";
import AboutImg1 from "../images/about1.jpg";
import AboutImg2 from "../images/about2.jpg";

function Main() {
  return (
    <>
      <main>
        <div className="main-container">
          <section className="hero-section">
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
          </section>
          <section className="specials-section">
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
          </section>
          <section className="testimonials-section">
            <div className="testimonial-box">
              <div className="testimonial-person">
                <img src={Person1Image}></img>
                <p className="testimonial-name">John</p>
                <p className="testimonial-rating">4,5/5</p>
                <p className="testimonial-review">
                  "Best food in town! Also the delivery process is super
                  smooth."
                </p>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-person">
                <img src={Person2Image}></img>
                <p className="testimonial-name">Liza</p>
                <p className="testimonial-rating">5/5</p>
                <p className="testimonial-review">"LOVE this restaurant."</p>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-person">
                <img src={Person3Image}></img>
                <p className="testimonial-name">Marc</p>
                <p className="testimonial-rating">4/5</p>
                <p className="testimonial-review">
                  "I order here on a weekly basis and can't complain."
                </p>
              </div>
            </div>
            <div className="testimonial-box">
              <div className="testimonial-person">
                <img src={Person4Image}></img>
                <p className="testimonial-name">Cathy</p>
                <p className="testimonial-rating">4,5/5</p>
                <p className="testimonial-review">
                  "Everyone there is super friendly and I love the atmosphere
                  aswell as the food!"
                </p>
              </div>
            </div>
          </section>
          <section className="about-section">
            <div className="about-description">
              <h1>Little Lemon</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="about-images">
              <img className="about-img-1" src={AboutImg1}></img>
              <img className="about-img-2" src={AboutImg2}></img>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Main;
