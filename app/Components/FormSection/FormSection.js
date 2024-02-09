"use client";

import Form from "../Form/Form";

const FormSection = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="bg-accent-white px-4 py-[4rem] flex flex-col gap-4"
      onSubmit={submitHandler}
    >
      <h2 className="text-2xl text-center font-bold text-gray-800 md:text-darkest-blue">
        Get in touch
      </h2>
      <p className="text-center md:m-auto md:w-[60%]  md:text-darkest-blue">
        Trying to get in touch? Simply fill out the form below and one of our
        team members will get in touch with you as soon as possible.
      </p>
      <Form />
    </form>
  );
};
export default FormSection;
