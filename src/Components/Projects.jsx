import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects({ projectsRef }) {
  const projects = [
    {
      name: "Work Zone Data HeatMap",
      img: "../assets/images/portrait",
      description: "This is the project",
      techStack: ["React", "HTML", "JS", "CSS"],
      libraries: ["framer-motion", "d3", "react-leaflet", "Geojson.io"],
    },
    {
      name: "Todo List",
      img: "../assets/images/portrait",
      description: "This is the project",
    },
    {
      name: "Better Budget",
      img: "../assets/images/portrait",
      description:
        "Better Budget is a web application my team developed during my time in Google's Software Product Sprint. I developed the Rent vs Buy calculator which is meant to better inform house buyers whether they should buy or rent a home depending on the time they plan to stay at the property. One of the most interesting features of Better Budget is that it is capable of translating all the text on the page into one of five different languages using Google's translate api. This makes access easier for non-english speakers so that they too can make use of Better Budget.",
    },
    {
      name: "Hand Gesture Connect Four",
      img: "../assets/images/portrait",
      description:
        "Connect Four is a web application based game that is completely controlled with hand gestures. I used the Handtrack.js library to detect unique hand gestures that corresponded with a particular column. The game is started with two open hands and the red player always starts the game. After the red player places its tile with two closed hands, the top tile is automatically switched to yellow indicating that it is the yellow players turn. The game keeps going until there is a winner, which stops the game. The body of the html page changes its color to the winning player's color.",
    },
    {
      name: "Spotify API Website",
      img: "../assets/images/portrait",
      description:
        "Spotify API Website is a web application that displays Spotify's API service to populate Artist, Album, and Track data. The user can make a search for a particular Artist, Album, or Track and the website will display all relevant information. For example, the image on the left shows the Artist page that displays Drakes data such as genres and top tracks.",
    },
  ];

  return (
    <div className={styles.Projects}>
      <h1 ref={projectsRef} className={styles["white-text"]}>
        Projects
      </h1>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Show 1 project at a time
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className={styles.ProjectCarousel}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              name={project.name}
              img={project.img}
              description={project.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
