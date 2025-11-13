function Main() {
  return (
    <>
      <main>
        <section className="section-one">
          <article>
            <div>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </div>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
          </article>

          <article className="restaurant-food">
            <img src="restaurantfood.jpg" alt="Restaurant food" />
          </article>
        </section>


        <section className="section-two">
          <article>
            <h3>Specials</h3>
            <button>Online Menu</button>
          </article>

          <div className="menu-cards">
            <article className="menu-card">
              <img src="greeksalad.jpg" alt="Greek Salad"/>
              <div className="menu-card-content">
                <div>
                  <h4>Greek Salad</h4>
                  <p className="price">$12.99</p>
                </div>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and croutons.
                </p>
                <div>
                  <a href="#orderonline" className="order">Order a delivery</a>
                  <img className="delivery-icon" src="deliveryicon.jpg" alt="Delivery Icon"/>
                </div>
              </div>
            </article>

            <article className="menu-card">
              <img src="bruchetta.png" alt="Bruchetta"/>
              <div className="menu-card-content">
                <div>
                  <h4>Bruchetta</h4>
                  <p className="price">$5.99</p>
                </div>
                <p>
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                  </p>
                <div>
                  <a href="#orderonline" className="order">Order a delivery</a>
                  <img className="delivery-icon" src="deliveryicon.jpg" alt="Delivery Icon"/>
                </div>
              </div>
            </article>

            <article className="menu-card">
              <img src="lemondessert.jpg" alt="Lemon Dessert"/>
              <div className="menu-card-content">
                <div>
                  <h4>Greek Salad</h4>
                  <p className="price">$12.99</p>
                </div>
                <p>
                  This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                </p>
                <div>
                  <a href="#orderonline" className="order">Order a delivery</a>
                  <img className="delivery-icon" src="deliveryicon.jpg" alt="Delivery Icon"/>
                </div>
              </div>
            </article>
          </div>
        </section>


        <section className="section-three">
          <h2>Testimonials</h2>
          <div>
            <article className="testinmonial">
              <div>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
              </div>

              <div>
                <img src="reviewone.jpeg" className="profile-picture" alt="Review One"/>
                <p>Annie</p>
              </div>
              <p>My favorite spot!</p>
            </article>

            <article className="testinmonial">
              <div>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
              </div>

              <div>
                <img src="reviewtwo.jpeg" className="profile-picture" alt="Review One"/>
                <p>Marcy</p>
              </div>
              <p>Love the greek salad</p>
            </article>

            <article className="testinmonial">
              <div>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
              </div>

              <div>
                <img src="reviewthree.jpeg" className="profile-picture" alt="Review One"/>
                <p>Mark</p>
              </div>
              <p>Good food</p>
            </article>

            <article className="testinmonial">
              <div>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
                <img src="star.png" className="star" alt="Rating"/>
              </div>

              <div>
                <img src="reviewfour.jpeg" className="profile-picture" alt="Review One"/>
                <p>Jane</p>
              </div>
              <p>Amazing event venue</p>
            </article>
          </div>

        </section>


        <section className="section-four">
          <article>
            <div>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </div>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Founded by brothers Mario and Adrian, our story began with a shared love for authentic Mediterranean flavors and a desire to bring people together through food. Every dish on our menu is crafted with fresh, locally sourced ingredients, inspired by generations of family recipes and reimagined for today's tastes. Whether you're here for a comforting meal or to explore new flavors, Little Lemon welcomes you like family.</p>
          </article>

          <article>
            <div className="brothers-images">
              <img src="adrian.jpg" alt="Adrian"/>
              <img src="marioandadrian.jpg" alt="Mario and Adrian"/>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Main;