import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";
import img7 from "../assets/img/blog/blog-post-7.jpg";


const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Exploring the World of Artificial Intelligence: My Journey as an AI Student",
      commentor: "Moiz",
      date: "8 January 2025",
      tag: `artificial intelligence, AI degree, machine learning, data mining, technology`,
      description1:
        "Artificial Intelligence (AI) is transforming the way we interact with technology, and as an AI student, I am constantly amazed by the limitless possibilities it offers. From developing intelligent systems to solving real-world problems, my degree in AI is a gateway to shaping the future of technology.",
      description2:
        "AI is a branch of computer science that focuses on creating systems capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and natural language understanding.",
      description3:
        "One of the most exciting aspects of my degree is the opportunity to work on diverse AI projects. Key highlights include courses like Machine Learning, Neural Networks, and Data Mining, each offering a unique perspective on solving real-world challenges.",
      description4:
        "Through this blog series, I aim to share my learning journey, project experiences, and insights into the fascinating world of AI. Stay tuned for more updates on my journey as an AI student and the incredible opportunities this field has to offer.",
    },
    {
      id: 2,
      img: img2,
      title: "The Importance of Data Mining in Artificial Intelligence",
      commentor: "Moiz",
      date: "9 January 2025",
      tag: `data mining, artificial intelligence, AI student, machine learning, technology`,
      description1:
        "In the ever-evolving world of Artificial Intelligence (AI), data is the foundation that powers intelligent systems. As an AI student, I’ve come to understand that data mining is an essential tool in uncovering valuable insights and driving impactful solutions.",
      description2:
        "Data mining is the process of analyzing large datasets to identify patterns, trends, and relationships. These insights can then be used to make informed decisions, predict outcomes, or optimize processes. In AI, data mining serves as the backbone for creating machine learning models and intelligent algorithms.",
      description3:
        "Some common data mining techniques include clustering, classification, association rule learning, and data visualization. Tools like Python’s pandas, scikit-learn, Matplotlib, and Seaborn are instrumental in extracting insights from data.",
      description4:
        "As I progress in my AI journey, I’m excited to delve deeper into data mining and its applications. Whether it’s enhancing the accuracy of machine learning models or uncovering new insights from complex datasets, data mining remains a cornerstone of AI development.",
    },
    {
      id: 3,
      img: img3,
      title: "How Machine Learning Shapes the Future of AI",
      commentor: "Moiz",
      date: "10 January 2025",
      tag: `machine learning, artificial intelligence, AI student, algorithms, technology`,
      description1:
        "Machine Learning (ML) is at the heart of Artificial Intelligence (AI), empowering systems to learn from data and improve performance over time. As an AI student, delving into machine learning has been one of the most exciting aspects of my academic journey.",
      description2:
        "At its core, machine learning focuses on building algorithms that allow systems to automatically learn and adapt. From predictive analytics to natural language processing, machine learning powers numerous real-world applications.",
      description3:
        "There are three main types of machine learning: supervised, unsupervised, and reinforcement learning. Each plays a unique role in solving complex problems, whether it's predicting outcomes, clustering data, or training autonomous systems.",
      description4:
        "Learning about machine learning has given me insights into the incredible potential it holds for revolutionizing industries. In upcoming blogs, I will dive deeper into specific algorithms, projects, and techniques that have shaped my understanding of this dynamic field.",
    },
    // New Blogs
    {
      id: 4,
      img: img4,
      title: "The Role of Neural Networks in Modern AI",
      commentor: "Moiz",
      date: "11 January 2025",
      tag: `neural networks, artificial intelligence, deep learning, AI student`,
      description1:
        "Neural networks, inspired by the human brain, play a pivotal role in the development of intelligent systems capable of tackling complex tasks.",
      description2:
        "In my studies, I’ve explored the inner workings of neural networks, including backpropagation, activation functions, and optimization techniques.",
      description3:
        "These systems power some of the most groundbreaking applications in AI, including image recognition, natural language processing, and autonomous vehicles.",
      description4:
        "As I continue my AI journey, I look forward to building more projects that harness the power of neural networks to address real-world challenges.",
    },
    {
      id: 5,
      img: img5,
      title: "Demystifying Reinforcement Learning in AI",
      commentor: "Moiz",
      date: "12 January 2025",
      tag: `reinforcement learning, artificial intelligence, AI projects, technology`,
      description1:
        "Reinforcement learning (RL) is a powerful machine learning approach where agents learn by interacting with their environment to achieve specific goals.",
      description2:
        "Through coursework and projects, I’ve studied how RL can train AI to master complex tasks, such as playing games or managing resources efficiently.",
      description3:
        "Key concepts like reward functions, policies, and Q-learning have been instrumental in understanding the potential of reinforcement learning.",
      description4:
        "Exploring RL has opened my eyes to its potential to drive innovations in robotics, healthcare, and beyond.",
    },
    {
      id: 6,
      img: img6,
      title: "AI Ethics: Navigating the Challenges of Responsible AI Development",
      commentor: "Moiz",
      date: "13 January 2025",
      tag: `AI ethics, artificial intelligence, responsibility, technology`,
      description1:
        "As AI becomes more pervasive, ethical considerations are increasingly vital to ensure fairness, transparency, and accountability in AI systems.",
      description2:
        "In my AI studies, I’ve reflected on the societal impact of AI, including issues like bias in datasets, data privacy, and the ethics of automation.",
      description3:
        "Developers and researchers bear a significant responsibility in ensuring that AI technologies serve humanity positively and inclusively.",
      description4:
        "In this blog, I explore how ethical practices can guide the future development of AI and its integration into society.",
    },
    {
      id: 7,
      img: img7,
      title: "Applications of Computer Vision in Real-World AI Solutions",
      commentor: "Moiz",
      date: "14 January 2025",
      tag: `computer vision, artificial intelligence, AI applications, technology`,
      description1:
        "Computer vision is a fascinating field of AI that focuses on enabling machines to interpret and analyze visual information from the world around us.",
      description2:
        "From facial recognition to autonomous vehicles, computer vision has countless applications that are shaping industries worldwide.",
      description3:
        "In my coursework, I’ve explored tools like OpenCV and techniques like object detection, image classification, and feature extraction.",
      description4:
        "Computer vision holds immense potential for innovation, and I’m excited to contribute to its growth through future projects and research.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
