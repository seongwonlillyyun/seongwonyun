
import Header from './Header';
import Aboutme from './Aboutme';
import Research from './Research';
import Contactme from './Contactme';
import Cvpage from './Cvpage';
import Footer from './Footer';

const Home_kr = () => {
return(
  <>
    <Header/>
    <main>
      <section id='aboutme'>
        <Aboutme/>
      </section>
      <section id='research'>
        <Research/>
      </section>
      <section id='cv'>
        <Cvpage/>
      </section>
      <section id='contact'>
        <Contactme/>
      </section>
    </main>
    <Footer/>
  </>
  );
}
export default Home_kr;