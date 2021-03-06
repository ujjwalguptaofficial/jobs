import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import plPL from "antd/lib/locale/pl_PL";
import moment from "moment";
import "moment/locale/pl";
import { AppProps } from "next/app";
import React from "react";
import ReduxProvider from "../lib/redux/provider";
import "../styles/tailwind.css";
import "../styles/main.css";

moment.locale("pl");

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider>
      <ConfigProvider locale={plPL}>
        <Component {...pageProps} />;
      </ConfigProvider>
    </ReduxProvider>
  );
};

export default App;
