import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate Machine Learning Engineer with a strong focus on deep learning and computer vision, dedicated to developing impactful, real-world applications. Skilled in technologies such as Python, TensorFlow, Keras, Scikit-Learn, CNNs, image processing, data analysis, and SQL, I bring expertise across the entire ML lifecycle. I also build robust backend applications for model deployment using frameworks like FastAPI and Django. With a little proficiency in cloud platforms like AWS and GCP, I streamline model deployment and scalability. My primary interest lies in applying AI to medical domains, creating solutions that advance healthcare and diagnostics.`;

export const Education = [
  {
    year: "2025 - Present",
    institution: "University of Pisa",
    degree: "Masters Degree",
    department: "Computer Science - Artificial Intelligence",
    relevant_courses: "Machine Learning, Artificial Intelligence, Deep Learning and Generative AI, Computer Vision"
  },
  {
    year: "2021 - 2025",
    institution: "Maulana Abul Kalam Azad University of Technology, Kolkata, West Bengal, India",
    degree: "Bachelors Degree",
    department: "Computer Science and Engineering",
    relevant_courses: "Machine Learning, Artificial Intelligence, Image Processing, Functional Programming, Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Computer Networks, Cybersecurity",
    
  },
  {
    year: "2021",
    institution: "Don Bosco School Park Circus, Kolkata",   
    degree: "Higher Secondary School",
    department: "Science",
    relevant_courses: "Physics, Chemistry, Mathematics, English, Computer Science"    
  },  
];

export const PROJECTS = [
  {
    title: "Residual U-Net Framework Enhanced with Wavelet Denoising for Brain Tumor Segmentation",
    image: project1,
    description:
      "This project implements a Residual U-Net model integrated with wavelet denoising for automated brain tumor segmentation from multimodal MRI scans. It enhances image quality, focuses on tumor-centric slices, and achieves high segmentation accuracy and Dice scores on the BraTS2020 dataset.",
    technologies: ["Tensorflow", "Residual U-Net", "OpenCV", "Pytorch", "Python", "U-Net"],    
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

export const PUBLICATIONS = [
  {
    title: "Residual U-Net Framework Enhanced with Wavelet Denoising for Brain Tumor Segmentation",
    authors: "Surojit Bose1, Shaikh Asif Hossain1, and Debam Saha",
    conference: "6th International Conference on Frontiers in Computing and Systems",
    description: "This paper presents a Residual U-Net framework enhanced with wavelet denoising for accurate brain tumor segmentation using multimodal MRI (FLAIR and T1CE) from the BraTS2020 dataset. The proposed model achieves high Dice scores and 99.58% accuracy, demonstrating robust tumor delineation under limited computational resources."
  }
]

export const CONTACT = {
  address: "Pisa, Tuscany, Italy",  
  email: "hossainshaikhasif@gmail.com",
};
