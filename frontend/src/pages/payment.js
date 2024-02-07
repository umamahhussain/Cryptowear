import React, { useContext } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
import { TransactionContext } from '../context/transactioncontext'


const Payment = () => {

  const { ConnectWallet, currentAccount, handleChange, formData, sendTransaction } = useContext(TransactionContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) {
      return;
    } else {
      console.log(formData);
      sendTransaction(formData); // Pass formData here
    }
  }



  return (
    <div className="Payment">
      <div className="login-container" style={{ position: "relative", border: "5px solid transparent", borderRadius: "15px", overflow: "hidden", boxShadow: "0 0 20px rgba(255, 255, 255, 1)" }}>

        <img src="https://wallpapercave.com/wp/wp9793545.jpg"
          style={{ height: "100vh", width: "100%", objectFit: "cover", zIndex: "1" }} />

        <div className="overlay">
          <h1 style={{ textShadow: "2px 2px 5px rgba(255, 255, 255, 1)", fontFamily: "Audiowide", color: "white", fontSize: '15px' }}>
            <u>
              Payment
            </u>
          </h1>
          <div className="black" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "2" }}>
            <div className="card-content white-text">


              {!currentAccount && <button
                type="button"
                onClick={ConnectWallet}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-white text-base font-semibold">
                  Connect Wallet
                </p>
              </button>}


              <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                <input
                  style={{ color: 'white' }}
                  placeholder="Address To"
                  name="addressTo"
                  type="text"
                  value={formData.addressTo}
                  onChange={(e) => handleChange(e, "addressTo")}
                />

                <input
                  style={{ color: 'white' }}
                  placeholder="Amount (ETH)"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={(e) => handleChange(e, "amount")}
                />

                <input
                  style={{ color: 'white' }}
                  placeholder="Keyword (Gif)"
                  name="keyword"
                  type="text"
                  value={formData.keyword}
                  onChange={(e) => handleChange(e, "keyword")}
                />

                <input
                  style={{ color: 'white' }}
                  placeholder="Enter Message"
                  name="message"
                  type="text"
                  value={formData.message}
                  onChange={(e) => handleChange(e, "message")}
                />


                <div className="h-[1px] w-full bg-gray-400 my-2" />


                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>

              </div>


              <h5 style={{ textShadow: "2px 2px 5px rgba(255, 255, 255, 1)", fontFamily: "Audiowide", textAlign: 'center' }}>
                –Where Chic Meets Sophistication.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
};

export default Payment;
