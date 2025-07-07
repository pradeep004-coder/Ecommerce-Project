import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ProductProvider from './Context/ProductContext';
import Cart from './Components/Cart';
import SearchResultsPage from './Components/SearchResultsPage';
import ProductDetail from './Components/ProductDetail';
import OrderConfirmation from './Components/OrderConfirmation';
function App() {
  return (
    <ProductProvider> 
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}>
              <Route path='cart' element={<Cart/>} />
            </Route>
            <Route path='/search' element={<SearchResultsPage/>}>
              <Route path='cart' element={<Cart/>} />
            </Route>
            <Route path='/category/:categoryName' element={<SearchResultsPage/>}>
              <Route path='cart' element={<Cart/>} />
            </Route>
            <Route path="/product/:productId" element={<ProductDetail />} >
              <Route path='cart' element={<Cart/>} />
            </Route>
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
