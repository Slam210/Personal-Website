import '../CSS/Resume.css';

export default function Resume() {
    return (
    <div className="ResumeBody">
        <div id = "Header">
            <div id = "HeaderName">
                <div>Steven Lam</div>
            </div>
            <div id = "HeaderInfo">
                <div>stevenl.inbox@gmail.com | (916)-578-7264 | Chico, CA | <a href = "https://www.linkedin.com/in/slam210/" target="_blank">Linkedin</a> </div>
            </div> 
        </div>   
        <div className = "Education">
            <h2 className = "Title">EDUCATION</h2>
            <div>
                <div className = "LeftRightInfo">
                    <div><b>California State University, Chico</b></div>
                    <div><b>Fall, 2024</b></div>
                </div>
                <div className = "LeftRightInfo">
                    <div><i>BS, Computer Science</i></div>
                    <div>GPA: 3.94</div>
                </div>
            </div>
        </div>
        <div id = "TechSkills">
            <h2 className = "Title">TECHNICAL PROFICIENCIES</h2>
            <div>
                <ul>
                    <li><b>Programming Languages and Technologies:</b> C++, HTML, CSS, JavaScript, React, Flutter, Dart, Firebase, Oracle SQL, Pig Latin, Java, LaTeX</li>
                    <li><b>Development and Tools:</b> Visual Studio Code, VIM, Jupyter Notebook</li>
                    <li><b>Cloud, Big Data, and Version Control:</b> Google Cloud, Amazon Web Services, Git, Hadoop</li>
                </ul>
            </div>
        </div>
        <div id = "Projects">
            <h2 className = "Title">Projects | <a href="https://github.com/Slam210" target="_blank">Github</a></h2>
            <ul>
                <li><b>ShapeShift</b></li>
                <ul>
                    <li>Developed a fitness app using Flutter and Dart, with a custom-designed UI.</li>
                    <li>Created a visually appealing and user-friendly fitness app that caters to the fitness community's needs.</li>
                    <li>Leveraged Flutter and Dart to craft a mobile fitness app, integrating various APIs for social media sharing, fitness
                        tracking, community building, and content sharing.</li>
                </ul>
                <li><b>Technical Projects Club Website</b></li>
                <ul>
                    <li>Implemented an overhaul of the Technical Projects Club (TPC) website, implementing React calendars and components to optimize content organization and elevate user engagement.</li>
                    <li>Transformed the website's visual presentation on diverse platforms by refining HTML and CSS, ensuring a design that adapts seamlessly to both web and mobile interfaces, maintaining consistent ratios.</li>
                    <li>Utilized a secure deployment strategy, achieving HTTPS encryption, fortifying data safety, and contributing to a robust online presence for the TPC community.</li>
                </ul>
                <li><b>Personal Website</b></li>
                <ul>
                    <li>Designed and implemented a dynamic personal website using HTML, CSS, and JavaScript, showcasing technical proficiency and creativity.</li>
                    <li>Developed and integrated various sections, including an About Me page, Resume, Projects, and a homepage, providing a comprehensive overview of skills, achievements., and projects</li>
                    <li>Utilized React for seamless navigation, optimizing user experience, and demonstrating proficiency in modern web development technologies.</li>
                </ul>
            </ul>
        </div>
        <div id = "Experience">
            <h2 className = "Title">EXPERIENCE</h2>
            <div className = "LeftRightInfo">
                <div><b>Chico State</b></div>
                <div><b>January 2023 - December 2023</b></div>
            </div>
            <div className = "JobTitle">Computer Science Teaching Assistant</div>
            <ul>
                <li>Assessed assignments, and provided constructive feedback, while also facilitating hands-on computer lab learning experiences and delivering one-on-one guidance and technical solutions to students in need.</li>
            </ul>
        </div>
        <div id = "Extracurricular">
        </div>
        <div id = "Extracurricular">
            <h2 className = "Title">EXTRACURRICULAR</h2>
            <ul>
                <li>
                    <span className="ExtracurricularLeftSide">Associated Computing Machinery (ACM)</span>
                    <span className="ExtracurricularRightSide"><b>Spring 2022-Current</b></span>
                </li>
                <ul>
                    <li>Participated in the ACM 2023 local competition. achieving 1st place in the combined category</li>
                    <li>Assisted with hosting and managing the ICPC regional competition at Chico State</li>
                    <li>Participated in the ACM 2022 local competition, achieving 3rd place in the lower division category.</li>
                </ul>
                <li>
                    <span className="ExtracurricularLeftSide">Upsilon Pi Epsilon <b>(UPE)</b>: Treasurer</span>
                    <span className="ExtracurricularRightSide"><b>Spring 2023 - Current</b></span>
                </li>
                <li>
                    <span className="ExtracurricularLeftSide">Technical Projects Club <b>(TPC)</b>: Secretary</span>
                    <span className="ExtracurricularRightSide"><b>Fall 2023 - Current</b></span>
                </li>
            </ul>
        </div>
    </div>
    )
}