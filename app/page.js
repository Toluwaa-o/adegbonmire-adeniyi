import Form from "./Components/Form/Form";
import Cards from "./Components/Press/Cards";
import SupportCards from "./Components/Support/Cards";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col">
        <span className="px-4 py-8 bg-accent-white text-center grid gap-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Presenting your Incumbent Leader
          </h2>
          <p className="text-gray-500">Continued Transformation Ahead</p>
        </span>
        <img src="/images/Mr2.png" alt="Mr Adegbonmire Adeniyi" />
      </div>

      <div className="flex flex-col bg-accent-white py-[3rem] px-4 gap-4">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          In the Press
        </h2>
        <p className="text-center text-md tracking-wide">
          Here you will find stories and the latest headlines about Adegbonmire
          Adeniyi and the issues at the heart of their campaign. Take a look at
          our featured pieces below and let us know if you would like more
          information. If you're a member of the press, contact us today.
        </p>

        <Cards />
      </div>

      <div className="flex flex-col py-[4rem] px-4 gap-4">
        <h2 className="text-center text-2xl font-bold text-accent-white">
          Join Us
        </h2>
        <p className="text-center text-md tracking-wide text-accent-white pb-[2rem]">
          Support our ongoing initiatives.
        </p>

        <SupportCards />
      </div>

      <form className="bg-accent-white px-4 py-[4rem] flex flex-col gap-4">
        <h2 className="text-2xl text-center font-bold text-gray-800">
          Get in touch
        </h2>
        <p className="text-center">
          Trying to get in touch? Simply fill out the form below and one of our
          team members will get in touch with you as soon as possible.
        </p>
        <Form />
      </form>
    </main>
  );
}
