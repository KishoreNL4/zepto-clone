import Image from "next/image";
import localFont from "next/font/local";
import Header from "../components/Header";
import AutoSlider from "../components/slider";
import Category from "./homescreen/category";
import Homeproduct from "./homescreen/homeproduct";
import Featuredbrand from "./homescreen/featuredbrand";
import Productcat1 from "./homescreen/productcat1";
import Productcat2 from "./homescreen/productcat2";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <Header />
      <AutoSlider />
      <Category />
      <Homeproduct />
      <Featuredbrand />
      <Productcat1 />
      <Productcat2 />
      <Footer />
    </div>
  );
}
