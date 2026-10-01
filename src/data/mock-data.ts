export interface DiversePath {
  id: string;
  title: string;
  image: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  price: number;
  image: string;
}

export interface MetricStat {
  value: string;
  label: string;
}

export const DIVERSE_PATHS_DATA: DiversePath[] = [
  {
    id: "1",
    title: "Design",
    image: "/images/diverse/Frame 4.png",
  },
  {
    id: "2",
    title: "Development",
    image: "/images/diverse/Frame 4 (1).png",
  },
  {
    id: "3",
    title: "IT & Software",
    image: "/images/diverse/Frame 4 (2).png",
  },
  {
    id: "4",
    title: "Business",
    image: "/images/diverse/Frame 4 (3).png",
  },
  {
    id: "5",
    title: "Marketing",
    image: "/images/diverse/Frame 4 (4).png",
  },
  {
    id: "6",
    title: "Photography",
    image: "/images/diverse/Frame 4 (5).png",
  },
];

export const COURSE_CATEGORIES = [
  // Row 1
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  // Row 2
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  // Row 3
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const COURSES_DATA: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/courses/course1.png",
  },
  {
    id: "2",
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/courses/course2.png",
  },
  {
    id: "3",
    title: "the Power of Big Data",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/courses/course3.png",
  },
  {
    id: "4",
    title: "Balancing Productivity an...",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/courses/course4.png",
  },
  {
    id: "5",
    title: "Mastering Money Manage...",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/courses/course5.png",
  },
  {
    id: "6",
    title: "From Idea to Startup Succ...",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    price: 25,
    image: "/images/courses/course6.png",
  },
];

export const ALL_CREATOR_PRODUCTS = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "UI/UX Design",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course1.png",
  },
  {
    id: "2",
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "Development",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course2.png",
  },
  {
    id: "3",
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "Data Science",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course3.png",
  },
  {
    id: "4",
    title: "Balancing Productivity and Life",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "Productivity",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course4.png",
  },
  {
    id: "5",
    title: "Mastering Money Management",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "Finance",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course5.png",
  },
  {
    id: "6",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "Business",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course6.png",
  },
];

export const PROFESSIONAL_GROWTH_DATA = {
  title: "Your Path to Professional Growth Starts Here!",
  description:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  stats: [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ] as MetricStat[],
  progressValue: "55%",
};

export const CREATOR_SECTION_DATA = {
  title: "Create & Manage Courses Easily.",
  description:
    "ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.",
  features: [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ],
  revenueStats: {
    totalRevenue: "$120.29",
    period: "July 1-28",
    yearToDate: "$1,200.38",
    year: "2023",
    ytdGrowth: "+12$",
  },
  studentFeedback: {
    title: "Happy Students",
    rating: "4.5",
    count: "(240)",
    avatarsBadge: "2K+",
  },
};

export const TESTIMONIALS_DATA = {
  title: "Discover What Our Community Is Saying",
  description:
    "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
  testimonials: [
    {
      id: "1",
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      avatar: "/images/men/Ellipse.png",
      quote:
        '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
      id: "2",
      name: "James L.",
      role: "Lifelong Learner",
      avatar: "/images/men/Ellipse (1).png",
      quote:
        '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
      id: "3",
      name: "Alex B.",
      role: "Inspired Creator",
      avatar: "/images/men/Ellipse (2).png",
      quote:
        '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
  ],
};
