import ReserveATable from './ReserveATable.js';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js';
import Founders from './Founders.js';



function Home() {
  return (
    <>
      <main>
        <ReserveATable />

        <Specials />

        <Testimonials />

        <Founders />
      </main>
    </>
  );
}

export default Home;