import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductListing from './containers/productListing';
import ProductDetail from './containers/ProductDetail';
import PageNotFound from './containers/NotFount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
