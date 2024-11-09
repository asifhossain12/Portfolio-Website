import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate Machine Learning Engineer with a strong focus on deep learning and computer vision, dedicated to developing impactful, real-world applications. Skilled in technologies such as Python, TensorFlow, Keras, Scikit-Learn, CNNs, image processing, data analysis, and SQL, I bring expertise across the entire ML lifecycle. I also build robust backend applications for model deployment using frameworks like FastAPI and Django. With a little proficiency in cloud platforms like AWS and GCP, I streamline model deployment and scalability. My primary interest lies in applying AI to medical domains, creating solutions that advance healthcare and diagnostics.`;

export const Education = [
  {
    year: "2021 - Present",
    institution: "Calcutta Institute of Engineering and Management, Kolkata",    
    department: "Computer Science and Engineering",
    relevant_courses: "Machine Learning, Artificial Intelligence, Image Processing, Functional Programming, Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Computer Networks, Cybersecurity",
    
  },
  {
    year: "2021",
    institution: "Don Bosco School Park Circus, Kolkata",        
    department: "Science",
    relevant_courses: "Physics, Chemistry, Mathematics, English, Computer Science"    
  },  
];

export const PROJECTS = [
  {
    title: "Brain Tumour Classification and Detection",
    image: project1,
    description:
      "A deep learning-based model utilizing CNNs and image processing to aid in early diagnosis and treatment planning. Built with Python, TensorFlow, and Keras for high accuracy in tumor type identification.",
    technologies: ["Tensorflow", "CNN", "OpenCV", "ReactJS", "Python", "Django", "AWS"],    
  },
  {
    title: "Potato Disease Classification",    
    image: project2,
    description:
      "A comprehensive deep learning solution for classifying potato diseases through image recognition, employing convolutional neural networks (CNNs) for precise identification. Created with Python, TensorFlow, and Keras to facilitate timely diagnosis and enhance agricultural practices.",
    technologies: ["Tensorflow", "CNN", "ReactJS", "Python", "FastAPI", "AWS"],
    githubLink: "https://github.com/asifhossain12/AgroFarm",
    webpageLink: "https://agrofarm-bkwd.onrender.com/"
  },
  {
    title: "Earthquake Prediction",  
    image: project3,

    description:
      "An advanced machine learning model for earthquake prediction, utilizing time-series data and a Random Forest Regressor to forecast seismic activity. Developed with Python and Scikit-Learn, this model aims to provide early warnings, helping to mitigate disaster impacts and enhance safety measures.",
    technologies: ["Scikit-learn", "Pandas", "Django", "Machine Learning"],
    githubLink: "https://github.com/asifhossain12/Earthquake-Prediction-Project/"
  },  
];

export const CONTACT = {
  address: "Kolkata, India",  
  email: "hossainshaikhasif@gmail.com",
};
