import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faExternalLinkAlt, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
    faJs, faHtml5, faCss3Alt, faPython, faJava, faReact,
    faNodeJs, faBootstrap, faAws, faGit, faGithub, faGitlab, faJira, faFigma, faWordpress, faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { Modal, Button, Carousel, Container, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import scrollama from 'scrollama';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

// FontAwesome Icons
import { faDatabase, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Simple Icons
import { SiAmazonalexa, SiGradle, SiAndroidstudio, SiMysql, SiJsdelivr, SiGooglefonts, SiFontawesome, SiJson, SiNumpy, SiPandas, SiAmazoncloudwatch, SiSqlite, SiTypescript, SiAmazons3, SiAmazonapigateway, SiLucid, SiMui, SiChartdotjs, SiAwslambda, SiPostman, SiSequelize, SiAxios, SiPostgresql, SiD3Dotjs, SiFlask, SiTailwindcss, SiDassaultsystemes, SiKotlin, SiCplusplus, SiExpress, SiJquery, SiPlotly } from 'react-icons/si';

// SVG icons
import { ReactComponent as AlexaIcon } from '../svgs/alexa.svg';
import { ReactComponent as MathworksIcon } from '../svgs/mathworks.svg';

// Skills array with details of each skill icon
const skills = [
    { name: 'JavaScript', icon: faJs, type: 'fontawesome' },
    { name: 'HTML', icon: faHtml5, type: 'fontawesome' },
    { name: 'CSS', icon: faCss3Alt, type: 'fontawesome' },
    { name: 'SQL', icon: faDatabase, type: 'fontawesome' },
    { name: 'Python', icon: faPython, type: 'fontawesome' },
    { name: 'TypeScript', icon: SiTypescript, type: 'simpleicon' },
    { name: 'Java', icon: faJava, type: 'fontawesome' },
    { name: 'Alexa APL', icon: SiAmazonalexa, type: 'simpleicon' },
    { name: 'MATLAB', icon: MathworksIcon, type: 'mathworks' },
    { name: 'Kotlin', icon: SiKotlin, type: 'simpleicon' },
    { name: 'C++', icon: SiCplusplus, type: 'simpleicon' },
    { name: 'JSON', icon: SiJson, type: 'simpleicon' },
    { name: 'React.js', icon: faReact, type: 'fontawesome' },
    { name: 'React Native', icon: faReact, type: 'fontawesome' },
    { name: 'Node.js', icon: faNodeJs, type: 'fontawesome' },
    { name: 'Bootstrap', icon: faBootstrap, type: 'fontawesome' },
    { name: 'Axios', icon: SiAxios, type: 'simpleicon' },
    { name: 'Express.js', icon: SiExpress, type: 'simpleicon' },
    { name: 'Scrollama.js', icon: faTools, type: 'fontawesome' },
    { name: 'Material UI', icon: SiMui, type: 'simpleicon' },
    { name: 'Chart.js', icon: SiChartdotjs, type: 'simpleicon' },
    { name: 'Timeline.js', icon: SiJsdelivr, type: 'simpleicon' },
    { name: 'Numpy', icon: SiNumpy, type: 'simpleicon' },
    { name: 'Pandas', icon: SiPandas, type: 'simpleicon' },
    { name: 'jQuery', icon: SiJquery, type: 'simpleicon' },
    { name: 'Alexa Skills Kit', icon: AlexaIcon, type: 'alexa' },
    { name: 'Sequelize', icon: SiSequelize, type: 'simpleicon' },
    { name: 'Gradle', icon: SiGradle, type: 'simpleicon' },
    { name: 'RESTful APIs', icon: SiAmazonapigateway, type: 'simpleicon' },
    { name: 'Plotly.js', icon: SiPlotly, type: 'simpleicon' },
    { name: 'D3.js', icon: SiD3Dotjs, type: 'simpleicon' },
    { name: 'Tailwind', icon: SiTailwindcss, type: 'simpleicon' },
    { name: 'Flask', icon: SiFlask, type: 'simpleicon' },
    { name: 'Lambda', icon: SiAwslambda, type: 'simpleicon' },
    { name: 'Cloudwatch', icon: SiAmazoncloudwatch, type: 'simpleicon' },
    { name: 'S3', icon: SiAmazons3, type: 'simpleicon' },
    { name: 'pgAdmin', icon: SiPostgresql, type: 'simpleicon' },
    { name: 'PostgreSQL', icon: SiPostgresql, type: 'simpleicon' },
    { name: 'Android Studio', icon: SiAndroidstudio, type: 'simpleicon' },
    { name: 'Git', icon: faGit, type: 'fontawesome' },
    { name: 'Github', icon: faGithub, type: 'fontawesome' },
    { name: 'Gitlab', icon: faGitlab, type: 'fontawesome' },
    { name: 'SQLite', icon: SiSqlite, type: 'simpleicon' },
    { name: 'MySQL', icon: SiMysql, type: 'simpleicon' },
    { name: 'Alexa Dev Cons.', icon: AlexaIcon, type: 'alexa' },
    { name: 'AWS', icon: faAws, type: 'fontawesome' },
    { name: 'Figma', icon: faFigma, type: 'fontawesome' },
    { name: 'Lucidchart', icon: SiLucid, type: 'simpleicon' },
    { name: 'Postman', icon: SiPostman, type: 'simpleicon' },
    { name: 'Jira', icon: faJira, type: 'fontawesome' },
    { name: 'SolidWorks', icon: SiDassaultsystemes, type: 'simpleicon' },
    { name: 'Google Fonts', icon: SiGooglefonts, type: 'simpleicon' },
    { name: 'FontAwesome', icon: SiFontawesome, type: 'simpleicon' },
    { name: 'WordPress', icon: faWordpress, type: 'fontawesome' }
].sort((a, b) => a.name.localeCompare(b.name));

// Portfolio array with project details
const portfolio = [
    {
        name: 'Holios',
        color: 'rgb(1, 14, 89)',
        image: process.env.PUBLIC_URL + './holios/holios_profile.png',
        description: 'A portal for connected technology companies to track usage statistics and production log data.',
        fullDescription: 'At Bluefin, I developed the Holios productization which is divided into the production and analytics portals. The production portal allows companies to manage their products and import CSV production logs for comprehensive analyses of their production log statistics. The analytics portal displays different visualizations based on device data and are displayed in intuitive graphs - such as voice commands vs physical commands, usage by day of week, and total devices online by month. You can view visualizations by DSN and compare visualizations across different skus, and use a ChatGPT query tool for custom database queries. Find more info at <a target="_blank" href="https://www.holios.io/">holios.io/</a>. The website is live at <a target="_blank" href="https://app.holios.io/">app.holios.io/</a>, however you need to register an account with Holios to access the entire site.',
        gallery: [process.env.PUBLIC_URL + './holios/gallery/dashboard.png', process.env.PUBLIC_URL + './holios/gallery/comparisons.png', process.env.PUBLIC_URL + './holios/gallery/prod_line_sum.png', process.env.PUBLIC_URL + './holios/gallery/query_tool.png', process.env.PUBLIC_URL + './holios/gallery/devices.png', process.env.PUBLIC_URL + './holios/gallery/prod_line_sum.png', process.env.PUBLIC_URL + './holios/gallery/company_create.png'],
        link: 'https://holios.io',
        skills: ['React.js', 'Bootstrap', 'Chart.js', 'Sequelize', 'HTML', 'CSS', 'JavaScript', 'pgAdmin', 'S3']
    },
    {
        name: 'FLEXTRACK',
        color: 'rgb(240, 93, 52)',
        image: process.env.PUBLIC_URL + './flextrack/flextrack_profile.png',
        description: 'A comprehensive fitness tracking web application, helping users via fitness progress tracking, fitness challenges, and social features.',
        fullDescription: 'FLEXTRACK is a comprehensive fitness tracking web application created for my team\'s final project for our Database Management Systems class (CS542) at WPI in Spring 2024. This application helps users track their fitness progress, manage their workout plans, participate in fitness challenges, and engage with other fitness enthusiasts. The app features workout tracking, challenges, social posts, customizable profiles, and a user dashboard, using a tech stack that includes React.js, Axios, Bootstrap, TypeScript, Express, and SQLite. Future development plans include full OAuth integration, enhanced metrics, AI-generated recommendations, and expanded mobile support.',
        gallery: [process.env.PUBLIC_URL + './flextrack/gallery/dashboard.png', process.env.PUBLIC_URL + './flextrack/gallery/welcome.png', process.env.PUBLIC_URL + './flextrack/gallery/ppl.png', process.env.PUBLIC_URL + './flextrack/gallery/checking.png', process.env.PUBLIC_URL + './flextrack/gallery/mockup.png', process.env.PUBLIC_URL + './flextrack/gallery/erd.png',],
        link: 'https://github.com/cscopetski/CS542-Project',
        skills: ['React.js', 'SQLite', 'Bootstrap', 'Axios', 'CSS', 'Google Fonts', 'FontAwesome']
    },
    {
        name: 'DVL',
        color: 'rgb(140, 60, 60)',
        image: process.env.PUBLIC_URL + './dvl/dvl_profile.png',
        description: 'A mobile-first data visualization literacy platform based off of the data visualization literacy test for my major qualifying project.',
        fullDescription: 'The DVL is a Data Visualization Literacy tool created as my group\'s Major Qualifying Project at WPI, advised by Professor Lane Harrison. It addresses the need for accessible data visualization education by creating a mobile application that provides flexible, engaging lessons on common and complex visualizations. The app incorporates interactive modules, gamification, and immediate feedback, and is inspired by platforms like Khan Academy and Duolingo. Optimized for mobile use, it features clear visualizations and intuitive navigation, helping users critically understand and evaluate data. I contributed prominently in the frontend development of the application using React Native, React Native Paper, and TypeScript. The repository can be found at <a target="_blank" href="https://github.com/wpivis/mqp-DataSight">this link</a>, and we also wrote a paper "Building a Platform for Data Visualization Literacy" that can be found at the link below.',
        gallery: [process.env.PUBLIC_URL + './dvl/gallery/dashboard.png', process.env.PUBLIC_URL + './dvl/gallery/lesson.png', process.env.PUBLIC_URL + './dvl/gallery/structure.png'],
        link: 'https://digitalwpi.wpi.edu/concern/student_works/tb09j979j?locale=en',
        skills: ['React Native', 'TypeScript', 'CSS', 'D3.js', 'MaterialUI']
    },
    {
        name: 'Sentizard',
        color: 'rgb(0, 172, 238)',
        image: process.env.PUBLIC_URL + './sentizard/sentizard_profile.png',
        description: 'A sentiment analysis wizard built off of twitter data, utilizing multiple machine learning models and comparing their accuracy.',
        fullDescription: 'The Sentizard website allows the user to enter a prompt in the entry box and dynamically analyze the phrase and display results interactively. My team\'s models were trained and tested on a dataset of 1.6 million tweets from Kaggle, which was pre-processed by converting all characters to lowercase, removing stop words, and replacing URLs and usernames with placeholders. We used Word2Vec to vectorize the tweets, enabling the SVM to classify data by finding the best dividing hyperplane. PCA was utilized to visualize the SVM\'s decision boundary by reducing the dataset\'s dimensions. For more advanced analysis, we employed LSTM networks to handle long-term dependencies and C-LSTM models to combine the strengths of CNNs and LSTMs. I connected the frontend and backend of the project using Flask to interface between our HTML and Python code.',
        gallery: [process.env.PUBLIC_URL + './sentizard/gallery/model.png', process.env.PUBLIC_URL + './sentizard/gallery/accuracy.png', process.env.PUBLIC_URL + './sentizard/gallery/results.png'],
        link: 'https://sentizard.s3.amazonaws.com/Sentizard_Website.html#',
        skills: ['Javascript', 'Chart.js', 'HTML', 'Python', 'Numpy', 'Flask']
    },
    {
        name: 'Râșnov Creativ',
        color: 'rgb(144, 105, 173)',
        image: process.env.PUBLIC_URL + './rasnov_creativ/rasnov_creativ_profile.webp',
        description: 'A website for the Râșnov Creativ directiv in Râșnov, Romania, highlighting local artisans and their creations and helping them to build a community.',
        fullDescription: 'For my International Qualifying Project (IQP) at WPI, my team worked with the Mioritics Association in Rasnov, Romania to create the website for the Rasnov Creativ project. The goal of Rasnov Creativ is to create a community of artisans to network and grow their crafts together. While staying in the nation\'s capital of Bucharest, we analyzed the needs of the local producers and the wants of consumers through data collection via surveys and in-person interviews. We created our final website using WordPress and Tailwind CSS, which can be found at <a target="_blank" href="https://www.rasnovcreativ.ro">rasnovcreativ.ro</a>. Our final written report on the experience can be found at <a target="_blank" href="https://digital.wpi.edu/concern/student_works/z316q500r?locale=en">digital.wpi.edu/concern/student_works/z316q500r?locale=en</a>',
        gallery: [process.env.PUBLIC_URL + './rasnov_creativ/gallery/showcase.jpg', process.env.PUBLIC_URL + './rasnov_creativ/gallery/dashboard.png', process.env.PUBLIC_URL + './rasnov_creativ/gallery/explanation.png', process.env.PUBLIC_URL + './rasnov_creativ/gallery/rasnov.jpeg'],
        link: 'https://rasnovcreativ.ro/',
        skills: ['WordPress', 'Figma', 'Tailwind']
    },
    {
        name: 'Lucidum Alexa Skill',
        color: 'rgb(30, 0, 15)',
        image: process.env.PUBLIC_URL + './lucidum/lucidum_profile.png',
        description: 'An Alexa Skill for Lucidum cybersecurity that queries their database to inform the user about network vulnerabilities.',
        fullDescription: 'As an employee at Bluefin Technology Partners, I was contracted by Lucidum to create an Alexa Skill for their service. Lucidum integrates their software into their clients\' existing platforms to expose network and cybersecurity vulnerabilities. My job was to create an Alexa application that would dynamically query their database to retrieve user statistics and report it via Alexa voice. I delivered a product that fulfilled Lucidum\'s specifications, and the skill is now being used by Lucidum\'s marketing team.',
        gallery: [process.env.PUBLIC_URL + './lucidum/gallery/lucidum.png'],
        link: null,
        skills: ['Alexa Dev Cons.', 'RESTful APIs', 'Python', 'Alexa Skills Kit']
    },
    {
        name: 'Global Military Spending',
        color: 'rgb(42, 69, 49)',
        image: process.env.PUBLIC_URL + './military_spending/military_spending_profile.png',
        description: 'A webpage with a timespan of 60 years that displays major world conflicts and events and how they affected military spending in log base 10.',
        fullDescription: 'The Global Military Spending Timeline enables users to interact with military spending data trends for specific countries during significant global events. We use interactive visualizations and Timeline.js to allow users to explore events from 1960 to 2022 and their impacts on military expenditures. Users can navigate through the timeline and view a dynamically updated graph that displays military spending trends before, during, and after these events. Our evaluation showed that the tool effectively highlights reactive spending trends and differences between countries by displaying data in log_10.',
        gallery: [process.env.PUBLIC_URL + './military_spending/gallery/everything.png', process.env.PUBLIC_URL + './military_spending/gallery/oil.png', process.env.PUBLIC_URL + './military_spending/gallery/collapse.png'],
        link: 'https://lfoley7.github.io/Surprise_Map_Scrollytelling_World_Data/',
        skills: ['D3.js', 'Timeline.js', 'JavaScript', 'HTML', 'CSS', 'Python']
    },
    {
        name: 'MediStore',
        color: 'rgb(204, 17, 20)',
        image: process.env.PUBLIC_URL + './medistore/medistore_profile.png',
        description: 'A web interface for a medication storage system that retrieves objects and alerts the user when their medication is low.',
        fullDescription: 'MediStore is a project created by the Beta Theta Pi team at WPI 2024 GoatHacks Hackathon. The invention is a 3D-modeled medicine cabinet, that automatically retrieves a user\'s medication from the cabinet via a web interface. I was responsible for the creation of the website and much of the CAD modeling. The website features a dashboard for users to monitor their medications, a "medications" page for users to monitor whether they need a refill and when to take their medication, and an analytics page for doctors to monitor their patients\' progress. Our project won an honorable mention at the GoatHacks competition, and I won enough Celsius Energy drinks to give me a temporary caffeine addiction.',
        gallery: [process.env.PUBLIC_URL + './medistore/gallery/dashboard.png', process.env.PUBLIC_URL + './medistore/gallery/medication.png', process.env.PUBLIC_URL + './medistore/gallery/analytics.png'],
        link: 'https://github.com/lfoley7/MediStore',
        skills: ['React', 'AWS Lambda', 'MySQL', 'SolidWorks', 'Chart.js', 'Bootstrap', 'HTML', 'CSS']
    },
    {
        name: 'MyGymBuddy',
        color: 'rgb(55, 0, 179)',
        image: process.env.PUBLIC_URL + './mygymbuddy/mygymbuddy_profile.png',
        description: 'A Kotlin application that analyzes a user\'s form using Android MLKit for the "Big Four" lifts and other popular exercises.',
        fullDescription: 'MyGymBuddy is an Android app designed to help athletes improve their form at the gym. It uses the camera to track users\' movements and provide feedback to improve their form. The accelerometer assists the user in placing the phone in the correct location for best camera tracking. It features a log of all workouts performed, and a graph showing progress through reps over time, as well as a rep counter that only counts reps of exercises when the form is not considered unsafe. This app was built in a team of 5 using Android ML Kit and Android Studio.',
        gallery: [process.env.PUBLIC_URL + './mygymbuddy/gallery/position.png', process.env.PUBLIC_URL + './mygymbuddy/gallery/screens.png', process.env.PUBLIC_URL + './mygymbuddy/gallery/sidenav.png', process.env.PUBLIC_URL + './mygymbuddy/gallery/joints.jpg'],
        link: 'https://github.com/Mark-Renzi/ubicomp-final',
        skills: ['Kotlin', 'Android Studio', 'Gradle', 'XML']
    },
    {
        name: 'Sharpify',
        color: 'rgb(57, 78, 97)',
        image: process.env.PUBLIC_URL + './sharpify/sharpify_profile.png',
        description: 'An image sharpening tool that takes an image and uses API calls to "sharpify" the image, which is stored in a databade for the user to retrieve later.',
        fullDescription: 'Sharpify is a React application that was built as my team\'s final project for CS4731 Webware. The web app acts as an interface for an image sharpening API. Users can log in to their saved accounts and sharpen their images, as well as view their past sharpened images, which are retrieved from a firebase database. ',
        gallery: [process.env.PUBLIC_URL + './sharpify/gallery/login.png', process.env.PUBLIC_URL + './sharpify/gallery/sharpify.png'],
        link: 'https://github.com/dovushman/cs4241-final-project',
        skills: ['React', 'RESTful APIs', 'Bootstrap', "JavaScript", "HTML", "CSS"]
    },
    {
        name: 'Wharfside Alexa Skill',
        color: 'rgb(28, 92, 114)',
        image: process.env.PUBLIC_URL + './wharfside/wharfside_profile.png',
        description: 'An Alexa Skill for Wharfside Watersports of the British Virgin Islands that informs users about rental options, prices, location, and general company info.',
        fullDescription: 'As my first project at Bluefin, I created an Alexa app for Wharfside Watersports of the US Virgin Islands. The app gives users info on the company\'s rentals, location, and FAQs. We also made a spin-off skill that quizzes users on company info. Both skills utilize Alexa APL to create dynamic user interfaces and utilize sound effects. Both skills are published to the Alexa Skill Store.',
        gallery: [process.env.PUBLIC_URL + './wharfside/wharfside_profile.png'],
        link: 'https://www.amazon.com/Bluefin-Technology-Partners-Island-Watersports/dp/B0B63SX65Q/ref=sr_1_1?crid=39NZQCTVD0Q8V&dib=eyJ2IjoiMSJ9.t34SrNtlGaDeNf8G20d9_A.YFN5DsJJvzr9LTlnyGFhXWBUnmMETaQvK_xyt6S-_KM&dib_tag=se&keywords=island+watersports&qid=1721701885&s=digital-skills&sprefix=island+watersport%2Calexa-skills%2C105&sr=1-1',
        skills: ['Alexa Devloper Console', 'Alexa Skills Kit', 'APL', 'JavaScript', 'RESTful APIs']
    },
    {
        name: 'Beta Theta Pies',
        color: 'rgb(1, 14, 89)',
        image: process.env.PUBLIC_URL + './beta_theta_pies/beta_theta_pies_profile.png',
        description: 'A website for Beta Theta Pi\'s annual pizza philanthropy, allowing users to customize and submit their orders, and the fraternity to manage pizzas.',
        fullDescription: 'Beta Theta Pies is an annual philanthropy run by my fraternity where we sell pizza pies for donations to ACE Worcester. I created a website from my fraternity to use to collect orders. Users can fill their information into the form and use the custom pizza tool to add toppings. Users can also view all pizza orders and the details about the order.',
        gallery: [process.env.PUBLIC_URL + './beta_theta_pies/gallery/dashboard.png', process.env.PUBLIC_URL + './beta_theta_pies/gallery/maker.png', process.env.PUBLIC_URL + './beta_theta_pies/gallery/orders.png'],
        link: 'https://a2-lukefoley.glitch.me/all_orders.html',
        skills: ['JavaScript', 'HTML', 'CSS', 'SQL', 'Bootstrap']
    },
    {
        name: 'Conway\'s Game of Life',
        color: 'rgb(137, 164, 191)',
        image: process.env.PUBLIC_URL + './conway/conway_profile.png',
        description: 'An implementation of Conway\'s Game of Life, with dynamic resizing of the board, color selectiong, and tick speed customization.',
        fullDescription: 'This is a recreation of John Conway\'s Game of life. It uses dynamic inputs to recolor and resize the board, as well as manipulate the tick speed of the game. Users can input their own patterns and start the game to watch the algorithm work!',
        gallery: [process.env.PUBLIC_URL + './conway/gallery/pattern.png'],
        link: 'https://a4-lukefoley.glitch.me/',
        skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
        name: 'Theatre Carpentry',
        color: 'rgb(87, 38, 20)',
        image: process.env.PUBLIC_URL + './carpentry/carpentry_profile.jpg',
        description: 'I lead multiple carpentry projects as a theatre carpenter for the WPI theatre clubs and as an employee and TA for Scenic Design 420X in the Alden Hall woodshop.',
        fullDescription: 'Over my 4 years at WPI, I was very active in theatre carpentry in multiple organizations. I was responsible for the set design, lumber ordering, and set construction while in charge of large carpentry teams, while working on shows such as Dogfight, Urinetown, and Bonnie and Clyde. I also helped the Theatre department by being the Teacher\'s Assistant for TH3510 Scenic Design and Fabrication, ensuring that tools were used in a safe manner and assisting the class in constructing the set. I eventually was employed by the department\'s student team "Squad" to facilitate productions. I also has the honor of being inducted into the Alpha Psi Omega Theatre Honors fraternity.',
        gallery: [process.env.PUBLIC_URL + './carpentry/gallery/dogfight.jpg', process.env.PUBLIC_URL + './carpentry/gallery/urinetown.jpg', process.env.PUBLIC_URL + './carpentry/gallery/cabaret.jpg', process.env.PUBLIC_URL + './carpentry/gallery/sense.jpg', process.env.PUBLIC_URL + './carpentry/gallery/ppt.jpg', process.env.PUBLIC_URL + './carpentry/gallery/squad.jpeg',],
        link: null,
        skills: ['SolidWorks']
    },
    {
        name: 'Beta Programming Chair',
        color: 'rgb(0, 47, 108)',
        image: process.env.PUBLIC_URL + './prog/prog_profile.jpg',
        description: 'My achievements as Beta\'s Programming Chairman, raising almost $4000 for philanthropy and growing Beta as a social organization.',
        fullDescription: 'As Beta\'s Programming Chairman for a year and a half, I made many achievements for my fraternity. I ran our quarterly philanthropies, such as Beta Theta Fries, Beta Theta Pies, and Beta Clue to raise almost $4000 for African Community Education Worcester. I also ran two formals, being in charge of transportation, food and drinks, invitations, and the venue. I also ran our socials with other organizations and interfaced with the broader campus community. In addition, I ran our community service events, where we cleaned beaches, the streets of Worcester, traveled to soup kitchens, and completed projects for the Worcester YMCA.',
        gallery: [process.env.PUBLIC_URL + './prog/gallery/initiation.jpg', process.env.PUBLIC_URL + './prog/gallery/group.jpg', process.env.PUBLIC_URL + './prog/gallery/misha.jpg', process.env.PUBLIC_URL + './prog/gallery/fries.jpg', process.env.PUBLIC_URL + './prog/gallery/malibu.jpg',],
        link: null,
        skills: ['']
    }
];

// Home component containing the main content of the homepage
function Home() {
    const [modalShow, setModalShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // useEffect to handle scroll animations and parallax effects
    useEffect(() => {
        const scroller = scrollama();
        scroller
            .setup({
                step: '.portfolio-wrapper',
                offset: 0.75,
                debug: false
            })
            .onStepEnter((response) => {
                const element = response.element;
                element.classList.add('visible');
            });

        // Function to handle window resize event
        const handleResize = () => {
            scroller.resize();
        };

        let ticking = false;

        // Function to handle window scroll event
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                    const intro = document.querySelector('.intro');
                    const projectsWrapper = document.querySelector('.projects-wrapper');
                    const skillsWrapper = document.querySelector('.skills-wrapper');

                    if (intro) {
                        const introHeight = intro.offsetHeight;
                        const introScrollFraction = scrollTop / introHeight;
                        const introBackgroundPositionY = introScrollFraction * 50;
                        intro.style.backgroundPositionY = `${introBackgroundPositionY}%`;
                    }

                    if (projectsWrapper) {
                        const projectsWrapperRect = projectsWrapper.getBoundingClientRect();
                        const projectsWrapperHeight = projectsWrapper.offsetHeight;
                        const startParallax = projectsWrapperRect.top + scrollTop - window.innerHeight;
                        const endParallax = projectsWrapperRect.top + scrollTop + projectsWrapperHeight;
                        if (scrollTop >= startParallax && scrollTop <= endParallax) {
                            const scrollFraction = (scrollTop - startParallax) / (endParallax - startParallax);
                            const backgroundPositionY = scrollFraction * 100;
                            projectsWrapper.style.backgroundPositionY = `${backgroundPositionY}%`;
                        }
                    }

                    if (skillsWrapper) {
                        const skillsWrapperRect = skillsWrapper.getBoundingClientRect();
                        const skillsWrapperHeight = skillsWrapper.offsetHeight;
                        const startParallax = skillsWrapperRect.top + scrollTop - window.innerHeight;
                        const endParallax = skillsWrapperRect.top + scrollTop + skillsWrapperHeight;
                        if (scrollTop >= startParallax && scrollTop <= endParallax) {
                            const scrollFraction = (scrollTop - startParallax) / (endParallax - startParallax);
                            const backgroundPositionY = scrollFraction * 100;
                            skillsWrapper.style.backgroundPositionY = `${backgroundPositionY}%`;
                        }
                    }

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        handleScroll();

        setTimeout(() => {
            document.querySelector('.intro-image').classList.add('visible');
            document.querySelector('.intro-text').classList.add('visible');
        }, 500);

        return () => {
            scroller.destroy();
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to lighten an RGB color
    function lighten(color) {
        const rgbValues = color.match(/\d+/g).map(Number);
        const r = Math.min(255, rgbValues[0] + (255 - rgbValues[0]) * 30 / 100);
        const g = Math.min(255, rgbValues[1] + (255 - rgbValues[1]) * 30 / 100);
        const b = Math.min(255, rgbValues[2] + (255 - rgbValues[2]) * 30 / 100);
        return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    }

    // Function to handle the click event on a project, showing the modal
    function handleProjectClick(project) {
        setSelectedProject(project);
        setModalShow(true);
    }

    // Function to get the icon for a given skill
    function getSkillIcon(skillName) {
        const skill = skills.find(s => s.name === skillName);
        if (!skill) return null;

        const iconProps = {
            style: { fontSize: '2rem', color: 'currentColor' }
        };

        switch (skill.type) {
            case 'fontawesome':
                return <FontAwesomeIcon icon={skill.icon} {...iconProps} />;
            case 'simpleicon':
                return <skill.icon {...iconProps} />;
            case 'mathworks':
                return <MathworksIcon style={{ width: '2rem', height: '2rem' }} />;
            case 'alexa':
                return <AlexaIcon style={{ width: '2rem', height: '2rem' }} />;
            default:
                return null;
        }
    }

    // Function to scroll to the top of the pages
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const isLargeScreen = window.innerWidth > 992;

    return (
        <div className="display-container">
            <div className="intro">
                <img src="/Luke.png" alt="Luke" className="intro-image" />
                <div className="intro-text">
                    <h1 style={{ marginBottom: "1rem" }}>Hi, I'm <b className="red-text">Luke Foley</b></h1>
                    <p>I'm a <b className="red-text">full-stack developer</b> with Bachelor's and Master's degrees in Computer Science from <b className="red-text">WPI</b></p>
                </div>
                <div className="scroll-down">
                    Scroll Down&nbsp;<FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
                </div>
            </div>
            <div className="my-projects-container">
                <div className="my-projects">My Projects</div>
            </div>
            <div className="projects-wrapper">
                <div className="background-container" />
                {
                    portfolio.map((project, index) => (
                        <div
                            key={index}
                            className={`portfolio-wrapper ${isLargeScreen ? (index % 2 === 0 ? 'from-right' : 'from-left') : ''}`}
                            style={{
                                background: `linear-gradient(${lighten(project.color)}, ${project.color})`,
                                margin: isLargeScreen ? (index % 2 === 0 ? '4rem auto 1rem 4rem' : '4rem 4rem 1rem auto') : '1rem auto',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleProjectClick(project)}
                        >
                            <div className="portfolio-content">
                                <img style={{ maxWidth: "30%" }} src={project.image} alt={project.name} />
                                <div className='divider'></div>
                                <div className={index % 2 === 0 ? 'text-left' : 'text-right'}>
                                    <h2 style={{ color: `${project.color}` }}>{project.name}</h2>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="skills-container">
                <div className="skills">My Skills</div>
            </div>
            <div className="skills-wrapper">
                <div className="background-container" />
                <div className="skills-inner-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            {skill.type === 'fontawesome' ? (
                                <FontAwesomeIcon icon={skill.icon} size="3x" />
                            ) : skill.type === 'simpleicon' ? (
                                <skill.icon style={{ fontSize: '3rem' }} />
                            ) : skill.type === 'mathworks' ? (
                                <MathworksIcon style={{ width: '3rem', height: '3rem' }} />
                            ) : skill.type === 'alexa' ? (
                                <AlexaIcon style={{ width: '3rem', height: '3rem' }} />
                            ) : null}
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="footer mt-5 py-3">
                <Container>
                    <Row className="text-center" style={{ color: 'rgb(80, 65, 65)' }}>
                        <Col>
                            <p>Developed by <b className="red-text">Luke Foley</b>, 2024</p>
                        </Col>
                    </Row>
                    <Row className="text-center" style={{ color: 'rgb(80, 65, 65)' }}>
                        <Col>
                            <p style={{ fontSize: "1.2rem" }}>Created with React.js, Scrollama, Bootstrap, FontAwesome, and Simple Icons.</p>
                        </Col>
                    </Row>
                    <Row className="text-center" style={{ color: 'rgb(80, 65, 65)' }}>
                        <Col>
                            <a href="https://www.linkedin.com/in/luke-foley-9006ba205/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="footer-icon" />
                            </a>
                            &nbsp;
                            <a href="https://github.com/lfoley7" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="footer-icon" />
                            </a>
                            &nbsp;
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lcfoley@wpi.edu" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="footer-icon" />
                            </a>
                        </Col>
                    </Row>
                    <Row className="mt-3 text-center">
                        <Col>
                            <Button variant="link" onClick={scrollToTop} style={{ color: 'rgb(80, 65, 65)' }} className="scroll-top-btn">
                                <div className="scroll-up"><FontAwesomeIcon className="arrow-icon" icon={faArrowUp} />Click to Scroll Up</div>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </footer>
            {
                selectedProject && (
                    <Modal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        dialogClassName={window.innerWidth <= 576 ? 'custom-modal-small' : 'custom-modal'}
                    >
                        <Modal.Header closeButton style={{ background: `linear-gradient( to right, ${selectedProject.color}, ${lighten(selectedProject.color)})` }}>
                            <Modal.Title style={{ color: 'white', fontStyle: 'italic' }}><b>{selectedProject.name}</b></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Carousel
                                className="custom-carousel"
                                controls={selectedProject.gallery.length > 1}
                                indicators={false}
                                interval={null}
                            >
                                {selectedProject.gallery.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <div className="image-container">
                                            <img
                                                className="d-block mx-auto"
                                                src={image}
                                                alt={`Slide ${index}`}
                                            />
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                            <hr />
                            <p className="modal-description" dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }} />
                        </Modal.Body>
                        <Modal.Footer style={{ '--project-color': selectedProject.color }}>
                            <div className="project-skills">
                                {selectedProject.skills.map((skillName, index) => {
                                    const skillIcon = getSkillIcon(skillName);
                                    return (
                                        <OverlayTrigger
                                            key={index}
                                            placement="top"
                                            overlay={<Tooltip>{skillName}</Tooltip>}
                                        >
                                            <div className="skill-icon-container">
                                                {skillIcon}
                                            </div>
                                        </OverlayTrigger>
                                    );
                                })}
                            </div>
                            {selectedProject.link && (
                                <Button style={{ backgroundColor: selectedProject.color, color: 'white', border: selectedProject.color }} href={selectedProject.link} target="_blank">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Link to project
                                </Button>
                            )}
                            <Button variant="secondary" style={{ border: "none" }} href={"#"} onClick={() => setModalShow(false)}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )
            }
        </div>
    );
}

export default Home;