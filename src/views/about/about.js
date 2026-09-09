import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  useColorModeValue,
  Skeleton,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import myphoto from "../../assets/about_me_placeholder.jpg";

export default function About() {
  const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr",
            }}
            templateRows={{
              lg: "1fr",
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
              />
              <Skeleton
                height="100%"
                isLoaded={loadedProfileimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={myphoto}
                  width="100%"
                  height="100%"
                  alt="Image Alt"
                  effect="blur"
                  style={{ height: "100%" }}
                  onLoad={() => setloadedProfileimg(true)}
                />
              </Skeleton>
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent" width={"50vw"}>
                <SimpleGrid columns="1" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    values="Seattle, WA, U.S.A."
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Carnegie Mellon University"
                    values={[
                      "B.S. Computer Science",
                      "minor in Game Design" 
                    ]}
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
}
