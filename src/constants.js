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

const faq_questions = [
  {
    id: "s1",
    title: "Web Designs",
    questions: [
      {
        id: "a1",
        title: "What web design services does Hiqsense Smart Systems offer?",
        answer:
          "Hiqsense specializes in a range of web design services including custom website design, responsive web design, e-commerce website development, content management systems (CMS), user interface (UI) and user experience (UX) design, and website maintenance and support.",
      },
      {
        id: "a2",
        title: "How does the design process work?",
        answer:
          "Our design process begins with understanding your business goals and target audience. We then create a conceptual design, which upon your approval, is developed into a fully functional website. We involve our clients at each stage for feedback and revisions to ensure the final product meets their expectations.",
      },
      {
        id: "a3",
        title: "Web Design questionse?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a4",
        title: "Web Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a5",
        title: "Web Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a6",
        title: "Web Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
    ],
  },
  {
    id: "s2",
    title: "Graphic Designs",
    questions: [
      {
        id: "a7",
        title:"What type of graphic design services does Hiqsense provide?",
        answer:
          "Hiqsense offers a wide range of graphic design services including corporate identity creation, logo design, stationery design, brochure and flyer design, infographics, and custom illustrations. Our designs are tailored to enhance your brand's visual appeal and communication.",
      },
      {
        id: "a8",
        title: "Can Hiqsense help with rebranding my company?",
        answer:
          "Absolutely! We specialize in corporate rebranding. Our team can revamp your existing brand elements or create an entirely new brand identity, aligning with your company’s evolution and future direction.",
      },
      {
        id: "a9",
        title: "Graphic Design questionse?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a10",
        title: "Graphic Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a11",
        title: "Graphic Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a12",
        title: "Graphic Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
    ],
  },
  {
    id: "s3",
    title: "SEO Optimization",
    questions: [
      {
        id: "a13",
        title: " What SEO services does Hiqsense provide?",
        answer:
          "Hiqsense offers comprehensive SEO services that include keyword research and optimization, on-page SEO, off-page SEO (such as backlink building), technical SEO to improve website structure and performance, content creation for SEO, and local SEO strategies for businesses looking to enhance their local market presence.",
      },
      {
        id: "a14",
        title: "How does Hiqsense improve our website’s ranking on search engines?",
        answer:
          "We employ a multi-faceted approach to improve your website's ranking. This includes optimizing website content with relevant keywords, enhancing website speed and user experience, building quality backlinks, and ensuring your site is easily crawlable by search engine bots. We also stay updated with the latest search engine algorithms to refine our strategies.",
      },
      {
        id: "a15",
        title: "SEO questionse?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a16",
        title: "SEO questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a17",
        title: "SEO questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a18",
        title: "SEO questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
    ],
  },
  {
    id: "s4",
    title: "Email Hosting",
    questions: [
      {
        id: "a19",
        title: "Email Hosting questions",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a20",
        title: "Email Hosting questions",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a21",
        title: "Email Hosting questionse?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a22",
        title: "Email Hosting questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a23",
        title: "Email Hosting questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a24",
        title: "Email Hosting questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
    ],
  },
  {
    id: "s5",
    title: "Others",
    questions: [
      {
        id: "a25",
        title: "Other questions",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a26",
        title: "Other questions",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a27",
        title: "Other questionse?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a28",
        title: "Other questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a29",
        title: "Other questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a30",
        title: "Other questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
    ],
  },
];

export { features, services, pricing_plans, faq_questions };
export default TEAM_MEMBERS;
