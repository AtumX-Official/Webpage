"use client";

import { useState } from "react";
import axios from "axios";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"NONE" | "SUCCESS" | "FAILED">("NONE");

  return (
    <form
      className="z-50 font-monst w-full flex justify-center"
      onSubmit={async (e) => {
        e.preventDefault();
        axios
          .post("/subscribe/api", {
            firstName: "",
            lastName: "",
            email,
          })
          .then(function (response) {
            console.log(response.data);
            setStatus("SUCCESS");
          })
          .catch(function (error) {
            console.log(error);
            setStatus("FAILED");
          });
        setEmail("signing you up for our newletter");
      }}
    >
      {status === "NONE" && (
        <input
          className="bg-transparent w-3/4 min-w-[300px] self-center border-2 border-white focus:outline-none  focus:shadow-orange-600 focus:shadow-md rounded-full px-6 py-2 text-white placeholder-white"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="contact us: info@atumx.in"
        />
      )}
      {status === "SUCCESS" && (
        <h1 className="text-5xl text-orange-600 font-mono">
          THANK YOU, PLEASE CHECK YOUR EMAIL ID
        </h1>
      )}
    </form>
  );
};

export default Form;
