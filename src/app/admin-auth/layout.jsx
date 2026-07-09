import { Poppins } from "next/font/google";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import InstallAppButton from "../components/InstallAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Authentication - Ishop",
  description: "Login and Register",
  manifest: "/manifest.webmanifest",
  themeColor: "#01a49e",
  appleWebApp: {
    capable: true,
    title: "IShop",
    statusBarStyle: "default",
  },
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} ${poppins.variable}`}>
      <body className="antialiased bg-gray-100">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
          <div className="min-h-screen flex items-center justify-center">
            {children}
          </div>
          <InstallAppButton />
       
      </body>
    </html>
  );
}
