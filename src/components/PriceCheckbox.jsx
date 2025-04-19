const PriceCheckbox = ({ price, index, isChecked, onChange, prices }) => {
    const handleCheckboxChange = () => {
      onChange(index);
    };
  
    const handleRadioChange = (radioIndex) => {
      let href = "";
      if (index === 0) {
        if (radioIndex === 0) {
          href = `https://checkout.paycom.uz/${btoa(
            `m=6697d19280d270b331826481;ac.user_id=%user_id%;ac.tarif=${prices[0].name.slice(8)};ac.ilova=Qiblah;a=${prices[0].price.slice(0, -3) * 100}`
          )}`;
        } else if (radioIndex === 1) {
          href = `https://my.click.uz/services/pay?merchant_id=26420&service_id=34442&transaction_param=Qiblah&additional_param3=%user_id%&amount=${prices[0].price.slice(0, -3)}&additional_param4=${prices[0].name.slice(8)}`;
        } else if (radioIndex === 2) {
          href = `https://www.uzumbank.uz/open-service?serviceId=498617211&ilova=Qiblah&tarif=${prices[0].name.slice(8)}&id=%user_id%&amount=${prices[0].price.slice(0, -3) * 100}`;
        }
      } else if (index === 1) {
        if (radioIndex === 0) {
          href = `https://checkout.paycom.uz/${btoa(
            `m=6697d19280d270b331826481;ac.user_id=%user_id%;ac.tarif=${prices[1].name.slice(8)};ac.ilova=Qiblah;a=${prices[1].price.slice(0, -3) * 100}`
          )}`;
        } else if (radioIndex === 1) {
          href = `https://my.click.uz/services/pay?merchant_id=26420&service_id=34442&transaction_param=Qiblah&additional_param3=%user_id%&amount=${prices[1].price.slice(0, -3)}&additional_param4=${prices[1].name.slice(8)}`;
        } else if (radioIndex === 2) {
          href = `https://www.uzumbank.uz/open-service?serviceId=498617211&ilova=Qiblah&tarif=${prices[1].name.slice(8)}&id=%user_id%&amount=${prices[1].price.slice(0, -3) * 100}`;
        }
      } else if (index === 2) {
        if (radioIndex === 0) {
          href = `https://checkout.paycom.uz/${btoa(
            `m=6697d19280d270b331826481;ac.user_id=%user_id%;ac.tarif=${prices[2].name.slice(8)};ac.ilova=Qiblah;a=${prices[2].price.slice(0, -3) * 100}`
          )}`;
        } else if (radioIndex === 1) {
          href = `https://my.click.uz/services/pay?merchant_id=26420&service_id=34442&transaction_param=Qiblah&additional_param3=%user_id%&amount=${prices[2].price.slice(0, -3)}&additional_param4=${prices[2].name.slice(8)}`;
        } else if (radioIndex === 2) {
          href = `https://www.uzumbank.uz/open-service?serviceId=498617211&ilova=Qiblah&tarif=${prices[2].name.slice(8)}&id=%user_id%&amount=${prices[2].price.slice(0, -3) * 100}`;
        }
      }
      onChange(index, href);
    };
  
    return (
      <div className="bg-white rounded-lg mb-2">
        <div className="flex justify-between items-center p-2 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="checkbox"
                id={`morning${index + 1}`}
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="absolute invisible"
              />
              <label
                htmlFor={`morning${index + 1}`}
                className="flex items-center cursor-pointer p-2 rounded-md hover:bg-orange-50 transition-all"
              >
                <span
                  className={`w-5 h-5 rounded border-2 ${
                    isChecked ? "bg-[#fe8c67] border-[#fe8c67]" : "border-gray-300"
                  } flex items-center justify-center transition-all`}
                >
                  {isChecked && (
                    <svg width="12" height="10" className="fill-none stroke-white stroke-2">
                      <polyline points="1.5 6 4.5 9 10.5 1" />
                    </svg>
                  )}
                </span>
              </label>
            </div>
            <div>
              <p
                className={`text-sm capitalize ${
                  isChecked ? "text-black font-bold" : "text-gray-400"
                }`}
              >
                {price.name.slice(8) || "N/A"}
              </p>
              <p className="text-sm text-gray-400">
                {price.price || "0"} UZS <span></span>
              </p>
            </div>
          </div>
        </div>
        <section
          className={`flex flex-wrap justify-center gap-2 p-4 ${isChecked ? "block" : "hidden"}`}
        >
          {["Payme", "Click", "Uzum"].map((method, radioIndex) => (
            <div
              key={radioIndex}
              className="w-[30%] flex items-center bg-[#fdf8e9] p-2 rounded-lg"
            >
              <input
                type="radio"
                id={`radio-${index + 1}-${radioIndex}`}
                name={`radio-group${index}`}
                defaultChecked={radioIndex === 0}
                onChange={() => handleRadioChange(radioIndex)}
                className="absolute opacity-0"
              />
              <label
                htmlFor={`radio-${index + 1}-${radioIndex}`}
                className="flex items-center justify-center cursor-pointer"
              >
                <span
                  className="w-5 h-5 rounded-full border border-gray-300 mr-2 flex items-center justify-center"
                  style={{
                    backgroundColor: document.querySelector(
                      `input[name="radio-group${index}"]:checked`
                    )?.id === `radio-${index + 1}-${radioIndex}` ? "#fe8c67" : "#fff",
                    boxShadow:
                      document.querySelector(
                        `input[name="radio-group${index}"]:checked`
                      )?.id === `radio-${index + 1}-${radioIndex}`
                        ? "inset 0 0 0 4px #fff"
                        : "none",
                  }}
                ></span>
                <img
                  src={`https://srvr.qiblah.app/public/images/17339152${
                    radioIndex === 0 ? "25359-payme" : radioIndex === 1 ? "48876-click" : "58301-Uzum"
                  }.png`}
                  alt={method}
                  className="w-[60px] h-[40px] object-cover"
                />
              </label>
            </div>
          ))}
        </section>
      </div>
    );
  };
  
  export default PriceCheckbox;