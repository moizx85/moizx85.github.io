import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";
import img7 from "../assets/img/blog/blog-post-7.jpg";
import img8 from "../assets/img/blog/blog-post-8.jpg";
import img9 from "../assets/img/blog/blog-post-9.jpg";
import img10 from "../assets/img/blog/blog-post-10.jpg";
import img11 from "../assets/img/blog/blog-post-11.jpg";
import img12 from "../assets/img/blog/blog-post-12.jpg";
import img13 from "../assets/img/blog/blog-post-13.jpg";
import img14 from "../assets/img/blog/blog-post-14.jpg";


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
    {
    id: 8,
    img: img8,
    title: "Natural Language Processing: Bridging the Gap Between Humans and Machines",
    commentor: "Moiz",
    date: "15 January 2025",
    tag: `NLP, natural language processing, artificial intelligence, AI projects`,
    description1:
      "Natural Language Processing (NLP) is revolutionizing the way humans interact with technology, enabling machines to understand and generate human language.",
    description2:
      "In my studies, I’ve explored key NLP concepts like tokenization, sentiment analysis, and language translation, which form the foundation for AI applications like chatbots and virtual assistants.",
    description3:
      "NLP techniques, such as Transformers and BERT, have set a new benchmark for performance, creating systems that are more accurate and context-aware.",
    description4:
      "I’m thrilled to work on NLP projects that enhance communication and accessibility, paving the way for a more connected world.",
  },
  {
    id: 9,
    img: img9,
    title: "The Impact of AI on Healthcare: Transforming Patient Care",
    commentor: "Moiz",
    date: "16 January 2025",
    tag: `AI in healthcare, artificial intelligence, machine learning, technology`,
    description1:
      "Artificial Intelligence is driving significant advancements in healthcare, from early disease detection to personalized medicine.",
    description2:
      "Technologies like AI-powered diagnostic tools and predictive analytics are helping doctors make more informed decisions and improving patient outcomes.",
    description3:
      "During my studies, I’ve analyzed AI applications in radiology, genomics, and hospital management, highlighting its transformative potential.",
    description4:
      "AI in healthcare is a promising field, and I look forward to contributing to innovative solutions that save lives and improve healthcare systems.",
  },
  {
    id: 10,
    img: img10,
    title: "Exploring Generative AI: Creativity Powered by Machines",
    commentor: "Moiz",
    date: "17 January 2025",
    tag: `generative AI, artificial intelligence, machine learning, creative AI`,
    description1:
      "Generative AI, such as GANs and VAEs, is opening up new avenues for creativity by enabling machines to generate realistic images, music, and text.",
    description2:
      "In my AI studies, I’ve explored how generative models are trained to mimic human creativity, producing impressive results in fields like art and entertainment.",
    description3:
      "Generative AI has applications in creating personalized content, game design, and even scientific simulations, showcasing its versatility.",
    description4:
      "I’m eager to work on generative AI projects that push the boundaries of creativity and redefine what’s possible in technology-driven art.",
  },
  {
    id: 11,
    img: img11,
    title: "AI-Powered Automation: Redefining Workflows Across Industries",
    commentor: "Moiz",
    date: "18 January 2025",
    tag: `AI automation, artificial intelligence, machine learning, technology`,
    description1:
      "Automation powered by AI is transforming industries by streamlining processes and increasing efficiency.",
    description2:
      "From robotic process automation (RPA) to intelligent decision-making systems, AI is enabling businesses to optimize workflows and reduce costs.",
    description3:
      "In my studies, I’ve explored the impact of AI automation in industries like manufacturing, finance, and customer service.",
    description4:
      "AI-driven automation represents the future of work, and I’m excited to develop solutions that help businesses achieve their goals more effectively.",
  },
  {
    id: 12,
    img: img12,
    title: "Big Data and AI: Unlocking the Power of Insights",
    commentor: "Moiz",
    date: "19 January 2025",
    tag: `big data, artificial intelligence, data analysis, machine learning`,
    description1:
      "The synergy between Big Data and AI is driving innovations in decision-making and predictive analytics.",
    description2:
      "By analyzing massive datasets, AI systems can uncover trends and patterns that were previously hidden, providing valuable insights for businesses and researchers.",
    description3:
      "In my coursework, I’ve worked with tools like Hadoop, Spark, and TensorFlow to process and analyze large-scale data efficiently.",
    description4:
      "Big Data and AI are a powerful combination, and I’m excited to explore their potential to solve complex problems and drive meaningful change.",
  },
  {
    id: 13,
    img: img13,
    title: "AI in Cybersecurity: Protecting the Digital Frontier",
    commentor: "Moiz",
    date: "20 January 2025",
    tag: `AI in cybersecurity, artificial intelligence, machine learning, technology`,
    description1:
      "Cybersecurity is a critical area where AI is making a significant impact by detecting and mitigating threats in real-time.",
    description2:
      "AI-powered tools can identify vulnerabilities, monitor network activity, and respond to cyberattacks with unprecedented speed and accuracy.",
    description3:
      "Through my studies, I’ve examined how machine learning algorithms are used to enhance security protocols and protect sensitive data.",
    description4:
      "AI in cybersecurity is a rapidly growing field, and I’m passionate about contributing to solutions that ensure digital safety for individuals and organizations.",
  },
  {
    id: 14,
    img: img14,
    title: "AI in Education: Personalizing Learning Experiences",
    commentor: "Moiz",
    date: "21 January 2025",
    tag: `AI in education, artificial intelligence, personalized learning, technology`,
    description1:
      "Artificial Intelligence is revolutionizing education by creating personalized learning experiences tailored to individual needs.",
    description2:
      "AI-powered tools like adaptive learning platforms and intelligent tutoring systems are enhancing student engagement and outcomes.",
    description3:
      "During my AI journey, I’ve explored how technology can bridge gaps in education and provide equal opportunities for learners worldwide.",
    description4:
      "AI in education has the potential to transform traditional learning methods, and I’m excited to contribute to innovations that empower students and educators alike.",
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
