function FooterButton() {
  function closeWebView() {
    if (window.CloseWebViewChannel) {
      CloseWebViewChannel.postMessage("premium");
    } else {
      window.history.back(); 
    }
  }

    return (
      <div className="p-4 container">
        <button onClick={closeWebView} className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold">
          Premiumga o‘tish
        </button>
      </div>
    );
  }
  
  export default FooterButton;