import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import requestDTO from "../../models/DTO/request";
import User from "../../models/user/user";

const Qrcode = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    isTerms: "N",
  });
  const [initTime, setInitTime] = useState<[number, string]>([
    new Date().getTime(),
    new Date(new Date().getTime() + 32400000).toISOString(),
  ]);

  const handleUserData = (e: { target: { name: string; value: string } }) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  const handleCheckData = (e: { target: { name: string; checked: boolean } }) =>
    setUser({ ...user, [e.target.name]: e.target.checked ? "Y" : "N" });

  const requestSubmit = () => {
    if (!user.name || !user.email) {
      return;
    }
    const submitTime = new Date().getTime();
    if (submitTime - initTime[0] >= 300_000) {
      alert("QR code session has expired.");
      navigator("/");
    }
    const requestData: requestDTO = {
      ...user,
      elevatorId: localStorage.getItem("elevatorId"),
      advertisementId:
        location.state ?? localStorage.getItem("advertisementId"),
      scanTime: initTime[1],
    };
    console.log("Sending request data to the server >>>", requestData);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      your name:
      <input
        type="text"
        name="name"
        placeholder="ex) 홍길동"
        onChange={handleUserData}
        required
      />
      email:
      <input
        type="email"
        name="email"
        placeholder="ex) example@gmail.com"
        onChange={handleUserData}
        required
      />
      <div>
        <input type="checkbox" name="isTerms" onChange={handleCheckData} />
        Terms and Conditions (Optional)
      </div>
      <div>
        <button onClick={() => requestSubmit()}>전송</button>
        <button onClick={() => navigator("/")}>취소</button>
      </div>
    </form>
  );
};

export default Qrcode;
