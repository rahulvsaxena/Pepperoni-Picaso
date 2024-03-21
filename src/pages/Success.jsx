import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import checkbox from "../assets/check.png";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {setLoading(false);}, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <BounceLoader color="#36d7b7" size={100}/>
      ) : (
        <div>
          <img src={checkbox} width="75px" height="75px" className="mx-auto mb-4"/>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful! 🥳
          </h2>
          <p>Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
