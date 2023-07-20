import Head from "next/head";
import { Box, Heading, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IndexLayout } from "@/layouts/layouts";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <IndexLayout>
          <Box as="main" bgColor="#1e1e1e" color="white">
            <Center w="100%" h="100%">
              <Box>
                <Heading as="h1">Michal Špitálský</Heading>
                <Heading as="p">We can live in a world that we design</Heading>
              </Box>
            </Center>
          </Box>{" "}
        </IndexLayout>
      </motion.div>
    </>
  );
}
