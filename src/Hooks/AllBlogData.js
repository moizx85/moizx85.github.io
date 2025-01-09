import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";

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
