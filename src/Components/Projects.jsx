import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard.jsx";
import cap from "../assets/images/capmap.png";
import todo from "../assets/images/todo.png";
import betterbudget from "../assets/images/betterbudget.png";
import spotifyapi from "../assets/images/spotify_api.png";
import connectfour from "../assets/images/connectfour.png";

function Projects({ projectsRef }) {
  const projects = [
    {
      name: "Work Zone Data HeatMap",
      img: cap,
      description:
        "The Community Ambassador Program, part of the Office of Civic Engagement and Immigrant Affairs, needed an interactive map to showcase all the work zones where ambassadors are active. Victor developed and implemented the map, including a heatmap feature to highlight areas with high levels of community interaction.",
      techStack: ["React", "HTML", "JS", "CSS"],
      libraries: ["framer-motion", "d3", "react-leaflet", "Geojson.io"],
      link: "https://sfcapdatamap.netlify.app/",
    },
    {
      name: "Todo List",
      img: todo,
      description:
        "Built a Todo List App using React that allows users to add and remove tasks dynamically. Integrated Airtable as a backend to persist data, enabling real-time fetch and update of todo items.",
      techStack: ["React", "HTML", "JS", "CSS"],
      libraries: ["Airtable API"],
    },
    {
      name: "Better Budget",
      img: betterbudget,
      description:
        "Better Budget is a web application my team developed during my time in Google's Software Product Sprint. I developed the Rent vs Buy calculator which is meant to better inform house buyers whether they should buy or rent a home depending on the time they plan to stay at the property. One of the most interesting features of Better Budget is that it is capable of translating all the text on the page into one of five different languages using Google's translate api. This makes access easier for non-english speakers so that they too can make use of Better Budget.",
      techStack: ["HTML", "JS", "CSS"],
      libraries: ["Google Translate API, Google Charts API"],
    },
    {
      name: "Hand Gesture Connect Four",
      img: connectfour,
      description:
        "Connect Four is a web application based game that is completely controlled with hand gestures. I used the Handtrack.js library to detect unique hand gestures that corresponded with a particular column. The game is started with two open hands and the red player always starts the game. After the red player places its tile with two closed hands, the top tile is automatically switched to yellow indicating that it is the yellow players turn. The game keeps going until there is a winner, which stops the game. The body of the html page changes its color to the winning player's color.",
      techStack: ["Angular", "HTML", "CSS", "TypeScript"],
      libraries: ["HandTrack.js"],
      link: "https://drive.google.com/file/d/1mWEX92w4AYvHFSwT7sInm4mTitIQag3G/view?usp=sharing",
    },
    {
      name: "Spotify API Website",
      img: spotifyapi,
      description:
        "Spotify API Website is a web application that displays Spotify's API service to populate Artist, Album, and Track data. The user can make a search for a particular Artist, Album, or Track and the website will display all relevant information. For example, the image on the left shows the Artist page that displays Drakes data such as genres and top tracks.",
      techStack: ["Angular", "HTML", "CSS", "TypeScript"],
      libraries: ["Spotify API"],
    },
  ];

  return (
    <div className={styles.Projects}>
      <h1 ref={projectsRef} className={styles["white-text"]}>
        Projects
      </h1>
      <div className={styles.ProjectList}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            img={project.img}
            description={project.description}
            techStack={project.techStack}
            libraries={project.libraries}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
