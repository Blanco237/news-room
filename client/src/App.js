
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Home from './pages/home/Home';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <Header />
      <Home />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
