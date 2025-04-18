import Header from './components/Header';
import MainSection from './components/MainSection';
import FooterButton from './components/FooterButton';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <MainSection />
      <FooterButton />
    </div>
  );
}

export default App;