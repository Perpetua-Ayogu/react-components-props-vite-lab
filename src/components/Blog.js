import profile from "../assets/profile.png";

const blog = {
  name: "Perpetua's Blog",

  about:
    "I am a software engineer who enjoys learning and writing about technology.",

  image: profile,

  color: "purple",

  links: {
    github: "https://github.com/devops-showcase/devops-showcase.git",
    linkedin: "http://linkedin.com/in/ayogu-perpetua-b0b210236",
  },

  posts: [
    {
      id: 1,
      title: "Learning React as a Beginner",
      date: "October 7, 2026",
      preview: "My experience learning React components and props.",
    },
    {
      id: 2,
      title: "Understanding JavaScript",
      date: "October 5, 2026",
      preview: "Some things I have learned about JavaScript.",
    },
  ],
};

export default blog;
