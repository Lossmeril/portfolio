import Navbar from "@/components/navbar";
import { MainLayout } from "@/layouts/layouts";
import "@/styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout>
        <AnimatePresence>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}
