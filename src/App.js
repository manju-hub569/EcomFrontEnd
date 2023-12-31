import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Container/Main/Main';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';

store.subscribe(() => console.log('this is store', store.getState()));

function App() {
  return (
    <>
      <Provider store = {store}>
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' element={<Main />} >
                    <Route index  element={<Home />}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
