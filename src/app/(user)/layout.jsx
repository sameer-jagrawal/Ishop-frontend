import "../globals.css";
import Header from "../components/user components/Home/Header";
import Footer from "../components/user components/Footer";
import InstallAppButton from "../components/InstallAppButton";
import ReduxProvider from "@/redux/ReduxProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Must specify weights for non-variable fonts
  display: "swap",
  variable: "--font-poppins", // Optional: Creates a CSS variable
});

export const metadata = {
  title: "Ishop",
  description: "Shop products, manage cart, and place orders from IShop.",
  manifest: "/manifest.webmanifest",
  themeColor: "#01a49e",
  appleWebApp: {
    capable: true,
    title: "IShop",
    statusBarStyle: "default",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} ${poppins.variable}`}>
      <body className="antialiased bg-gray-100">
        <ReduxProvider>
        <Header />
        {children}
        <Footer/>
        <InstallAppButton />
        </ReduxProvider>
      </body>
    </html>
  )
}
