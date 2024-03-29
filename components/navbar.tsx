import { Box } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box as="nav" color="white">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
    </Box>
  );
};

export default Navbar;
