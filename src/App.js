import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ContactoPage} from './pages/Contacto';
import { Nosotros } from './pages/Nosotros';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
          <NavBar/>
          <Routes>
              <Route exact path='/' element={<ItemListContainer/>}/>
              <Route exact path='/inicio' element={<ItemListContainer/>}/>
              <Route exact path='/contacto' element={<ContactoPage/>}/>
              <Route exact path='/nosotros' element={<Nosotros/>}/>
              <Route exact path='/destinos' element={<ItemListContainer/>}/>
              <Route exact path="/destinos/:id" element={<ItemDetailContainer/>}/>
              <Route exact path='/categoria/argentina/:categoryId' element={<ItemListContainer/>}/>
              <Route exact path='/paquetes'element={<ItemListContainer/>}/>
          </Routes>  
      </div>
    </BrowserRouter> 
  );
}

export default App;
