import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - CS & Blockchain</h4>
                <h5>Samrat Ashok Technological Institute, Vidisha</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science and Blockchain with a CGPA of
              7.0. Building a strong foundation in full-stack development, AI,
              and emerging Web3 technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>VaultofCodes</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered a full-stack MERN application with 5+ RESTful APIs
              using Node.js, Express, and MongoDB. Implemented backend modules
              with database integration reducing server response time by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Intern</h4>
                <h5>Redynox</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Conducted VAPT on 3+ web and Android apps using OWASP Top 10,
              Nmap, SQLMap, and OWASP-ZAP. Performed OSINT reconnaissance via
              SOCMINT identifying 10+ vulnerabilities including SQL Injection,
              XSS, and HTML Injection.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML Engineer</h4>
                <h5>Current Role</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building and deploying machine learning models and AI-powered
              applications. Working with LLMs, vector databases, and modern
              AI frameworks to craft intelligent, production-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
