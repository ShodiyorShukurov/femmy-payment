import PriceCheckbox from "./PriceCheckbox";

function PaymentButton({ setIsOpen, setSelectItem ,paymentData }) {
  return (
    <div className="fixed bottom-0 pt-6 pb-[max(16px, env(safe-area-inset-bottom))] container px-4">
      <PriceCheckbox setSelectItem={setSelectItem} paymentData={paymentData} />
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold mt-[20px]"
      >
        Davom etish
      </button>
    </div>
  );
}

export default PaymentButton;
