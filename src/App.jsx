import Header from './components/Header';
import MainSection from './components/MainSection';
import FooterButton from './components/FooterButton';
import Payment from './components/payment';
import { Route, Routes } from 'react-router-dom';
import Maqola from './Pages/Maqola';
// import {Payment} from './components/payment';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* <Header /> */}
      {/* <MainSection />
      <FooterButton /> */}
      {/* <Payment/> */}

      <Routes>
        <Route path="/:id" element={<Maqola />} />
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </div>
  );
}

export default App;
