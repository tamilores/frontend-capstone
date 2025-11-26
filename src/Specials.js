import { useNavigate } from 'react-router-dom';

function Specials() {
  const navigate = useNavigate();
  return (
    <>
      <section className="specials">
          <article>
            <h3>Specials</h3>
            <button onClick={() => navigate('/menu')}>Online Menu</button>
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
    </>
  );
}

export default Specials;