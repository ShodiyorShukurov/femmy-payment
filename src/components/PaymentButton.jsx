function PaymentButton({ setIsOpen }) {
  return (
    <div className="sticky bottom-0  pt-6 pb-[max(16px, env(safe-area-inset-bottom))] container">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold"
      >
        Davom etish
      </button>
    </div>
  );
}

export default PaymentButton;
