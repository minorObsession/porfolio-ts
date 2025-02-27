import styled, { css } from "styled-components";
import ProjectCard from "./ProjectCard";
import { useScreenWidthRem } from "../hooks/useScreenWidthRem";
import { ScreenWidthType } from "../types/types";
import { breakpoints } from "../styles/breakpoints";
import { Heading } from "../styles/GlobalStyles";

const projects = [
  {
    title: "Wild Oasis",
    description: "SPA for managing hotel rooms (cabins), bookings and stays",
    previewImages: [
      "/wild-oasis-preview/wildOasis1.png",
      "/wild-oasis-preview/wildOasis2.png",
      "/wild-oasis-preview/wildOasisLight.png",
    ],
    gitHub: "https://github.com/minorObsession/the-wild-oasis",
    deploy: "https://the-wild-oasis-rho-bay.vercel.app/",
    techStack: [
      "React",
      "HTML",
      "Styled Components",
      "Supabase",
      "React Query",
      "Redux",
    ],
  },
  {
    title: "Food Fusion",
    description:
      "Food ordering app for both Customers and Restaurant employees",
    previewImages: [
      "/food-fusion-preview/FoodFusion1.png",
      "/food-fusion-preview/FoodFusion2.png",
      "/food-fusion-preview/FoodFusion3.png",
    ],
    gitHub: "https://github.com/minorObsession/food-fusion",
    deploy: "https://foodfusionapp.netlify.app/",
    techStack: [
      "React",
      "HTML",
      "Styled Components",
      "React Query",
      "Supabase",
      "Redux",
    ],
  },
  {
    title: "Recipe Radar",
    description: "Recipe searching, bookmarking and meal-planning app",
    previewImages: [
      "/recipe-radar-preview/RecipeRadar1.png",
      "/recipe-radar-preview/RecipeRadar2.png",
      "/recipe-radar-preview/RecipeRadar3.png",
    ],
    gitHub: "https://github.com/minorObsession/recipe-radar",
    deploy: "https://reciperadarapp.netlify.app/",
    techStack: ["React", "HTML", "Tailwind CSS", "React Query", "Redux"],
  },
  {
    title: "Solar Vibes",
    description: "Solar appointments app for residents and city employees",
    previewImages: [
      "/solar-vibez-preview/SolarVibes1.png",
      "/solar-vibez-preview/SolarVibes2.png",
      "/solar-vibez-preview/SolarVibes3.png",
    ],
    gitHub: "https://github.com/chingu-voyages/v52-tier1-team-05/",
    deploy: "https://solar-vibes-la.netlify.app/",
    techStack: ["JavaScript", "HTML", "CSS"],
  },
];

const StyledProjectsPage = styled.section<ScreenWidthType>`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  ${(props) =>
    props.$screenWidth >= breakpoints.betweenMobAndTabBreakpoint &&
    css`
      display: grid;
      gap: 3rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      /* gap: 4rem; */
      /* padding: 4rem; */
    `};
`;

function Projects() {
  const screenWidth = useScreenWidthRem();

  return (
    <div style={{ marginTop: "6rem" }}>
      <Heading as="h1">React projects</Heading>
      <StyledProjectsPage $screenWidth={screenWidth}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </StyledProjectsPage>
    </div>
  );
}

export default Projects;
