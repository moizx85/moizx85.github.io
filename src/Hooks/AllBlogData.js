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
