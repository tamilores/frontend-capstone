import { useNavigate } from 'react-router-dom';

function ReserveATable() {
  const navigate = useNavigate();
  return (
    <>
      <section className="reserve-a-table">
          <article>
            <div>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </div>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button onClick={() => navigate('/orderonline')}>Reserve a Table</button>
          </article>

          <article className="restaurant-food">
            <img src="restaurantfood.jpg" alt="Restaurant food" />
          </article>
        </section>
    </>
  );
}

export default ReserveATable;