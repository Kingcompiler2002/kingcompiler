// const courses = [
//   {
//     id: 1,
//     title: "Chess",
//     image:
//       "https://i.ibb.co/w9pdMv6/Blue-Modern-Blockchain-Technology-Logo-Square-Video-1.png",
//     videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
//     desctitle:
//       "Chess: Sharpening young minds with strategy, focus, and problem-solving! ",
//     description:
//       "Chess Course offers a structured, interactive learning experience with AI insights, expert coaching, puzzles, tournaments, and an extensive e-book library to help players master chess.",
//     price: "$99",
//     ageGroup: "5+",
//     duration: "4 Weeks",
//     format: "Online",
//   },
//   {
//     id: 2,
//     title: "Coding for Kids",
//     image: "https://i.postimg.cc/8Cf7sgrk/5.png",
//     videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
//     desctitle: "Coding for Kids: Ignite Creativity, Logic & Future Skills! ",
//     description:
//       "makes learning fun with interactive lessons, game development, hands-on coding, AI & robotics exploration, and teamwork-based projects to build creativity, logic, and future-ready skills! ",
//     price: "$89",
//     ageGroup: "8+",
//     duration: "6 Weeks",
//     format: "Online",
//   },
//   {
//     id: 3,
//     title: "Web Development",
//     image: "https://i.postimg.cc/T25Vzn4W/1.png",
//     videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
//     desctitle: "Web Development: Build, Design & Innovate! ",
//     description:
//       "Web Development Course: Learn front-end, back-end, and full-stack development through hands-on projects, responsive design, real-world applications, API integrations, and database management! ",
//     price: "$119",
//     ageGroup: "10+",
//     duration: "5 Weeks",
//     format: "Online",
//   },
//   {
//     id: 4,
//     title: "Graphic Design",
//     image: "https://i.postimg.cc/439gVL31/2.png",
//     videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
//     desctitle: "Graphic Design: Creativity Meets Visual Impact! ",
//     description:
//       "Graphic Design Course: Master design fundamentals, branding, UI/UX, and digital creativity using Photoshop, Illustrator, Canva, and real-world projects! ",
//     price: "$129",
//     ageGroup: "14+",
//     duration: "6 Weeks",
//     format: "Online",
//   },
//   {
//     id: 5,
//     title: "Creative Writing",
//     image: "https://i.postimg.cc/4dwsxKyC/3.png",
//     videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
//     desctitle: "Creative Writing: Where Imagination Meets Words! ",

//     description:
//       "Creative Writing Course: Develop storytelling skills, craft engaging content, and unleash your creativity through fiction, poetry, and real-world writing projects!",
//     price: "$79",
//     ageGroup: "10+",
//     duration: "5 Weeks",
//     format: "Online",
//   },
//   {
//     id: 6,
//     title: "Art & Craft",
//     image: "https://i.postimg.cc/SsmVGRrx/4.png",
//     videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
//     desctitle: "Art & Craft: Create, Imagine, Inspire! ",
//     description:
//       "Art & Craft Course: Spark creativity with hands-on projects, painting, DIY crafts, and design techniques while exploring artistic expression, enhancing skills, and building a creative portfolio!",
//     price: "$149",
//     ageGroup: "16+",
//     duration: "8 Weeks",
//     format: "Online",
//   },
// ];

export const courses = [
  {
    id: 1,
    title: "Mastering Chess",
    image:
      "https://i.ibb.co/w9pdMv6/Blue-Modern-Blockchain-Technology-Logo-Square-Video-1.png",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle:
      "Chess: Sharpening young minds with strategy, focus, and problem-solving!",
    description:
      "Chess Course offers a structured, interactive learning experience with AI insights, expert coaching, puzzles, tournaments, and an extensive e-book library to help players master chess.",
    Designation: "All Fide Rated and Certified Coaches",
    About:
      "Imagine your child mastering the 64 squares of the chessboard, developing sharp thinking, patience, and strategic skills with KingCompiler’s expert-curated curriculum! Our Online Chess Classes bring the excitement of championship-level play into every session, where young minds not only learn the moves but also cultivate the mindset of a true champion. Through hands-on practice and personalized coaching, kids advance gradually over 3 to 12 months—from complete beginners to confident players ready to conquer any challenge. Our small-group approach ensures individual attention, fostering growth, confidence, and a love for the game, one move at a time!",
    price: "Starts at $29/month",
    ageGroup: "5+",
    duration: "4 Weeks",
    format: "Live Online",
    Level: "Beginner / Intermediate / Advanced / Master",
    learningMap: {
      description:
        "Bring in your child as a Beginner in our online Chess classes and see them flourish into a Chess Tournament Play. Basics of Chess like piece moves, rules, simple tactics, Intermediate levels openings, middlegame strategies, basic endgames, and Advanced positional play, complex endgames are the key to Chess. At Kingcompiler you Practice through puzzles, games, and analysis. Study classic games, compete to apply skills, and improve with tools like Lichess.org and Chess.com. Our curriculum is designed to make your child a Chess Master!",
    },

    courseDetails: [
      { title: "Guided Sessions over 12 Months", value: "96" },
      { title: "Types of Batches (1:1 / 1:2 or 1:5)", value: "02" },
      { title: "Countries", value: "50+" },
      { title: "Active Students", value: "1000+" },
    ],
    whatYouReceive: [
      {
        img: "https://i.postimg.cc/Y2bZhPtn/play.png",
        title: "Grand Master-Curated Curriculum",
        description:
          "Our courses, designed by top chess experts, teach essential strategies and concepts, building a strong foundation.",
      },
      {
        img: "https://i.postimg.cc/MZNmfVrB/think.png",
        title: "Life Skills Beyond the Chessboard",
        description:
          "Chess teaches focus, patience, strategy, and confidence, equipping your child with life skills beyond the game.",
      },
      {
        img: "https://i.postimg.cc/k5sy2HkM/time.png",
        title: "Convenience and Flexibility",
        description:
          "With our online format, your child can learn from the comfort of home at times that suit your family’s schedule.",
      },
      {
        img: "https://i.postimg.cc/Cxq8y2Fr/chess.png",
        title: "Mastery of Chess Skills & Techniques",
        description:
          "Students progress from basic moves to advanced tactics, evolving from beginner to accomplished player.",
      },
      {
        img: "https://i.postimg.cc/HsPnk9ZG/lo-2.png",
        title: "Enhanced Analytical & Critical Thinking",
        description:
          "Chess sharpens critical thinking, strategic decision-making, and anticipation, fostering academic and personal success.",
      },
      {
        img: "https://i.postimg.cc/C1PTsmfS/coach.png",
        title: "Certified Global Recognition",
        description:
          "Make Your Child a Certified Chess Player with FIDE’s Prestigious Certifications and Accreditations.",
      },
    ],
    syllabus: [
      {
        level: "Beginner",
        aim: "Basic knowledge of chess and ready to play confidently",
        Duration: "4 Months",
        Assignment: "100+ Puzzles & Regular Assignments",
        class: "2 Sessions/Week ",
        tournament: "Weekly & Monthly Tournaments",
        makover: "Game Analysis + Revision Classes",
        maxStudents: "Max 6 Students/Batch or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Assessment + Feedback",
        specialPractice: "Special Practice with Coach",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Intermediate",
        aim: "For players performing in school or state-level tournaments",
        Duration: "8 Months",
        Assignment: "200+ Puzzles, Assignments & Tactics",
        class: "2 Sessions/Week",
        tournament: "Weekly & Monthly Tournaments",
        makover: "Game Analysis + Revision Classes",
        maxStudents: "Max 6 Students / Batch or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Assessment + Feedback",
        specialPractice: "Special Practice with Coach",
        certificate: "Certificate after Completion",
        description: "Tactics, defense, and strategy.",
      },
      {
        level: "Advanced",
        aim: "For players performing in national-level tournaments",
        Duration: "12 Months",
        Assignment: "300+ Puzzles, Assignments & Tactics",
        class: "2 Sessions/Week",
        tournament: "Weekly & Monthly Tournaments",
        makover: "Game Analysis + Revision Classes",
        maxStudents: "Max 6 Students/Batch or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Assessment + Feedback",
        specialPractice: "Special Camp with Experts",
        certificate: "Certificate after Completion",
        description: "Endgames, openings, positional play.",
      },
      {
        level: "Master",
        aim: "Personalised for Fide Rated Player",
        Duration: "Customized",
        Assignment: "500+ Puzzles, Assignments & Tactics",
        class: "2 Sessions/Week",
        tournament: " Weekly & Monthly Tournaments",
        makover: " Game Analysis + Revision Classes",
        maxStudents: " Max 6 Students /Batch or 1-on-1",
        missedClass: " Missed Class Makeover",
        assessment: " Assessment + Feedback",
        specialPractice: "Special Camp with Experts",
        certificate: "Certificate after Completion",
        description: "Tournament prep, psychology, advanced analysis.",
      },
    ],
  },
  {
    id: 2,
    title: "Coding for Kids",
    image: "https://i.postimg.cc/8Cf7sgrk/5.png",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle: "Coding for Kids: Ignite Creativity, Logic & Future Skills!",
    description:
      "Makes learning fun with interactive lessons, game development, hands-on coding, AI & robotics exploration, and teamwork-based projects.",
    Designation:
      "All Industrial Certified Trainers with 10+ years of experience",
    About:
      "Discover the world of coding with our tailored online courses for kids aged 5-14! Designed to ignite creativity and foster essential tech skills, our program offers age-appropriate learning paths. Younger children (ages 5-8) start their journey with fun game design in Code.org and engaging projects in Python (block-based). They’ll also explore AR/VR and mobile app development.For older kids (ages 9-14), we offer a deeper dive into web development (HTML/CSS/Javascript), Python programming, Mobile App Development , and cutting-edge Artificial Intelligence and Machine Learning concepts. Each course culminates in an exciting capstone project, empowering young coders to showcase their newfound skills confidently. Join us today!",
    price: "Starts at $35/month",
    ageGroup: "8+",
    duration: "6 Weeks",
    format: "Live Online",
    Level: "Beginner / Intermediate / Advanced",
    learningMap: {
      description:
        "Our online Coding classes are explicitly designed to impart coding knowledge to kids through our EXPLORE - UNDERSTAND - CREATE method. Students will explore the functionality they aim to create, understand the underlying digital logic behind it, and finally bring their project to life. This method ensures that students not only learn to code but also understand the logic behind it. Our curriculum is designed to make your child a Coding Master!",
    },
    courseDetails: [
      { title: "Guided Sessions", value: "Over 6 Months" },
      { title: "Types of Batches", value: "02 (1:1 / 1:5)" },
      { title: "Countries", value: "40+" },
      { title: "Active Students", value: "3000+" },
    ],

    whatYouReceive: [
      {
        img: "https://i.postimg.cc/Vkfjtg1K/course.png",
        title: "Curriculum Highlights",
        description:
          "Students will master coding, AI, ML, Data Science, Robotics, Web/App, Game Development, and Problem-Solving.",
      },
      {
        img: "https://i.postimg.cc/VkJHMzzG/coding.png",
        title: "Work with Popular Technologies",
        description:
          "Your child will master 10+ technologies like HTML, CSS, JavaScript, Python, SQL, AI, ML, DataScience, Robotics, and more.",
      },
      {
        img: "https://i.postimg.cc/wj0z0qNh/hackathon.png",
        title: "Hackathons & Competitions",
        description:
          "Compete in our Kids' Coding Competition, creating games, websites, apps, and more to earn recognition.",
      },
      {
        img: "https://i.postimg.cc/jdvyT1JR/practice.png",
        title: "Practice Support",
        description:
          "Get one-click access to Assignments, and supplementary materials!",
      },
      {
        img: "https://i.postimg.cc/BZ22t6RZ/feature.png",
        title: "More Features",
        description:
          "Each month, we offer a Cyber Manner Lesson with interactive activities and real-life case studies.",
      },
      {
        img: "https://i.postimg.cc/fTLWpq74/certificate.png",
        title: "Certified Global Recognition",
        description:
          "Get Certified by kingcompiler as you progress towards the next level in Coding!",
      },
    ],
    syllabus: [
      {
        level: "Beginner",
        aim: "Kickstart your child’s coding journey with interactive, fun lessons!",
        Duration: "4 Months",
        Assignment: "Block Coding, Logic, and Problem Solving",
        class: "2 Sessions/Week",
        tournament: " Mini Games, Animations, Storytelling",
        makover: " Assignments & Practice Worksheets",
        maxStudents: " Max 6 Students / Batch or 1-on-1",
        missedClass: " Missed Class Makeover",
        assessment: " Monthly Assessments + Feedback",
        specialPractice: "Special Camp with Experts",
        certificate: "Certificate after Completion",
        description: "Tournament prep, psychology, advanced analysis.",
      },
      {
        level: "Intermediate",
        aim: "For kids confident with basic logic, ready to dive into real-world coding.",
        Duration: "6 Months",
        Assignment: " Scratch++, HTML, CSS Basics",
        class: "2 Sessions/Week",
        tournament: " Websites, Games, Interactive Apps",
        makover: " Assignments + Regular Feedback",
        maxStudents: " Max 6 Students / Batch or 1-on-1",
        missedClass: " Missed Class Makeover",
        assessment: " Mid & End-Term Assessments",
        specialPractice: "Special Camp with Experts",
        certificate: "Certificate after Completion",
        description: "Tournament prep, psychology, advanced analysis.",
      },
      {
        level: "Advanced",
        aim: "Build real applications and get introduced to text-based programming!",
        Duration: "8 Months",
        Assignment: "JavaScript, Web Projects, Debugging",
        class: "2 Live Sessions/Week + Practice Time",
        tournament: "Interactive Websites & Game Logic",
        makover: " Assignments & Hack Challenges",
        maxStudents: " Max 5 Students / Batch or 1-on-1",
        missedClass: " Missed Class Makeover",
        assessment: " Assessments + Code Review Feedback",
        specialPractice: "Special Camp with Experts",
        certificate: "Certificate after Completion",
        description: "Tournament prep, psychology, advanced analysis.",
      },
      {
        level: "Master",
        aim: "Personalized track for advanced coders ready to master real-world tech skills.",
        Duration: "Customizable (based on student goals)",
        Assignment: "Full-Stack Web Dev, JavaScript ES6+, React.js, Git, APIs",
        class: "2 Live Sessions/Week + Practice Time",
        tournament: "Real Websites, Dashboards, Mini SaaS Apps",
        makover: " Assignments & Hack Challenges",
        maxStudents: " Max 4 Students / Batch or 1-on-1",
        missedClass: " Missed Class Makeover",
        assessment: "Code Reviews + Weekly Assessments",
        specialPractice: "Special Camp with Experts",
        certificate: "Certificate after Completion",
        description: "Tournament prep, psychology, advanced analysis.",
      },
    ],
  },
  {
    id: 3,
    title: "Web Development",
    image: "https://i.postimg.cc/T25Vzn4W/1.png",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle: "Web Development: Build, Design & Innovate!",
    description:
      "Web Development: Create dynamic, responsive websites with front-end design, back-end logic, and real-world projects!",
    Designation:
      "All Industrial Certified Trainers with 10+ years of experience",
    About:
      "Imagine mastering the art of building websites and web applications, developing real-world coding skills, and unlocking career opportunities with KingCompiler’s expert-curated Web Development course! Our hands-on curriculum empowers college students and adults to learn front-end, back-end, and full-stack technologies—transforming ideas into interactive digital experiences.Through practical projects and industry-relevant lessons, learners progress from basics to advanced concepts in 3 to 12 months. Our small-group approach ensures personalized guidance, helping students and professionals build a strong portfolio and confidently step into the tech world, one line of code at a time!",
    price: "Starts at $40/month",
    ageGroup: "8+",
    duration: "6 Weeks",
    format: "Live Online",
    Level: "Beginner / Intermediate / Advanced",
    learningMap: {
      description:
        "At KingCompiler, our Web Development program uses the EXPLORE – UNDERSTAND – CREATE method to turn learners into real-world builders. Students first explore how websites function, breaking down popular sites into simple elements. Then, they understand core tech like HTML, CSS, JavaScript, and responsive design. Finally, they create personal projects—websites, apps, and portfolios—boosting confidence and creativity. With live sessions, hands-on tasks, and expert guidance, students build logic, structure, and design thinking. Our curriculum is designed to make your child a Web Development Master!",
    },
    courseDetails: [
      { title: "Guided Sessions", value: "Over 6 Months" },
      { title: "Types of Batches", value: "02 (1:1 / 1:5)" },
      { title: "Countries", value: "40+" },
      { title: "Active Students", value: "3000+" },
    ],
    whatYouReceive: [
      {
        img: "https://i.postimg.cc/Vkfjtg1K/course.png",
        title: "Curriculum Highlights",
        description:
          "Students will master coding, AI, ML, Data Science, Robotics, Web/App, Game Development, and Problem-Solving.",
      },
      {
        img: "https://i.postimg.cc/VkJHMzzG/coding.png",
        title: "Work with Popular Technologies",
        description:
          "Your child will master 10+ technologies like HTML, CSS, JavaScript, Python, SQL, AI, ML, DataScience, Robotics, and more.",
      },
      {
        img: "https://i.postimg.cc/wBTgGJfB/hackathon.png",
        title: "Hackathons & Competitions",
        description:
          "Compete in our Kids' Coding Competition, creating games, websites, apps, and more to earn recognition.",
      },
      {
        img: "https://i.postimg.cc/25MjLyG8/support.png",
        title: "Practice Support",
        description:
          "Get one-click access to Assignments, and supplementary materials!",
      },
      {
        img: "https://i.postimg.cc/BZ22t6RZ/feature.png",
        title: "More Features",
        description:
          "Each month, we offer a Cyber Manner Lesson with interactive activities and real-life case studies.",
      },
      {
        img: "https://i.postimg.cc/fTLWpq74/certificate.png",
        title: "Certified Global Recognition",
        description:
          "Get Certified by kingcompiler as you progress towards the next level in Coding!",
      },
    ],
    syllabus: [
      {
        level: "Beginner",
        aim: "Perfect for kids & teens to start their journey in building websites from scratch!",
        Duration: "8 Months",
        Assignment:
          "HTML, CSS, and Basic JavaScript, Structure Web Pages, Add Styles, and Create Interaction, Build Personal Portfolio Website",
        class: "2 Sessions/Week ",
        tournament: "My First Webpage, Animated Greeting Card",
        makover: "Regular Assignments & Fun Challenges",
        maxStudents: "Max 6 Students/Batch or 1-on-1",
        missedClass: "Missed Class Recovery + Extra Help Sessions",
        assessment: "Assessment + Feedback",
        specialPractice: "Special Camp with Experts",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Intermediate",
        aim: "Advance your skills and create interactive, responsive websites!",
        Duration: "12 Months",
        Assignment:
          "Advanced HTML5, CSS3 (Flexbox, Grid), JavaScript ES6+, DOM Manipulation, Responsive Design + Mobile-Friendly Layouts, Introduction to Git & GitHub",
        class: "2 Sessions/Week ",
        tournament: "Blog Website, Responsive Portfolio, To-Do List App",
        makover: "Game Analysis + Revision Classes",
        maxStudents: "Max 6 Students/Batch or 1-on-1",
        missedClass: "Missed Class Makeover + Doubt Clearing",
        assessment: "Weekly Assessments & Code Reviews",
        specialPractice: "Special Camp with Experts",
        certificate: "Completion Certificate + GitHub Profile Setup",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Advanced",
        aim: "Build professional websites & dynamic web applications with real-time features!",
        Duration: "24 Months",
        Assignment:
          "React.js: Components, Props, State, Hooks, Backend with Node.js + Express.js, MongoDB Basics & RESTful APIs, Authentication, Routing, and JWT, Deployment with Netlify, Vercel & Render, GitHub Collaboration & CI/CD Basics",
        class: "2 Sessions/Week ",
        tournament:
          "Dynamic Portfolio with Dark Mode, Blog Website with CMS, Real-Time Chat App or Mini E-Commerce",
        makover: "Game Analysis + Revision Classes",
        maxStudents: "Max 6 Students/Batch or 1-on-1",
        missedClass: "Missed Class Makeover + Doubt Sessions",
        assessment: "Weekly Assignments + Hack Challenges",
        specialPractice: "Peer Code Reviews + Instructor Feedback",
        certificate: "Professional Certificate + GitHub Setup Help",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Master",
        aim: "Personalized learning for students serious about becoming full-stack developers",
        Duration: "Custom (Project-Based Learning)",
        Assignment:
          "Full-Stack Development (HTML, CSS, JavaScript, React.js, Node.js), Real-Time Projects + API Integration, Version Control, Hosting, and Deployment, Optional AI Add-on with TensorFlow.js",
        class: "2 Sessions/Week ",
        tournament: "E-Commerce Site, Personal Blog CMS, Real-Time Web App",
        makover: "Game Analysis + Revision Classes",
        maxStudents: "Max 4 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "1-on-1 Mentorship + Expert Instructors",
        specialPractice: "Portfolio Building + Career Guidance",
        certificate: "Certificate + LinkedIn/GitHub Portfolio Review",
        description: "Basic rules, notation, and checkmates.",
      },
    ],
  },
  {
    id: 4,
    title: "Graphics Design",
    image: "https://i.postimg.cc/439gVL31/2.png",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle:
      "Graphic Design Course: Unleash Creativity, Master Design, and Build a Visual Future!",
    description:
      "Master design fundamentals, branding, UI/UX, and digital creativity using Photoshop, Illustrator, Canva, and real-world projects! ",
    Designation:
      "All Industrial Certified Trainers with 10+ years of experience",
    About:
      "Imagine your child unleashing their creativity, mastering design tools, and building stunning visual projects with KingCompiler’s expert-curated Graphic Design curriculum! Our Online Graphic Design Classes turn every session into a vibrant journey where young minds not only learn to design—but to think like true creators.Through hands-on projects and guided mentorship, kids progress steadily over 3 to 12 months—from absolute beginners to confident designers with their own creative portfolios. Our small-group approach ensures personalized attention, nurturing imagination, skill, and a passion for visual storytelling—one design at a time!",
    price: "Starts at $29/month",
    ageGroup: "8+",
    duration: "6 Weeks",
    format: "Live Online",
    Level: "Beginner / Intermediate / Advanced",
    learningMap: {
      description:
        "At KingCompiler, our Graphic Design course empowers students to EXPLORE – UNDERSTAND – CREATE. First, they explore design in everyday life—logos, posters, websites—and learn what makes visuals stand out. Next, they understand color theory, typography, layout, and software tools like Canva, Figma, and Photoshop. Finally, they create real projects—posters, logos, social media content, and digital art portfolios. Our hands-on, project-based learning builds creativity, visual storytelling, and technical skills. With live sessions, practical tasks, and expert guidance, students develop design thinking and confidence. Our curriculum is designed to make your child a Graphic Design Master!",
    },
    courseDetails: [
      { title: "Guided Sessions", value: "Over 6 Months" },
      { title: "Types of Batches", value: "02 (1:1 / 1:5)" },
      { title: "Countries", value: "40+" },
      { title: "Active Students", value: "3000+" },
    ],
    whatYouReceive: [
      {
        img: "https://i.postimg.cc/wv9tj7jy/creative.png",
        title: "Expert-Curated Creative Curriculum",
        description:
          "Our curriculum, designed by professional graphic designers, teaches essential design principles, tools, and techniques—laying the foundation for powerful visual communication.",
      },
      {
        img: "https://i.postimg.cc/c4PV3z8Z/skill.png",
        title: "Life Skills Through Design",
        description:
          "Graphic design nurtures creativity, attention to detail, and visual storytelling—skills that enhance communication, problem-solving, and creative confidence in everyday life.",
      },
      {
        img: "https://i.postimg.cc/k5sy2HkM/time.png",
        title: "Convenience and Flexibility",
        description:
          "With our flexible online classes, learners can explore and create at their own pace—from the comfort of home, fitting easily into any schedule.",
      },
      {
        img: "https://i.postimg.cc/qBx8kZy2/lo-17.png",
        title: "Mastery of Design Tools & Techniques",
        description:
          "From beginner-friendly software like Canva to industry standards like Photoshop and Illustrator, students gain hands-on mastery of the tools used by professionals.",
      },
      {
        img: "https://i.postimg.cc/P5PZQXcM/Creativity.png",
        title: "Enhanced Creativity & Visual Thinking",
        description:
          "The course develops visual intelligence, artistic expression, and design thinking—boosting creativity and confidence across various fields.",
      },
      {
        img: "https://i.postimg.cc/fTLWpq74/certificate.png",
        title: "Certified Global Recognition",
        description:
          "Earn a certificate of completion and build a professional portfolio that can open doors to freelance gigs, internships, or further creative education worldwide.",
      },
    ],
    syllabus: [
      {
        level: "Beginner",
        aim: "Spark creativity through basic design principles and fun projects",
        Duration: "4 Months",
        Assignment:
          "Learn Canva, Color Theory & Shapes, Introduction to Layouts & Typography",
        class: "2 Sessions/Week ",
        tournament: "Poster, Logo & Flyer Designp",
        makover: "Creative Assignments & Projects",
        maxStudents: "Max 6 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Special Camps with Experts",
        specialPractice: "Portfolio Building + Career Guidance",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Intermediate",
        aim: "Build real-world design skills with industry-level tools and challenges",
        Duration: "6 Months",
        Assignment:
          " Learn Adobe Photoshop, Illustrator Basics, UI/UX Concepts & Visual Storytelling",
        class: "2 Sessions/Week ",
        tournament: " Design for Web & Print",
        makover: "Weekly Projects: Branding, Social Media Posts, Mockups",
        maxStudents: "Max 6 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Special Camps with Experts",
        specialPractice: "Portfolio Building + Career Guidance",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Advanced",
        aim: "Master digital design for portfolios, freelancing, and beyond",
        Duration: "8 Months",
        Assignment:
          "Advanced Photoshop, Illustrator, Figma, Branding & Identity Design, UI/UX Principles",
        class: "2 Sessions/Week ",
        tournament:
          "Design Systems, Branding Kits, Portfolio Projects, Creative Thinking & Art Direction",
        makover:
          "Weekly Projects: Branding, Social Media Posts, Mockups & Real Client-Based Project Simulation",
        maxStudents: "Max 4 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Special Camps with Experts",
        specialPractice: "Portfolio Building + Career Guidance",
        certificate: "Professional Certificate + Portfolio Review",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Master",
        aim: "Personalized mentorship for aspiring professional designers",
        Duration: "Custom ",
        Assignment:
          "Career-Focused Learning: UI/UX, Motion Design, Branding, Figma, After Effects, InDesign & more",
        class: "2 Sessions/Week ",
        tournament: "Work on Real Brand Briefs & Client Projects",
        makover:
          "Weekly Projects: Branding, Social Media Posts, Mockups & Real Client-Based Project Simulation",
        maxStudents: "Max 4 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "1-on-1 Mentorship + Expert Instructors",
        specialPractice: "Portfolio Building + Career Guidance",
        certificate: "Completion Certificate + Expert Feedback",
        description: "Basic rules, notation, and checkmates.",
      },
    ],
  },
  {
    id: 5,
    title: "Creative Writing",
    image: "https://i.postimg.cc/4dwsxKyC/3.png",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle:
      "Creative Writing Course: Turn thoughts into stories, and imagination into powerful words!",
    description:
      "Master design fundamentals, branding, UI/UX, and digital creativity using Photoshop, Illustrator, Canva, and real-world projects! ",
    Designation:
      "All Industrial Certified Trainers with 10+ years of experience",
    About:
      "Imagine your child weaving words into powerful stories, unlocking imagination, and mastering the art of expression with KingCompiler’s expert-curated Creative Writing Course! Our engaging sessions help young writers develop their voice, enhance language skills, and explore storytelling like true authors. Through guided writing exercises, feedback, and creative prompts, children progress over 3 to 12 months—from budding writers to confident storytellers ready to express their ideas with clarity and flair. Our small-group format ensures personalized attention, nurturing each child’s creativity, communication, and confidence—one word at a time!",
    price: "Starts at $29/month",
    ageGroup: "8+",
    duration: "6 Weeks",
    format: "Live Online",
    Level: "Beginner / Intermediate / Advanced",
    learningMap: {
      description:
        "At KingCompiler, our Creative Writing program guides students through the EXPLORE – UNDERSTAND – CREATE method. Kids start by exploring storytelling fundamentals through fun prompts and relatable themes. Then they understand key elements like vocabulary, grammar, structure, tone, and style across genres—narratives, poetry, essays, and dialogues. Finally, they create impactful pieces, publishing stories, journals, and poems with confidence. This course strengthens language skills, imagination, and self-expression, while building a portfolio they’ll be proud of. With live sessions, engaging tasks, and expert feedback, students develop writing skills and confidence. Our curriculum is designed to make your child a Creative Writing Master!",
    },
    courseDetails: [
      { title: "Guided Sessions", value: "Over 6 Months" },
      { title: "Types of Batches", value: "02 (1:1 / 1:5)" },
      { title: "Countries", value: "40+" },
      { title: "Active Students", value: "3000+" },
    ],
    whatYouReceive: [
      {
        img: "https://i.postimg.cc/qB2dg2vs/lo-20.png",
        title: "60+ Assignments & Journal Writing for Enhanced Expression",
        description:
          "Through journal writing and assignments, students enhance creative expression, writing fluency, and thought organization.",
      },
      {
        img: "https://i.postimg.cc/LXY6p8hf/lo-21.png",
        title: " Life Skills Through Writing",
        description:
          "Creative writing fosters imagination, clarity of thought, empathy, and communication—skills that go beyond the page and empower your child in academics and life.",
      },
      {
        img: "https://i.postimg.cc/j5KZVLM3/lo-22.png",
        title: "Hands-On Practice",
        description:
          "Students engage in brainstorming, drafting, and revising to apply techniques, and refine their unique writing skills.",
      },
      {
        img: "https://i.postimg.cc/nhpmNKC0/lo-23.png",
        title: " Mastery of Writing Styles & Techniques",
        description:
          "Students evolve from basic sentence structure to writing compelling stories, blogs, poems, and articles with proper grammar, tone, and expression.",
      },
      {
        img: "https://i.postimg.cc/FKKLH9bS/lo-24.png",
        title: "Enhanced Creativity & Critical Thinking",
        description:
          "Writing sharpens imagination, develops critical analysis, and boosts confidence in expressing ideas—skills valuable across all areas of learning.",
      },
      {
        img: "https://i.postimg.cc/fTLWpq74/certificate.png",
        title: "Certified Global Recognition",
        description:
          "Receive a globally recognized certificate upon course completion—boosting academic profiles and preparing students for future writing opportunities.",
      },
    ],
    syllabus: [
      {
        level: "Beginner",
        aim: "For young minds beginning their storytelling journey",
        Duration: "4 Months",
        Assignment: "Write Stories, Poems & Fun Prompts",
        class: "2 Live Classes/Week",
        tournament: "Illustrated Story Projects",
        makover: "Weekly Writing Challenges & Feedback",
        maxStudents: "Max 6 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Story Reading Days with Coach",
        specialPractice: "Monthly Reviews & Feedback",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Intermediate",
        aim: "For children writing essays, poems, or school journals",
        Duration: "6 Months",
        Assignment: "Advanced Prompts, Editing Skills & Poetry Forms",
        class: "2 Live Classes/Week ",
        tournament: "Writing Journals + Reading Assignments",
        makover: "Creative Exercises + Writing Labs",
        maxStudents: "Max 6 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Coach-Led Workshops & Feedback Circles",
        specialPractice: "Monthly Feedback & Growth Reports",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Advanced",
        aim: "For kids ready to write blogs, short stories & compete in contests",
        Duration: " 8 Months",
        Assignment:
          "Character Building, Story Arcs & Voice, Genre Writing: Fantasy, Mystery, Drama, etc.",
        class: "2 Live Classes/Week ",
        tournament: "Monthly Publication Projects",
        makover: "Creative Exercises + Writing Labs",
        maxStudents: "Max 6 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment:
          "Peer Reviews + Group Discussions & Special Mentorship Sessions",
        specialPractice: "Monthly Feedback & Growth Reports",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Master",
        aim: "Personalized mentorship for young authors & competition writers",
        Duration: "Customizable",
        Assignment:
          "Author Mindset + Deep Story Structure, Advanced Editing & Critique, Genre Mastery: Fiction, Non-Fiction, Poetry",
        class: "2 Live Classes/Week ",
        tournament: "Real Publishing Projects + Manuscript Prep",
        makover: "Creative Exercises + Writing Labs",
        maxStudents: "Max 6 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Guidance for Competitions & Publishing + Peer Reviews",
        specialPractice: "Advanced Editing & Coaching Reviews",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
    ],
  },
  {
    id: 6,
    title: "Art & Craft",
    image: "https://i.postimg.cc/SsmVGRrx/4.png",
    videoUrl: "https://www.youtube.com/embed/lxIFwQ6GaZI?si=BGvJwBsXLScgEZqU",
    desctitle:
      "Art & Craft Course: Spark Imagination, Create Freely, and Bring Ideas to Life!",
    description:
      "Master design fundamentals, branding, UI/UX, and digital creativity using Photoshop, Illustrator, Canva, and real-world projects! ",
    Designation: "All are Artist with 10+ years of experience in Teaching",
    About:
      "Imagine your child diving into a world of colors, creativity, and imagination with KingCompiler’s expert-designed Art & Craft Course! From painting and drawing to DIY crafts and design projects, every session is crafted to spark joy and artistic expression while developing focus, fine motor skills, and self-confidence.Through hands-on activities and guided creativity, children progress over 3 to 12 months—from curious beginners to confident creators with a unique artistic voice. Our small-group format ensures personalized attention, encouraging each child to explore their ideas, build a creative portfolio, and fall in love with the world of art—one brushstroke at a time!",
    price: "Starts at $29/month",
    ageGroup: "8+",
    duration: "6 Weeks",
    format: "Live Online",
    Level: "Beginner / Intermediate / Advanced",
    learningMap: {
      description:
        "At KingCompiler, our Art & Craft program follows the EXPLORE – UNDERSTAND – CREATE learning path. Kids begin by exploring colors, textures, and shapes through fun hands-on projects. They then understand key art concepts like composition, balance, perspective, and technique, while discovering famous artists and diverse art styles. Finally, they create their own masterpieces—from sketches and paintings to paper crafts and mixed media. This course nurtures creativity, fine motor skills, and self-expression, while building a portfolio they’ll be proud of. With live sessions, engaging tasks, and expert feedback, students develop artistic skills and confidence. Our curriculum is designed to make your child an Art & Craft Master!",
    },
    courseDetails: [
      {
        title: "Guided Sessions",
        value: "96",
        desc: "over 12 Months",
      },
      {
        title: "Types of Batches",
        value: "03",
        desc: "(1:1 / 1:2 or 1:5)",
      },
      { title: "Countries", value: "40+" },
      { title: "Active Students", value: "3000+" },
    ],
    whatYouReceive: [
      {
        img: "https://i.postimg.cc/90s48QPL/lo-26.png",
        title: "90+ Artworks",
        description:
          "Learners will create 80+ unique artworks, showcasing their skills and creativity through a structured, progressive curriculum.",
      },
      {
        img: "https://i.postimg.cc/MKBnfcv3/lo-25.png",
        title: "7+ Mediums to Explore",
        description:
          "Learners gain hands-on experience with over 7 mediums like color pencils, oil pastels, poster colors, and more.",
      },
      {
        img: "https://i.postimg.cc/RZ3p8zyM/lo-27.png",
        title: "Guided Learning Support",
        description:
          "Stay connected with teachers via dashboard, get personalized feedback, track level-wise progress with detailed reports!",
      },
      {
        img: "https://i.postimg.cc/9fk8M9yx/lo-28.png",
        title: "Conceptual Learning",
        description:
          "Covering 60+ foundational concepts, learners build their art vocabulary to portray their creative ideas with clarity & confidence.",
      },
      {
        img: "https://i.postimg.cc/DZF9FLht/lo-29.png",
        title: "Challenge Yourself",
        description:
          "Participate in theme-based competitions to apply your learning and showcase your skills!",
      },
      {
        img: "https://i.postimg.cc/fTLWpq74/certificate.png",
        title: "Creative Portfolio & Recognition",
        description:
          "Students build a personal portfolio and receive certificates recognizing their creative achievements and artistic growth.",
      },
    ],
    syllabus: [
      {
        level: "Beginner",
        aim: "For kids exploring colors, shapes, and creative fun",
        Duration: "4 Months",
        Assignment: "Drawing, Paper Craft, Clay Art & More",
        class: "2 Live Hands-on Sessions/Week ",
        tournament:
          "Fun Projects & Imagination Boosters + Art Folder for Each Student",
        makover: "Weekly Challenges: Artwork, DIY Crafts & Fun Projects",
        maxStudents: "Max 6 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Theme Days (Seasons, Festivals, Nature)",
        specialPractice: "Monthly Art Review & Encouragement",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Intermediate",
        aim: "For budding artists building skill & expression",
        Duration: "6 Months",
        Assignment:
          " Sketching, Collage, Mixed Media, DIY Crafts, Creative Techniques + Color Theory& Composition",
        class: "2 Live Hands-on Sessions/Week ",
        tournament:
          "Fun Projects & Imagination Boosters + Personal Art Journal",
        makover: "Weekly challenges: Artwork, DIY Crafts & Fun Projects",
        maxStudents: "Max 6 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Mini Exhibitions & Theme Projects",
        specialPractice: "Monthly Feedback & Art Growth Report",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Advanced",
        aim: "For serious young artists ready to dive deeper",
        Duration: "8 Months",
        Assignment:
          " Perspective Drawing, Shading, Watercolor & Canvas Work, Advanced Techniques + Art History & Styles",
        class: "2 Live Hands-on Sessions/Week ",
        tournament: "Art History + Style Exploration + Personal Art Journal",
        makover: "Weekly challenges: Artwork, DIY Crafts & Fun Projects",
        maxStudents: "Max 6 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Art Showcases & Thematic Challenges",
        specialPractice: "Detailed Art Reviews + Mentorship",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
      {
        level: "Master",
        aim: "Personalized track for passionate, portfolio-ready young artists",
        Duration: "Customizable",
        Assignment:
          "Advanced Media: Acrylic, Inks, Sculpting, etc., Portfolio Development, Art History & Styles, Personal Projects",
        class: "2 Live Hands-on Sessions/Week ",
        tournament:
          "1:1 Mentorship & Concept-Based Projects + Professional Portfolio Creation",
        makover: "Weekly challenges: Artwork, DIY Crafts & Fun Projects",
        maxStudents: "Max 4 Students or 1-on-1",
        missedClass: "Missed Class Makeover",
        assessment: "Support for Competitions & Art Showcases",
        specialPractice: "Critique Sessions & Exhibition Planning",
        certificate: "Certificate after Completion",
        description: "Basic rules, notation, and checkmates.",
      },
    ],
  },
];
