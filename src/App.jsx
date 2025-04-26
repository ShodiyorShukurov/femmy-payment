import { Route, Routes } from 'react-router-dom';
import Maqola from './Pages/Maqola';
import Advertisement from './components/Advertisement';
import Payment from './components/payment';
import Payment2 from './components/Payment2';
import ChangePaymentModal from './components/ChangePaymentModal2';
import Advertisement2 from './components/Advertisement2';


function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Routes>
        <Route path="/" element={<Maqola />} />
        <Route path="/advertisement" element={<Advertisement />} />
        <Route path="/advertisement2" element={<Advertisement2 />} />
        <Route path='/payment/:id' element={<Payment/>}/>
        <Route path='/payment2/:id' element={<Payment2/>}/>
        <Route path='/payment2/modal/:id' element={<ChangePaymentModal/>}/>
      </Routes>
    </div>
  );
}

export default App;
