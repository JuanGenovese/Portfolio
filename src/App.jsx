import { Route, Routes } from 'react-router-dom';
import { Default, ElNorteCultiva, PokemonsApp, JobPortal, Blog } from './views/indexViews';
import "./App.css";

function App() {

  
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Default/>}/>
        <Route path='/ElNorteCultiva' element={<ElNorteCultiva/>}/>
        <Route path='/PokemonsApp' element={<PokemonsApp/>}/>
        <Route path='/JobPortalX' element={<JobPortal/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
    </>
  )
}

export default App
