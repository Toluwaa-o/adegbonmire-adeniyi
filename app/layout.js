import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "SAN Adegbonmire Adeniyi",
  description: "Website for Senator Adegbonmire Adeniyi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-darkest-blue ${raleway.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
