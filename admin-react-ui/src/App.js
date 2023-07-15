import './App.scss';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import Single from './Pages/single/Single';
import New from './Pages/new/New';




function App() {
  return (
    <BrowserRouter>
         <Routes>
             <Route>
                 <Route path='/'>
                 <Route index element={<Home />} />

                 {/* login */}
                 <Route path='login' element={<Login />} />

                 {/* Users */}
                 <Route path='users'>
                      <Route index element={<List />} />
                      <Route path=':userId' element={ <Single />} />
                      <Route path='new' element={<New />} />
                 </Route>

                 {/* Product */}
                 <Route path='products'>
                      <Route index element={<List />} />
                      <Route path=':productId' element={ <Single />} />
                      <Route path='new' element={<New />} />
                 </Route>
                  
                 </Route>
             </Route>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
