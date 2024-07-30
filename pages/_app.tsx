// pages/_app.tsx
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/system";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
