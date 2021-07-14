import logo from "./logo.svg";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { ViewShoppingCart } from "./components/ViewShoppingCart";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ProductPage} from "./components/ProductPage";
import {CheckoutPage} from './components/CheckOutPage';
import {Payment} from './components/Payment';
import {Confirmation} from './components/Confirmation'

function App() {
  return (
    <Router>
       <Route exact path="/" component={ProductList}/>
       <Route path="/cart" component={ViewShoppingCart}/>
       <Route path="/productpage" component={ProductPage}/>
       <Route path="/checkout" component={CheckoutPage}/>
       <Route path="/payment" component={Payment}/>
       <Route path="/confirm" component={Confirmation}/>
    </Router>
   
  );
}

export default App;
