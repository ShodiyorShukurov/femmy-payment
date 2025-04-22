function FooterButton() {
  function closeWebView() {
    if (window.CloseWebViewChannel) {
      CloseWebViewChannel.postMessage("close");
    } else {
      window.history.back(); 
    }
  }

    return (
      <div className="sticky bottom-0 p-4 container">
        <button onClick={closeWebView} className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold">
          Premiumga o‘tish
        </button>
      </div>
    );
  }
  
  export default FooterButton;