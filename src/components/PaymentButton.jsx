function PaymentButton(setIsOpen) {
  return (
    <div className="sticky bottom-0  pt-6 pb-[max(16px, env(safe-area-inset-bottom))] container">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold"
      >
        Davom etish
      </button>

      <ul className="flex justify-center items-center gap-6 mt-4 text-[#6D6D6D] text-[13px] leading-[18px]  font-[SF-Pro-Rounded-Regular]">
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Restore purchase</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
      </ul>
    </div>
  );
}

export default PaymentButton;
