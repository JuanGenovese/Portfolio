import { Route, Routes } from 'react-router-dom';
import { Default } from './views/indexViews';
import "./App.css";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Default/>}/>
      </Routes>
    </>
  )
}

export default App
