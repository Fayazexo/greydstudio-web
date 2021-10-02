import About from "../pages/About"
import akramalikhanint from "../pages/akramalikhan-int"
import akramext from "../pages/akramext"
import bizliPlaza from "../pages/bizli-plaza"
import Contact from "../pages/Contact"
import detailNews from "../pages/detailNews"
import greenedge from "../pages/greenedge"
import Home from "../pages/Home"
import kalamint from "../pages/kalam-int"
import LandWanted from "../pages/LandWanted"
import mahadinfarahint from "../pages/mahadi&farah-int"
import marufint from "../pages/maruf-int"
import News from "../pages/News"
import Projects from "../pages/Projects"
import skyedge from "../pages/skyedge"
import Teams from "../pages/Teams"
import tusharResidence from "../pages/tushar-residence"

export const projectList = [
  {
    id: "1",
    category: "Exterior",
    projectName: "A Khan Exterior",
    coverUrl: "./img/projects/Project-Banner-Akramext.jpg",
    projectUrl: "/akramalikhan-exterior",
  },
  {
    id: "2",
    category: "Exterior",
    projectName: "Sky Edge",
    coverUrl: "./img/projects/Project-Banner-Sky.jpg",
    projectUrl: "/skyedge",
  },
  {
    id: "3",
    category: "Exterior",
    projectName: "Green Edge",
    coverUrl: "./img/projects/Project-Banner-Green.jpg",
    projectUrl: "/greenedge",
  },
  {
    id: "4",
    category: "Interior",
    projectName: "Akram Ali Khan",
    coverUrl: "./img/projects/Project-Banner-Akram-Ali-Khan-1st-Floor.jpg",
    projectUrl: "/akramalikhan-interior",
  },
  {
    id: "5",
    category: "Exterior",
    projectName: "Tushar Residence",
    coverUrl: "./img/projects/Project-Banner-Tushar-Residence.jpg",
    projectUrl: "/tushar-residence",
  },
  {
    id: "6",
    category: "Exterior",
    projectName: "Kalam",
    coverUrl: "./img/projects/Project-Banner-Kalam-Interior.jpg",
    projectUrl: "/kalam-interior",
  },
  {
    id: "7",
    category: "Interior",
    projectName: "Maruf",
    coverUrl: "./img/projects/Project-Banner-Maruf-Interior.jpg",
    projectUrl: "/maruf-interior",
  },
  {
    id: "8",
    category: "Exterior",
    projectName: "Bizli Plaza",
    coverUrl: "./img/projects/Project-Banner-BIZLI-PLAZA.jpg",
    projectUrl: "/bizli-plaza",
  },
  {
    id: "9",
    category: "Interior",
    projectName: "Mahadi & Farah",
    coverUrl: "./img/projects/Project-Banner-Mahadi-&-Farah-Interior.jpg",
    projectUrl: "/mahadi&farah-interior",
  },
]

export const declaredRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/About",
    component: About,
  },
  {
    path: "/Projects",
    component: Projects,
  },
  {
    path: "/News",
    component: News,
  },
  {
    path: "/Teams",
    component: Teams,
  },
  {
    path: "/LandWanted",
    component: LandWanted,
  },
  {
    path: "/Contact",
    component: Contact,
  },
  {
    path: "/kalam-interior",
    component: kalamint,
  },
  {
    path: "/tushar-residence",
    component: tusharResidence,
  },
  {
    path: "/akramalikhan-interior",
    component: akramalikhanint,
  },
  {
    path: "/maruf-interior",
    component: marufint,
  },
  {
    path: "/bizli-plaza",
    component: bizliPlaza,
  },
  {
    path: "/skyedge",
    component: skyedge,
  },
  {
    path: "/greenedge",
    component: greenedge,
  },
  {
    path: "/akramalikhan-exterior",
    component: akramext,
  },
  {
    path: "/mahadi&farah-interior",
    component: mahadinfarahint,
  },
  {
    path: "/detailnews",
    component: detailNews,
  },
]
