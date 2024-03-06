const TEAM_MEMBERS = [
  {
    id: "m1",
    image: "/assets/about-us/azar.png",
    description: "/assets/about-us/azar_description.png",
  },
  {
    id: "m2",
    image: "/assets/about-us/kei.png",
    description: "/assets/about-us/kei_description.png",
  },
  {
    id: "m3",
    image: "/assets/about-us/mike.png",
    description: "/assets/about-us/mike_description.png",
  },
  {
    id: "m4",
    image: "/assets/about-us/lara.png",
    description: "/assets/about-us/lara_description.png",
  },
];
const features = [
  {
    id: "f1",
    title: "Commitment to Creativity",
    image: "/assets/about-us/feature-icon-1.png",
    text: "Commitment to Creativity",
  },
  {
    id: "f2",
    title: "Client Satisfaction",
    image: "/assets/about-us/feature-icon-2.png",
    text: "Client Satisfaction",
  },
  {
    id: "f3",
    title: "Digital Trends",
    image: "/assets/about-us/feature-icon-3.png",
    text: "Digital Trends",
  },
];

const services = [
  {
    id: "s1",
    title: "A Decade of Expertise",
    image: "/assets/about-us/decade.svg",
    text: "A Decade of Expertise",
  },
  {
    id: "s2",
    title: "Innovative Design",
    image: "/assets/about-us/clean.svg",
    text: "Innovative Design",
  },
  {
    id: "s3",
    title: "Client-Centric Approach",
    image: "/assets/about-us/protection.svg",
    text: "Client-Centric Approach",
  },
];

const pricing_plans = [
  {
    id: "p1",
    title: "Web Design",
    packageName: "Startup Package",
    price: "$100",
    image: "/assets/pricing/ellipse.png",
    offers: [
      {
        id: "o1",
        text: "Domain Name - 1 Year",
      },
      {
        id: "o2",
        text: "4-Static Pages Web Design",
      },
      {
        id: "o3",
        text: "Hosting - 1 Year",
      },
      {
        id: "o5",
        text: "5 Business Email Accounts",
      },
    ],
    features: [
      {
        id: "f1",

        title: "Domain",
        content: "Domain Name for 1 Year",
      },
      {
        id: "f2",
        title: "Static Pages",
        content: "4-Static Pages Web Design",
      },
      {
        id: "f3",
        title: "Hosting",
        content: "Provides Hosting for 1 Year",
      },
      {
        id: "f4",
        title: "Email",
        content: "Obtain 5 Business Email Accounts",
      },
    ],
  },
  {
    id: "p2",
    title: "Web Design",
    packageName: "E-Commerce Package",
    price: "$100",
    image: "/assets/pricing/ellipse2.png",
    offers: [
      {
        id: "o1",
        text: "Domain Name - 1 Year",
      },
      {
        id: "o2",
        text: "Fully Functional E-Commerce with Admin Portal",
      },
      {
        id: "o3",
        text: "Online Payment Integration",
      },
      {
        id: "o4",
        text: "Hosting - 1 Year",
      },
      {
        id: "o5",
        text: "5 Business Email Accounts",
      },
    ],
    features: [
      {
        id: "f1",

        title: "Domain",
        content: "Domain Name for 1 Year",
      },
      {
        id: "f2",
        title: "Static Pages",
        content: "4-Static Pages Web Design",
      },
      {
        id: "f3",
        title: "Hosting",
        content: "Provides Hosting for 1 Year",
      },
      {
        id: "f4",
        title: "Payment",
        content: "Online Payment Integration",
      },
      {
        id: "f5",
        title: "Email",
        content: "Obtain 5 Business Email Accounts",
      },
    ],
  },
  {
    id: "p3",
    title: "Graphic Design",
    packageName: "Logo and Graphic Design Package",
    price: "$100",
    image: "/assets/pricing/ellipse3.png",
    offers: [
      {
        id: "o1",
        text: "Logo Design",
      },
      {
        id: "o2",
        text: "Social Media Kit",
      },
      {
        id: "o3",
        text: "3 Concepts",
      },
      {
        id: "o4",
        text: "Stationary Design",
      },
    ],
    features: [
      {
        id: "f1",

        title: "Logo",
        content: "We’ll Craft Your Own Logo",
      },
      {
        id: "f2",
        title: "Social Media",
        content: "Access to Social Media Kit",
      },
      {
        id: "f3",
        title: "3 Concepts",
        content: "Provides 3 Design Concepts",
      },
      {
        id: "f4",
        title: "Design",
        content: "With Stationary Design",
      },
    ],
  },
  {
    id: "p4",
    title: "SEO",
    packageName: "Take Your Business to the Next Level with Business Plan.",
    price: "Custom",
    image: "/assets/pricing/Pattern.png",
    offers: [
      {
        id: "o1",
        text: "Page Audit",
      },
      {
        id: "o2",
        text: "Research Keywords",
      },
      {
        id: "o3",
        text: "Title Optimization",
      },
      {
        id: "o4",
        text: "Meta Description",
      },
      {
        id: "o5",
        text: "Site Map for Search Engines",
      },
    ],
    features: [
      {
        id: "f1",

        title: "Audit",
        content: "Ensure Clear Page Auditing",
      },
      {
        id: "f2",
        title: "Keywords",
        content: "Dive to Market Research",
      },
      {
        id: "f3",
        title: "Title",
        content: "Provides Title Optimization",
      },
      {
        id: "f4",
        title: "Meta",
        content: "Meta Description Optimization",
      },
      {
        id: "f5",
        title: "Site Map",
        content: "Provides Site Map for Search Engines",
      },
    ],
  },
];

const faq_sections = [
  {
    id: "s1",
    title: "Web Designs",
  },
  {
    id: "s2",
    title: "Graphic Designs",
  },
  {
    id: "s3",
    title: "SEO Optimization",
  },
  {
    id: "s4",
    title: "Email Hosting",
  },
  {
    id: "s5",
    title: "Others",
  },
];

const faq_answers = [
  {
    id: "a1",
    title: "What is UX design?",
    answer:
      "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
  },
  {
    id: "a2",
    title: "What are the key principles of UX design?",
    answer:
    "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",

  },
  {
    id: "a3",
    title: "What is a Wireframe?",
    answer:"UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",

  },
  {
    id: "a4",
    title: "What is a User Testing?",
    answer:
    "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",

  },
  {
    id: "a5",
    title: "How to avail your services?",
    answer:
    "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",

  },
  {
    id: "a5",
    title: "What is your turnover rate?",
    answer:
    "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",

  },
];

export { features, services, pricing_plans, faq_sections, faq_answers };
export default TEAM_MEMBERS;
