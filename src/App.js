import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Provider} from "react-redux";
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Navbar from './components/universalcomp/Navbar';
import store from './components/store/store';

function App() {
  return (
    <>
      <div className='App'>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/cart" exact element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
