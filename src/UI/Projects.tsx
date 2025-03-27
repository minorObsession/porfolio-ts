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
    features: new Map([
      [
        "Authentication and Profiles",
        "Only authorized hotel employees can access the system and customize their profiles",
      ],
      [
        "Dashboard Overview + Visual Reports",
        "Displays key statistics such as bookings, check-ins, revenue and  occupancy using charts",
      ],
      ["Cabin Management", "Easily create, edit, and delete cabin records"],
      [
        "Booking System",
        "Handle guest check-ins, check-outs, and booking status updates",
      ],
    ]),
  },

  // ! ooovaj
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
    features: new Map([
      [
        "Admin - custmizable menu",
        "Adding or editing products detail and images, viewing existing orders",
      ],
      [
        "Customer account",
        "Intuitive food ordering and accessing frequently asked questions",
      ],
      [
        "Responsive design",
        "Styled components library media queries + CSS best practices to look and feel smooth on mobile, tablet and desktop screens",
      ],
    ]),
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
    features: new Map([
      [
        "Meal Planning",
        "planning meals for next 7 days based on saved/bookmarked recipes",
      ],
      [
        "Recipe Viewing",
        "Paginated results panel + Recipe photo and a table of ingredients adjustable per # of servings",
      ],
      [
        "Responsive app design",
        "Tailwind media queries to work for mobile, tablet and desktop screens",
      ],
    ]),
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
    features: new Map([
      [
        "LA Residents appointment booking",
        "Solar evaluation appointment booking through an easy-to-use interface",
      ],
      [
        "City Employees appointment management",
        "Appointment management interface to easily review and manage visits effectively",
      ],
      [
        "Data Management",
        "Appointments and user data are stored securely in IndexedDB and localStorage",
      ],
      [
        "Responsive Vibrant Design",
        "Vibrant color palette to capture the energetic yet laid back spirit of Los Angeles",
      ],
    ]),
  },
];

const StyledProjectsPage = styled.section<ScreenWidthType>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.$screenWidth >= breakpoints.tabletBreakpoint &&
    css`
      display: grid;

      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr 1fr;

      column-gap: 4rem;
      row-gap: 7rem;
    `};
`;

function Projects({ id }: { id: string }) {
  const screenWidth = useScreenWidthRem();

  return (
    <StyledProjectsPage $screenWidth={screenWidth} id={id}>
      <Heading
        as="h1"
        style={{
          gridColumn: "1 / -1",
        }}
      >
        Portfolio Projects
      </Heading>
      {projects.map((project, i) => (
        <ProjectCard project={{ ...project, index: i }} key={project.title} />
      ))}
    </StyledProjectsPage>
  );
}

export default Projects;
