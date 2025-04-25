import { Route, Routes } from 'react-router-dom';
import Maqola from './Pages/Maqola';
import Advertisement from './components/Advertisement';
import Payment from './components/payment';


function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Routes>
        <Route path="/" element={<Maqola />} />
        <Route path="/advertisement" element={<Advertisement />} />
        <Route path='/payment/:id' element={<Payment/>}/>
      </Routes>
    </div>
  );
}

export default App;
