import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { MainLayout } from "@/layouts/main";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ChakraProvider>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    // </ChakraProvider>
  );
}
