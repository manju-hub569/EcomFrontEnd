import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Container/Main/Main';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

store.subscribe(() => console.log('this is store', store.getState()));

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

function App() {
  return (
    <>
      <Provider store = {store}>
        <AlertProvider template={AlertTemplate} {...options}>
            <BrowserRouter>
                <Routes>
                    <Route exact path = '/' element={<Main />} >
                        <Route index  element={<Home />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
          </AlertProvider>
      </Provider>
    </>
  );
}

export default App;
