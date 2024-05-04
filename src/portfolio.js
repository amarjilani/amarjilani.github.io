/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amar Jilani",
  title: "Hi, I'm Amar",
  subTitle: "An aspiring software engineer driven by a passion for harnessing technology to tackle real-world challenges, with a keen focus on the intersection between machine learning and healthcare."
  , resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amarjilani",
  linkedin: "https://www.linkedin.com/in/amarjilani/",
  gmail: "amarjilani64@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Comphrensive skillset in software engineering, with an emphasis on AI/ML, HPC and full-stack development.",
  skills: [
    emoji(
      "⚡ Skilled in designing and implementing machine learning models to address real-world challenges, leveraging data-driven approaches for impactful solutions."
    ),
    emoji("⚡ Proficient in optimizing and parallelizing high-performance code, particularly adept at addressing scientific problems with efficiency and precision."),
    emoji(
      "⚡ Experienced in full-stack development, adept at crafting robust and user-friendly applications that seamlessly integrate front-end and back-end technologies for enhanced user experiences."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "react.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/berkeley.png"),
      subHeader: "Master of Molecular Science and Software Engineering",
      duration: "August 2023 - May 2024",
      desc: "Topics: Machine Learning, High-Performance Computing, Data Science, Scientific Computing, Quantum Chemistry, Software Engineering",
      descBullets: [
      ]
    },
    {
      schoolName: "Oregon State University",
      logo: require("./assets/images/osu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2022 - August 2023",
      desc: "Topics: Data Structures, Algorithms, Operating Systems, Databases, Computer Networks, Cloud Development",
      descBullets: []
    },
    {
      schoolName: "University of Toronto, St. George",
      logo: require("./assets/images/uoft.png"),
      subHeader: "Honours Bachelor of Science in Neuroscience and Cell & Molecular Biology",
      duration: "September 2016 - June 2021",
      desc: "",
      descBullets: []
    }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Here are some projects I've worked on!",
  projects: [
    {
      image: require("./assets/images/lstm.jpg"),
      projectName: "Longitudinal Alzheimer's Prediction",
      projectDesc: "This project introduces a novel approach to Alzheimer's disease prognosis by developing an LSTM model to predict protein progression and baseline cognitive scores using neuroimaging data. By targeting the prediction of cognitive decline and biomarker evolution, the model aims to facilitate earlier diagnosis, enable personalized treatment strategies, and contribute to the development of new therapeutic interventions. This project yielded a model that demonstrates promising results in accurately forecasting the progression of tau protein concentrations across the brain and cognitive metrics.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/amarjilani/capstone"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ani.png"),
      projectName: "ANI-1 Molecular Energy Prediction",
      projectDesc: "This project involves the development of a design and implementation of an advanced deep learning network, leveraging the ANI-1 dataset to accurately predict molecular energies. This involved engineering a streamlined workflow for data preprocessing, model training, and evaluation. A sophisticated autoencoder network was developed to compress the sparse AEVs into dense, compressed data, which enhanced the model's generalizability.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/amarjilani/ANI-1"
        }
      ]
    },
    {
      image: require("./assets/images/ca.png"),
      projectName: "Cellular Automata Library",
      projectDesc: "Our team collaboratively developed a cutting-edge C++ software library specifically designed for sophisticated 2D structure modeling through cellular automata systems. This library is optimized for high performance and scalability, enabling the handling of complex computations efficiently. It includes dynamic modeling tools and integrates Python-based visualization capabilities, allowing users to intuitively analyze and visualize intricate cellular automata patterns. The design of the library features an easy-to-use API and comprehensive documentation, making it accessible to a wide range of users from various technical backgrounds and disciplines. ",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/amarjilani/Cellular-Automata"
        }
      ]
    },
    {
      image: require("./assets/images/quantum.webp"),
      projectName: "CNDO/2 Quantum Chemistry Simulation",
      projectDesc: "This project focuses on the implementation of the CNDO/2 (Complete Neglect of Differential Overlap) method within a Self-Consistent Field (SCF) framework to calculate approximate molecular energies. By utilizing CNDO/2, we streamline quantum chemical computations, making them both accessible and efficient for predicting electronic properties of molecules. The simulation is designed to provide rapid and reliable estimations of molecular energy, crucial for understanding chemical reactivity and molecular stability. ",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/amarjilani/CNDO2"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Reach out to discuss a project, any opportunities, or just to say hi!",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
