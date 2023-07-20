import Head from "next/head";
import { motion } from "framer-motion";
import { Box, Heading, Text, Badge } from "@chakra-ui/react";
import { projects } from "@/data/projects";
import { SubLayout } from "@/layouts/layouts";

const ProjectsPage = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <SubLayout>
          <Box as="main" bgColor="#48bf84" color="white">
            <Heading as="h1">Projects</Heading>
            {projects.map((project) => (
              <>
                <Heading
                  as="h2"
                  key={project.name}
                  fontFamily="Gilroy Heavy"
                  textTransform="lowercase"
                  fontSize="6xl"
                  lineHeight="5xl"
                  letterSpacing="-1px"
                  my={6}
                  py={12}
                  borderBottom="1px solid #ffffff80"
                >
                  {project.name}
                </Heading>
              </>
            ))}
          </Box>
        </SubLayout>
      </motion.div>
    </>
  );
};

export default ProjectsPage;
