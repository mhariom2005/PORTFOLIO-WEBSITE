export const profile = {
  name: "HARI OM MISHRA",
  role: "Java Developer | Spring Boot Microservices | React",
  email: "mhariom794@gmail.com",
  linkedin: "https://linkedin.com/in/hari-om-mishra",
  github: "https://github.com/mhariom2005",
  summary:
    "B.Tech Computer Science student and aspiring Java Developer with formal training in Core Java and Advanced Java and hands-on experience building Spring Boot microservices, RESTful APIs, and React interfaces backed by MySQL.",
};

export const skills = {
  languages: ["Java", "SQL", "JavaScript", "C", "C++", "Python"],
  backend: ["Spring Boot", "Microservices", "REST APIs", "Spring MVC", "Spring Data JPA", "Hibernate", "Spring Security", "JWT", "JDBC", "Servlets", "JSP"],
  frontend: ["React.js", "Hooks", "HTML", "CSS", "JavaScript ES6", "Fetch API"],
  data: ["MySQL", "DBMS", "SQL Queries", "Joins", "Normalization", "Indexing Basics"],
  fundamentals: ["DSA", "OOP", "Operating Systems", "Multithreading", "Collections", "Exception Handling"],
  tools: ["Git", "GitHub", "Maven", "Postman", "JUnit", "Eclipse", "IntelliJ IDEA", "VS Code", "Agile/Scrum", "CI Basics", "Code Reviews"],
};

export const projects = [
  {
    slug: "order-inventory-microservices",
    number: "01",
    title: "Order & Inventory",
    subtitle: "Microservices",
    description: "An order system split into independent services with separate data stores and REST communication.",
    stack: ["Java", "Spring Boot", "REST", "MySQL", "Maven", "JUnit"],
    details: [
      "Separated Order and Inventory responsibilities into independent services.",
      "Connected services over REST to verify and update stock.",
      "Included failure and timeout handling and unit-tested business logic."
    ],
    diagram: ["Order Service", "REST", "Inventory Service"],
  },
  {
    slug: "full-stack-ecommerce",
    number: "02",
    title: "Full-Stack E-Commerce",
    subtitle: "Secure application",
    description: "A React storefront backed by secure Spring Boot APIs with authentication, authorization and transactional stock/order validation.",
    stack: ["React", "Java", "Spring Boot", "Spring Security", "JWT", "JPA", "MySQL"],
    details: [
      "Built product listing, cart, checkout and order history flows.",
      "Used JWT and role-based access control with Spring Security.",
      "Added transactional validation, pagination, search and JUnit tests."
    ],
    diagram: ["React", "REST API", "Spring Security", "MySQL"],
  },
  {
    slug: "digital-wallet",
    number: "03",
    title: "Digital Wallet",
    subtitle: "Transaction system",
    description: "A transaction-focused backend for deposits, withdrawals and peer-to-peer transfers with consistency safeguards.",
    stack: ["Java", "Spring Boot", "JPA", "Hibernate", "MySQL"],
    details: [
      "Implemented deposits, withdrawals and peer-to-peer transfers.",
      "Maintained full transaction history.",
      "Used ACID transactions and optimistic locking to prevent balance errors under concurrent transfers."
    ],
    diagram: ["Wallet A", "Transaction", "Wallet B"],
  },
  {
    slug: "task-manager",
    number: "04",
    title: "Task Manager",
    subtitle: "React web app",
    description: "A responsive task-management interface built with reusable React components and REST API integration.",
    stack: ["React", "JavaScript", "REST API", "Git"],
    details: [
      "Implemented add, edit, delete and filter features.",
      "Used reusable components and React Hooks.",
      "Integrated REST APIs with Fetch API and version-controlled the project with Git and GitHub."
    ],
    diagram: ["React UI", "Fetch API", "Task API"],
  },
];

export const experience = [
  { year: "2026", title: "Java & Spring Boot Developer", org: "Project Experience", body: "Built web applications using Java, Spring Boot and RESTful API design; applied data structures and algorithms, debugging, JUnit tests and code review practices." },
  { year: "2026", title: "Web, React & Python Developer", org: "Project Experience", body: "Developed responsive applications using React, HTML, CSS and JavaScript with REST integrations, plus Python-based solutions; used Git and GitHub for version control." },
  { year: "2025", title: "Summer Training Program — Core Java & Advanced Java", org: "GrasTech", body: "Completed intensive training in OOP, collections, exception handling, multithreading, JDBC, Servlets and JSP, with practical mini-projects and debugging." },
  { year: "2025", title: "Entrepreneurship Trainee", org: "Wadhwani Foundation", body: "Completed training in business strategy, organizational operations and structured problem-solving methods." },
  { year: "2025", title: "Workshop Participant", org: "Softpro Technology", body: "Participated in project-based software development training through hands-on exercises." },
];
