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
  username: "Ayesha Kanwal",
  title: "Hi all, I'm Ayesha",
  subTitle: emoji(
    A passionate Full Stack Software Developer 🚀 focusing on Python frameworks, AI, deep learning, and machine learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10kdAtq04Zymb_zf_LdMb8Ontm3Y2Jlcp/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AyeshaKanwal3",
  linkedin: "https://www.linkedin.com/in/ayesha-kanwal-/",
  gmail: "fatimakanwal000001@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive API Applications and models")
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "machinelearning",
      fontAwesomeClassname: "fab fa-machine_learning"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "deeplearning",
      fontAwesomeClassname: "fab fa-deep-learning"
    },
    {
      skillName: "apicalling",
      fontAwesomeClassname: "fas fa-api-calling"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Virtual University Of Pakistan",
      logo: require("./assets/images/virtualUniversityLogo.png"), // Add your Virtual University logo here
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Expected in 2024",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "University of Sargodha",
      logo: require("./assets/images/sargodhaUniversityLogo.png"), // Add your University of Sargodha logo here
      subHeader: "Associate of Science",
      duration: "Completed in 2021",
      desc: "",
      descBullets: []
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", // Insert stack or technology you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
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
  displayCodersrank: false // Set true to display codersrank badges section need to change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Experience Section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance Web Developer",
      company: "Remote",
      
      date: "May 2022 - Present",
      desc: "Developed and maintained web applications using HTML, CSS, JavaScript, and Python.",
      descBullets: [
        "Integrated AI technologies in both front-end and back-end to enhance functionality and performance.",
        "Utilized Python and JavaScript libraries to strengthen programming resources and ensure robust application performance."
      ]
    },
    {
      role: "Copy and Content Writer",
      company: "Freelance Marketplace",
     
      date: "May 2020 - June 2023",
      desc: "Created engaging advertising copy for online content, aligning with brand identity and personality.",
      descBullets: [
        "Customized brand messaging to capture target audience interest, driving engagement and conversions.",
        "Developed media outreach strategies in collaboration with cross-functional teams, enhancing brand visibility."
      ]
    },
    {
      role: "AI Conventional Front End Internship",
      company: "AfterFlea OS Conversational AI",
    
      date: "September 2023 - November 2023",
      desc: "Developed foundational skills in React through hands-on experience.",
      descBullets: [
        "Completed a mini project focusing on front-end development.",
        "Collaborated with researchers on innovative AI solutions."
      ]
    },
    {
      role: "Fellowship Program",
      company: "Headstarter AI",
      
      date: "7 week program",
      desc: "Participated in a 7-week fellowship program focusing on advanced AI technologies."
    }
  ]
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "General Secretary of IT Club",
      subtitle: "Led various initiatives and projects within the IT Club.",
      image: require("./assets/images/itClubLogo.png"),
      imageAlt: "IT Club Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Skills Section

const skillsSection = {
  display: true, // Set false to hide this section, defaults to true
  technicalSkills: [
    "Python",
    "AI Regression Models",
    "Data Analytics",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "REST APIs",
    "Flask",
    "Jupyter Notebook",
    "GitHub",
    "VS Code"
  ],
  softSkills: [
    "Observation",
    "Decision Making"
  ]
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  splashScreen
};
