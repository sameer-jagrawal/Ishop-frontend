import "../../globals.css";
import Sidebar from "@/app/components/admin components/Sidebar";
import Header from "@/app/components/admin components/Header";
import InstallAppButton from "@/app/components/InstallAppButton";
// import './globals.css';
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "IShop Admin",
  description: "Manage IShop products, orders, customers, and store data.",
  manifest: "/manifest.webmanifest",
  themeColor: "#01a49e",
  appleWebApp: {
    capable: true,
    title: "IShop",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} ${poppins.variable}`}>
      <body className="w-full h-full flex">
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
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <div className="flex-1 min-w-0 h-full overflow-x-hidden">
          {/* Header */}
          <div className="pl-12 md:pl-0">
            <Header />
          </div>
          {/* Pages */}
          <div className="p-3 md:p-4 rounded-xl bg-white">
            {children}
          </div>
        </div>
        <InstallAppButton />
      </body>
    </html>
  );
}
