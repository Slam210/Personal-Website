import Chess1 from '/src/Images/Chess/Chess1.png';
import Chess2 from '/src/Images/Chess/Chess2.png';
import Chess3 from '/src/Images/Chess/Chess3.png';
import Chess4 from '/src/Images/Chess/Chess4.png';
import Chess5 from '/src/Images/Chess/Chess5.png';
import ABP1 from '/src/Images/ABP/ABP1.png';
import ABP2 from '/src/Images/ABP/ABP2.png';
import ABP3 from '/src/Images/ABP/ABP3.png';
import ABP4 from '/src/Images/ABP/ABP4.png';
import ABP5 from '/src/Images/ABP/ABP5.png';
import SS1 from '/src/Images/ShapeShift/SS1.png';
import SS2 from '/src/Images/ShapeShift/SS2.png';
import SS3 from '/src/Images/ShapeShift/SS3.png';
import SS4 from '/src/Images/ShapeShift/SS4.png';
import SS5 from '/src/Images/ShapeShift/SS5.png';
import SS6 from '/src/Images/ShapeShift/SS6.png';
import SS7 from '/src/Images/ShapeShift/SS7.png';
import BlackJack from '/src/Images/JavaScript/BlackJack.png';
import Tracker from '/src/Images/JavaScript/Tracker.png';
import Calc from '/src/Images/JavaScript/Calc.png';
import MemeGenerator from '/src/Images/React/MemeGenerator.png';
import Notes from '/src/Images/React/Notes.png';
import Tenzies from '/src/Images/React/Tenzies.png';

export const ProjectsArray = [
    {
        Project: [
            {
                Title: 'Command Line Chess (C++)',
                GithubLink: 'https://github.com/Slam210/Command-Line-Chess',
                Description: 'Command line chess using c++ code. Compile the code and execute the executable that you have created. Play by picking a row followed by a column for the piece you want to move. Repeat for the destination.',
                ImageLinks: [
                    Chess1,
                    Chess2,
                    Chess3,
                    Chess4,
                    Chess5
                ],
            },
            {
                Title: 'Alpha Beta Pruning (C++)',
                GithubLink: 'https://github.com/Slam210/Alpha-Beta-Pruning',
                Description: 'Alpha-beta pruning is an optimization technique for the minimax algorithm used in game tree search. It efficiently prunes branches of the tree that cannot affect the final decision, reducing the number of nodes evaluated. In the provided C++ code, the AlphaBetaPruning function is implemented within the Node class, allowing the user to define, generate, set values, and manipulate a game tree before running the algorithm to find the optimal move',
                ImageLinks: [
                    ABP1,
                    ABP2,
                    ABP3,
                    ABP4,
                    ABP5
                ],
            },
            {
                Title: 'ShapeShift (Flutter, Dart, FireBase)',
                GithubLink: 'https://github.com/Slam210/ShapeShift',
                Description: `ShapeShift is a fitness app designed to enhance connectivity and organization within workout communities. With its user-friendly interface, users can create and administer groups, invite members, share schedules, and discuss progress, fostering a streamlined and productive fitness community. The app employs location services to track and document workouts, allowing users to identify others exercising at the same location for potential networking and joint workouts. Communication features enable the exchange of workout tips, motivational messages, and coordination of group workouts. Using Firebase, the app's presence system monitors metrics like distance covered and calories burned, providing users with accurate insights into their fitness journey and facilitating connections with others in the same area. Ideal for individuals at any fitness level, ShapeShift promotes inclusivity and an improved overall fitness experience`,
                ImageLinks: [
                    SS1,
                    SS2,
                    SS3,
                    SS4,
                    SS5,
                    SS6,
                    SS7,
                ],
            },
            {
                Title: 'Intro to HTML, CSS, JavaScript',
                GithubLink: 'https://github.com/Slam210/Javascript',
                Description: `Explore a trio of web applications crafted using HTML, CSS, and JavaScript for a dynamic and engaging user experience. Immerse yourself in the world of classic casino gaming with the Blackjack Game, featuring an intuitive interface and animated card interactions. Stay organized effortlessly with the Note Tracker, a versatile tool that enables users to take and save notes to a unique website URL, ensuring easy access and seamless collaboration. Simplify your calculations on-the-go with the Web Calculator, offering a clean and responsive interface for basic arithmetic operations. Whether you're seeking entertainment, productivity, or convenience, these web programs showcase the versatility and creativity possible with the combination of HTML, CSS, and JavaScript.`,
                ImageLinks: [
                    BlackJack,
                    Tracker,
                    Calc,
                ],
            },
            {
                Title: 'React',
                GithubLink: 'https://github.com/Slam210/React-Projects',
                Description: `Dive into the world of React with a collection of innovative projects that seamlessly blend functionality with a captivating user experience. First up is the React Meme Generator, an interactive application that allows users to create and customize memes on the fly. Harnessing the power of React components, this project delivers a dynamic and intuitive meme-making experience. Next in line is the React Notes app, offering a modern and efficient solution for organizing thoughts and ideas. Leveraging React's component-based architecture, this app provides a smooth and responsive user interface, making note-taking a breeze. Finally, experience the fun and excitement of Tenzies, a React-based implementation of the classic dice game. With a visually appealing design and responsive components, Tenzies brings the joy of dice rolling to the digital realm. These React projects showcase the versatility and innovation achievable in web development, combining sleek design with powerful functionality for an enhanced user experience.`,
                ImageLinks: [
                    MemeGenerator,
                    Notes,
                    Tenzies
                ],
            },
        ],
    },
];
