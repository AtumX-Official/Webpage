"use client";

import { useState } from "react";
import axios from "axios";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"NONE" | "SUCCESS" | "FAILED">("NONE");

  return (
    <form
      className="z-30"
      onSubmit={async (e) => {
        e.preventDefault();
        axios
          .post("/subscribe/api", {
            firstName: "Fred",
            lastName: "Flintstone",
            email,
          })
          .then(function (response) {
            console.log(response.data.status);
            setStatus(response.data.status);
          })
          .catch(function (error) {
            console.log(error);
          });
        setEmail("");
      }}
    >
      <input
        className="mx-10 bg-transparent w-full self-center border-2 border-white focus:outline-none  focus:shadow-orange-600 focus:shadow-md rounded-full px-6 py-2 text-white placeholder-white"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="info@atumx.in"
      />
    </form>
  );
};

export default Form;
