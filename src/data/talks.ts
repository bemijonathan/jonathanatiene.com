export type Talk = {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  slidesUrl?: string;
  recordingUrl?: string;
  image?: string;
};

export const talks: Talk[] = [
  {
    id: "why-no-role-stands-alone",
    title: "Why no role stands alone",
    event: "ALX Africa Fireside Chat",
    date: "2025-04-02",
    location: "Remote, Africa",
    description:
      "How every role contributes to building great digital products.",
    image: "/images/alx_fireside_chat.jpeg",
  },
  {
    id: "can-ai-think-like-the-human-brain",
    title: "Can AI Think Like the Human Brain?",
    event: "Youth Neuroscience Association of Nigeria (YNAN)",
    date: "2025-03-14",
    location: "Online",
    description:
      "A comparison of artificial neural networks and the human brain, drawing on my background in neuroscience.",
    slidesUrl:
      "https://docs.google.com/presentation/d/16ToguFRK83p3Zg0S4Q92yWqnfaXRxx3Ly3zahAKETAo/edit?usp=sharing",
    image: "/images/ynan.jpeg",
  },
  {
    id: "work-life-balance-can-you-date-and-tech",
    title: "Work-Life Balance: Can You Date and Tech?",
    event: "Techrity Techies Corner",
    date: "2025-02-28",
    location: "Remote, Nigeria",
    description:
      "Panel on work-life balance in the tech industry — myth or achievable?",
    image: "/images/techcrity-speaking.png",
  },
  {
    id: "building-a-react-agent-from-scratch",
    title: "AI Agent Camp: Building a ReAct agent from scratch",
    event: "AI Agent Camp",
    date: "2025-01-15",
    location: "YouTube",
    description:
      "Walking through the anatomy of a ReAct agent — reasoning, tool use, memory — built from first principles.",
    recordingUrl:
      "https://www.youtube.com/watch?v=C0QdSBoJiMs&list=PLjr9jgZODm4ybIGOaaRQIqDYc-KJVx6VL",
    image: "/images/james-murdza.png",
  },
  {
    id: "boosting-developers-productivity",
    title: "Boosting Developers' Productivity: A developer experience with AI",
    event: "Tech With Iroh (podcast)",
    date: "2023-10-07",
    location: "Podcast",
    description:
      "Podcast conversation on how AI is changing day-to-day developer workflows and where it still falls short.",
    recordingUrl: "https://open.spotify.com/episode/5DxQiEOO20ucZce7sKuFtz",
    image: "/images/tech-with-iroh.png",
  },
];

export const speakingTopics = [
  "Production AI Engineering",
  "AI Agents & Intelligent Systems",
  "AI Evaluation & Reliability",
  "Human-Centred AI",
  "Behavioural Science & AI",
  "The Evolution of the AI Engineer",
  "Applied AI Research",
];
