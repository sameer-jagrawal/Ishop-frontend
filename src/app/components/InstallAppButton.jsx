"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

function isStandaloneMode() {
  return (
    window.matchMedia?.("(display-mode: standalone)")?.matches ||
    window.navigator.standalone === true
  );
}

export default function InstallAppButton() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [showIosHelp, setShowIosHelp] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || isStandaloneMode()) return;

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch((error) => {
        console.log("Service worker registration failed:", error);
      });
    }

    const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);

    if (isIos && isSafari) {
      window.setTimeout(() => setShowButton(true), 0);
    }

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      setShowButton(true);
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setShowButton(false);
      setShowIosHelp(false);
      localStorage.setItem("ishop-app-installed", "true");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const installApp = async () => {
    if (!installPrompt) {
      setShowIosHelp(true);
      return;
    }

    installPrompt.prompt();
    const choice = await installPrompt.userChoice;

    if (choice.outcome === "accepted") {
      setShowButton(false);
    }

    setInstallPrompt(null);
  };

  if (!showButton) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[9999] flex max-w-[calc(100vw-2rem)] flex-col items-start gap-2">
      {showIosHelp && (
        <div className="w-64 rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-700 shadow-lg">
          <button
            type="button"
            onClick={() => setShowIosHelp(false)}
            className="absolute right-2 top-2 rounded-full p-1 text-gray-500 hover:bg-gray-100"
            aria-label="Close install help"
          >
            <X size={14} />
          </button>
          Tap Share, then choose Add to Home Screen.
        </div>
      )}

      <button
        type="button"
        onClick={installApp}
        className="flex h-12 items-center gap-2 rounded-full bg-[#01a49e] px-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#018983] focus:outline-none focus:ring-2 focus:ring-[#01a49e] focus:ring-offset-2"
        aria-label="Install IShop app"
      >
        <Download size={18} />
        Install App
      </button>
    </div>
  );
}
