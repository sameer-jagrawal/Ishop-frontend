import { Poppins } from "next/font/google";
import "../globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Authentication - Ishop",
  description: "Login and Register",
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
       
      </body>
    </html>
  );
}
