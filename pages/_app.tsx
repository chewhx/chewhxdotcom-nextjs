import type { AppProps } from "next/app";
import AppContainer from "../layout/AppContainer";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default MyApp;
