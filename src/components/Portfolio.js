import React from "react";
import ReactDom from "react-dom";
import Link from "gatsby-link";
import ProjectItem from './ProjectItem';

// import project background images
import Huddle from "../assets/images/projects/Huddle/BG-700x400.png";
import Breakout from "../assets/images/projects/Breakout/BG-700x400.png";
import FeatureSelectionFromNN from "../assets/images/projects/Feature-Selection-With-Nearest-Neighbor/BG-700x400.jpg";
import miniGL from "../assets/images/projects/miniGL/BG-700x400.png";
import personalWebsitev1 from "../assets/images/projects/PersonalWebsite/BG-700x400.png";
import RayTracer from "../assets/images/projects/RayTracer/BG-700x400.png";
import rshell from "../assets/images/projects/rshell/BG-700x400.png";
import SlidingPuzzle from "../assets/images/projects/SlidingPuzzle/BG-700x400.png";


const projectsContainer = {
  position: 'absolute'
};


class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  //IDEA: Implement a scraper to grab projects from GitHub automatically.
  getProjects(){
    this.setState({ projects:[
      {
        title: "Huddle: Team Management",
        descirption: "A collaborative tool for managing projects.",
        languages: ["React", "HTML", "CSS", "JavaScript"],
        pictureLink: Huddle,
        lastUpdate: "Nov 25, 2017"
      },
      {
        title: "Breakout",
        descirption: "The good ol' Atari game reinvented. Every bit was hand wired and programmed from scratch. The best part - reverse engineering the Nintendo controller.",
        languages: ["C", "Embedded Systems"],
        pictureLink: Breakout,
        lastUpdate: "June 2017"
      },
      {
        title: "Feature Optimizer",
        descirption: "A machine learning algorithm that optimizes the nearest neighbor classifier. I use forward and backward selection to drop irrelevant features from the data set.  ",
        languages: ["C++"],
        tags: ["Machine Learning"],
        pictureLink: FeatureSelectionFromNN,
        lastUpdate: "Nov 2016"
      },
      {
        title: "Sliding Puzzle Solver",
        descirption: "Artificially intelligent program, using A* search, that can solve 3x3 sliding tile puzzles.",
        languages: ["C++"],
        tags: ["AI"],
        pictureLink: SlidingPuzzle,
        lastUpdate: "Feb 21, 2016"
      },
      {
        title: "Simple Ray Tracer",
        descirption: "A basic ray tracer created with OpenGL.",
        languages: ["C++"],
        tags: ["Graphics"],
        pictureLink: RayTracer,
        lastUpdate: "Dec 21, 2017"
      },
      {
        title: "MiniGL",
        descirption: "A simplified 3D rendering pipeline created with OpenGl.",
        languages: ["C++"],
        tags: ["Graphics"],
        pictureLink: miniGL,
        lastUpdate: "Nov 28, 2017"
      },
      {
        title: "rshell",
        descirption: "A custom shell terminal writtin in C++",
        languages: ["C++"],
        tags: ["OS"],
        pictureLink: rshell,
        lastUpdate: "Dec 2, 2017"
      },
      {
        title: "Personal Website 1.0",
        descirption: "My personal website written in HTML, CSS, JavaScript.",
        languages: ["Bootstrap", "HTML", "CSS" , "JavaScript", "jQuery"],
        tags: ["WebDev"],
        pictureLink: personalWebsitev1,
        lastUpdate: "Jan 3, 2017"
      },
      {
        title: "Personal Website 2.0",
        descirption: "My personal website written revamped with Gatsby",
        languages: ["HTML", "CSS" , "JavaScript", "Reactjs"],
        tags: ["WebDev"],
        pictureLink: "",
        lastUpdate: "Jul 26, 2018"
      },
    ]});
  }



  componentWillMount(){
    this.getProjects();
  }

  render() {
    // Generate array of projects
    let projectItems;
    // console.log('Before Map');
    // console.log(this.state.projects);
    if(this.state.projects){
      projectItems = this.state.projects.map( (project) => {
        // console.log(projectItems);
        return (
          <td key={project.title} style = {{
            paddingLeft: '.25rem',
            paddingRight: '.25rem'
          }}>
            <ProjectItem
              onMouseEnter={this.fadeBackground}
              onMouseLeave={this.resetBackground}
              project={project}/>
          </td>
        );
      });
    }

    // Transform array of projects to a table a of projects

    // Start with creating rows
    let projectItemRows = projectItems.reduce(function (rows, projectItem, i) {
      let rowIndex = Math.floor(i/3);
      if(i % 3 == 0) {
        rows[rowIndex] = [projectItem]
      } else {
        rows[rowIndex].push(projectItem)
      }
      return rows;
    }, [])

    console.log('Hello', projectItemRows);
    // create table
    let projectItemTable
    if(projectItemRows){
      projectItemTable = projectItemRows.map( (projectItemRow, i) => {
        // console.log(projectItems);
        return (
          <tr key={i}>
            {projectItemRow}
          </tr>
        );
      });
    }
    console.log('Table', projectItemTable);

    console.log('After Map')
    console.log(projectItems); // Debugging
    return (
      <section id="portfolio">
          <h1>Portfolio</h1>
          <table id="projectTable">
            <thead>
            </thead>
            <tbody>
              {projectItemTable}
            </tbody>
          </table>
      </section>
    );
  }
}

export default Portfolio;