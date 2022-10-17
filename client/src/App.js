import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Home from './pages/home/Home';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Story from './pages/story/Story';

function App() {

  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/story/:id' element={<Story />} />
        </Routes>
      </Router>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
