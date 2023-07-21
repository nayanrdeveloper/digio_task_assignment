import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };
  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center space-y-3">
        {/* Google + Login */}
        <div className="flex flex-col justify-center items-center space-y-3">
          <div className="text-center">
            <p>sanket@digio.in use Gmail</p>
            <p>login using google</p>
          </div>
          <button className="text-white px-8 py-2 bg-[#db541f] rounded-md">
            Google +
          </button>
        </div>
        <p className="text-center font-semibold text-xl">OR</p>
        {/* With email Login */}
        <form>
          <div className="space-y-3">
            <div className="flex flex-col">
              <label htmlFor="email">Proceed with your email Address</label>
              <input
                type={"email"}
                value={email}
                onChange={handleChange}
                id="email"
                className="border border-gray-400 rounded-md w-80 h-8 px-2 focus:outline-none"
              />
            </div>

            <span
              className={`text-sm text-red-600 ${
                !isValidEmail && email ? "visible" : "invisible"
              }`}
            >
              Invalid email
            </span>

            <div className="flex flex-col">
              <span>By Counting I confirm to the Terms and Service</span>
              <span className="text-center">
                and privacy Policy of{" "}
                <span className="text-[#2554a0]">Digio.in</span>
              </span>
            </div>
            <button
              type="submit"
              onClick={() => navigate("/document")}
              className={`bg-[#2554a0] px-14 py-2 rounded-md text-white w-full uppercase ${
                !isValidEmail || !email ? "bg-[#476ead]" : "bg-[#2554a0]"
              }`}
              disabled={!isValidEmail || !email}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
