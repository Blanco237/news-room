
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <div className='w-full h-screen bg-blue-300' ></div>
      <Footer />
    </div>
  );
}

export default App;
