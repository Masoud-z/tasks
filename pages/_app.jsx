import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { logStatus, Dark, Msg } from "@/components/helper/Contexts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const [msg, setMsg] = useState({ open: false, message: "", type: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <logStatus.Provider value={{ loggedIn, setLoggedIn }}>
      <Msg.Provider value={{ msg, setMsg }}>
        <Dark.Provider value={{ darkMode, setDarkMode }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Dark.Provider>
      </Msg.Provider>
    </logStatus.Provider>
  );
}
