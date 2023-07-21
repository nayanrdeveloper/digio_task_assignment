import { useState } from "react";
import Modal from "react-modal";

const DocumentScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [adharNumber, setAdharNumber] = useState();
  const [otpNumber, setOtpNumber] = useState();
  const [isAdharVerify, setIsAdharVerify] = useState(false);
  const [isAgreeCondition, setisAgreeCondition] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const verifyAdhar = () => {
    if (adharNumber && adharNumber.length === 11) {
      setIsAdharVerify(true);
    } else {
      setIsAdharVerify(false);
    }
  };

  const aggreehandle = (event) => {
    setisAgreeCondition(event.target.checked);
  };

  const onChangeAdharNumber = (e) => {
    console.log(e.currentTarget.value);
    verifyAdhar();
    setAdharNumber(e.currentTarget.value);
  };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitOTP = () => {
    if (otpNumber == "123456") {
      closeModal();
      setIsShowing(true);
      setTimeout(() => {
        setIsShowing(false);
      }, 3000);
    }
  };
  return (
    <div>
      {isShowing && (
        <div className="z-30 relative top-2 left-2">
          <p>Signing...</p>
          <p className="text-blue-600">Mutual Non-Disclosure Agreement</p>
          <div className="flex border bg-green-300 border-green-600 rounded-md px-10 py-2">
            <p className="text-green-600">Adhar Verified Successfully</p>
          </div>
        </div>
      )}
      <img src="/TextDocument.webp" alt="Document" className="w-full h-full" />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="w-[60rem]"
      >
        <div>
          <p className="py-2 border-b-2">Register Aadhaar</p>
          <div>
            <div className="py-3 flex items-center">
              <img
                src="/1200px-Aadhaar_Logo.svg.png"
                alt="Aadhaar_Logo"
                className="w-36 h-28"
              />
              <div className="space-y-2">
                <div className="flex space-x-3">
                  <input
                    className="h-10 w-96 border border-gray-600 rounded-md"
                    value={adharNumber}
                    onChange={onChangeAdharNumber}
                  />
                  <button
                    onClick={verifyAdhar}
                    disabled={!adharNumber}
                    className={`bg-gray-500 text-white px-10 py-2 ${
                      adharNumber ? "bg-gray-500" : "bg-gray-400"
                    }`}
                  >
                    Verify
                  </button>
                </div>
                <div>
                  <div className="space-x-3">
                    <input
                      id="agree"
                      type={"checkbox"}
                      checked={isAgreeCondition}
                      onChange={aggreehandle}
                    />
                    <label htmlFor="agree">
                      I Agree to eSign this KYC document to get started
                    </label>
                  </div>
                </div>
                <p className="invisible text-sm">Invilad adhar number</p>
                <div
                  className={`${
                    isAdharVerify && isAgreeCondition ? "visible" : "invisible"
                  }`}
                >
                  <div className="flex space-x-4 ml-44">
                    <input
                      type={"text"}
                      className="h-10 w-60 border border-gray-400 rounded-md"
                      value={otpNumber}
                      onChange={(e) => {
                        setOtpNumber(e.currentTarget.value);
                      }}
                      disabled={
                        !otpNumber &&
                        otpNumber &&
                        otpNumber.length != 6 &&
                        isAgreeCondition
                      }
                    />
                    <button
                      onClick={submitOTP}
                      className="bg-gray-500 text-white px-10 py-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DocumentScreen;
