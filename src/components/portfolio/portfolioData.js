import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";
import Image6 from "../../assets/img/portfolio/project-6.jpg";
import Image7 from "../../assets/img/portfolio/project-7.jpg";
import Image8 from "../../assets/img/portfolio/project-8.jpg";
import Image9 from "../../assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Automation project",
    image: Image1,
    tag: ["Automation"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "VFS Global UK Automation",
        
        language: "Python, Selenium",
        
        preview: "github.com/moizx85/VFS-UK-AUTOMATION",
      },
    ],
  },
  {
    id: 2,
    type: "youtube project",
    image: Image2,
    tag: ["video"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "video",
        client: "Videohive",
        language: " Adobe After Effects",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
      },
    ],
  },
  {
    id: 3,
    type: "slider project",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: " HTML, CSS, Javascript",
        preview: "www.envato.com",
        link: "https://www.envato.com",
      },
    ],
  },
  
  
  
 
];

export default PortfolioData;