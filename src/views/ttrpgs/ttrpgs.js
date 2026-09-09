import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import the_gathering_formatted_page from "../../assets/projects/the_gathering_formatted_page.png";

export default function TTRPGs() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={the_gathering_formatted_page}
            projectName={"The Gathering (WIP)"}
            aboutProject={"Encounter Design, Worldbuilding"}
            techStack={"D&D 5e"}
            // projectLiveLink="https://primeng.org/" // TODO: itch io link once finalized
            projectLink="https://drive.google.com/file/d/1nGk5XmDcTAM9rgrh3EiZUGuER3yEtATF"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
