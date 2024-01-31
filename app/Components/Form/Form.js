const Form = () => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        aria-label="firstName"
        className="border-darkest-blue border-2 p-4 outline-none rounded placeholder:text-darkest-blue tracking-wide text-darkest-blue font-bold"
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        aria-label="lastName"
        className="border-darkest-blue border-2 p-4 outline-none rounded placeholder:text-darkest-blue tracking-wide text-darkest-blue font-bold"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        aria-label="email"
        className="border-darkest-blue border-2 p-4 outline-none rounded placeholder:text-darkest-blue tracking-wide text-darkest-blue font-bold"
      />
      <input
        type="tel"
        placeholder="Phone"
        name="phone"
        aria-label="phone"
        className="border-darkest-blue border-2 p-4 outline-none rounded placeholder:text-darkest-blue tracking-wide text-darkest-blue font-bold"
      />
      <textarea
        name="comment"
        placeholder="Comments"
        aria-label="comment"
        className="border-darkest-blue border-2 p-4 outline-none rounded placeholder:text-darkest-blue tracking-wide text-darkest-blue font-bold h-[22vh]"
      />
      <button className="bg-darkest-blue text-accent-white p-4 font-bold tracking-widest rounded" type="submit">Submit</button>
    </div>
  );
};
export default Form;
