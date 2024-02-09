"use client";
import { useState } from "react";

const Form = () => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });

  return (
    <div className="flex flex-col gap-4 md:items-center">
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        aria-label="firstName"
        onChange={changeHandler}
        value={data.firstName}
        className="border-darkest-blue border-2 p-4 outline-none rounded placeholder:text-darkest-blue tracking-wide text-darkest-blue font-bold md:w-[60%]"
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        aria-label="lastName"
        onChange={changeHandler}
        value={data.lastName}
        className="border-darkest-blue border-2 p-4 outline-none rounded placeholder:text-darkest-blue tracking-wide text-darkest-blue font-bold md:w-[60%]"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        aria-label="email"
        onChange={changeHandler}
        value={data.email}
        className="border-darkest-blue border-2 p-4 outline-none rounded placeholder:text-darkest-blue tracking-wide text-darkest-blue font-bold md:w-[60%]"
      />
      <input
        type="tel"
        placeholder="Phone"
        name="phone"
        aria-label="phone"
        onChange={changeHandler}
        value={data.phone}
        className="border-darkest-blue border-2 p-4 outline-none rounded placeholder:text-darkest-blue tracking-wide text-darkest-blue font-bold md:w-[60%]"
      />
      <textarea
        name="comment"
        placeholder="Comments"
        aria-label="comment"
        onChange={changeHandler}
        value={data.comment}
        className="border-darkest-blue border-2 p-4 outline-none rounded placeholder:text-darkest-blue tracking-wide text-darkest-blue font-bold h-[22vh] md:w-[60%]"
      />
      <button
        className="bg-darkest-blue text-accent-white p-4 font-bold tracking-widest rounded"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};
export default Form;
