import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "@/styles/globals.scss";
import theme from "@/styles/theme";
import { MainLayout } from "@/layouts/main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
