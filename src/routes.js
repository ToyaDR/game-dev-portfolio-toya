import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdDashboard,
  MdBarChart,
  MdPersonPin,
  MdCode,
  MdContacts
} from "react-icons/md";
import { FaDiceD20 } from "react-icons/fa6";
import { GiRetroController } from "react-icons/gi";


import Dashboard from "./views/dashboard/dashboard";
import About from "./views/about/about";
import Resume from "./views/resume/resume";
import VideoGames from "./views/video-games/video-games";
import TTRPGs from "./views/ttrpgs/ttrpgs";
import Contact from "./views/contact/contact";

const routes = [
  {
    name: "Home",
    path: "/home",
    navbarDisplayName: "<Home/>",
    icon: <Icon as={MdDashboard} width="30px" height="30px" color="inherit" />,
    component: Dashboard
  },
  {
    name: "About Me",
    path: "/about",
    navbarDisplayName: "<About Me/>",
    icon: <Icon as={MdPersonPin} width="30px" height="30px" color="inherit" />,
    component: About
  },
  {
    name: "Video Games",
    path: "/video-games",
    navbarDisplayName: "<Video Games/>",
    icon: <Icon as={GiRetroController} width="30px" height="30px" color="inherit" />,
    component: VideoGames
  },
    {
    name: "TTRPGs",
    path: "/ttrpgs",
    navbarDisplayName: "<TTRPGs/>",
    icon: <Icon as={FaDiceD20} width="30px" height="30px" color="inherit" />,
    component: TTRPGs
  },
  {
    name: "Resume",
    path: "/resume",
    navbarDisplayName: "<Resume/>",
    icon: <Icon as={MdBarChart} width="30px" height="30px" color="inherit" />,
    component: Resume
  },
];

export default routes;
