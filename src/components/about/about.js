import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/N65RwJs/000004.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
          As a rising sophomore pursuing a dual major in Computer Science and Finance, I am deeply passionate about the transformative potential of technology and finance. My interests lie at the intersection of three dynamic fields: blockchain technology, data engineering, and fintech solutions.
        </p>
        <p className="a-desc">
        With a solid foundation in programming languages and data analysis, I am eager to explore the vast possibilities of blockchain technology. Its decentralized nature and ability to revolutionize industries like finance and supply chain have captivated me. I continuously hone my technical skills, driven by the desire to contribute to this groundbreaking domain.</p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">Involvements</h4>
            <p className="a-award-desc">
              University of Richmond ICPC Team Member, Girls Who Code, Association of Computing Machinery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;