import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import bizworks_gameplay from "../../assets/projects/bizworks_game_screen.png";

export default function VideoGames() {
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
            projectImage={bizworks_gameplay}
            projectName={"BizWorks - Financial Literacy Game"}
            aboutProject={"Lead Programmer"}
            techStack={"C#, Unity"}
            // projectLiveLink="https://primeng.org/"
            projectLink="https://github.com/ToyaDR/FinLit"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
