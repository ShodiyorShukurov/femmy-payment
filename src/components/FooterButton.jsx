import { NavLink } from 'react-router-dom';

function FooterButton() {
  // function closeWebView() {
  //   if (window.CloseWebViewChannel) {
  //     CloseWebViewChannel.postMessage('close');
  //   } else {
  //     window.history.back();
  //   }
  // }

  return (
    <div className="sticky bottom-0 px-4 pt-4 pb-[max(16px,env(safe-area-inset-bottom))] container">
      <NavLink
        to="/payment"
        // onClick={closeWebView}
        className="w-full block text-center bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold"
      >
        Premiumga o‘tish
      </NavLink>
    </div>
  );
}

export default FooterButton;
