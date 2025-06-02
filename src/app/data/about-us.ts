import { FaCrown, FaMedal, FaBook, FaDumbbell } from "react-icons/fa";
import { FaMasksTheater } from "react-icons/fa6";
import { GiLightningShield } from "react-icons/gi";
import { BsFillHandbagFill } from "react-icons/bs";
import { PiBellSimpleRingingFill } from "react-icons/pi";

export const achievementAndGoal = [
  {
    id: 1,
    title: "Achievements",
    desc: "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements",
    card: [
      {
        id: 1,
        title: "Trusted by Thousands",
        desc: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
        icon: FaCrown,
      },
      {
        id: 2,
        title: "Award-Winning Courses",
        desc: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
        icon: FaMedal,
      },
      {
        id: 3,
        title: "Positive Student Feedback",
        desc: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
        icon: FaMasksTheater,
      },
      {
        id: 4,
        title: "Industry Partnerships",
        desc: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.",
        icon: GiLightningShield,
      },
    ],
  },
  {
    id: 2,
    title: "Our Goals",
    desc: "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.Through our carefully crafted courses, we aim to",
    card: [
      {
        id: 1,
        title: "Provide Practical Skills",
        desc: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
        icon: BsFillHandbagFill,
      },
      {
        id: 2,
        title: "Foster Creative Problem-Solving",
        desc: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
        icon: FaBook,
      },
      {
        id: 3,
        title: "Promote Collaboration and Community",
        desc: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
        icon: FaDumbbell,
      },
      {
        id: 4,
        title: "Stay Ahead of the Curve",
        desc: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
        icon: PiBellSimpleRingingFill,
      },
    ],
  },
];
