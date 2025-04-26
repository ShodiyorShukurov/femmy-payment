import { useNavigate } from 'react-router-dom';

function FooterButton({ id, nimadir }) {
  const navigate = useNavigate();

  function closeWebView() {
    if (id !== null && (nimadir == "false" || nimadir == false)) {
      navigate('/ads/' + id);
    } else {
      CloseWebViewChannel.postMessage('close');
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 px-4 pt-4 pb-[max(8px,env(safe-area-inset-bottom))] container bg-[white]">
      <p className="mb-2 text-[#000] font-medium text-[16px] leading-[24px] text-center">
        Siz uchun eng dolzarb mavzuda chuqur tahlil – Premiumda ochiladi
      </p>
      <button
        onClick={closeWebView}
        className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold"
      >
        Premiumga o‘tish
      </button>
    </div>
  );
}

export default FooterButton;
