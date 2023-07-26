import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Leah Le</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Blockchain Enthusiast</div>
              <div className="i-title-item">Data Afficionado</div>
              <div className="i-title-item">Learner</div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
      <div className="i-bg"></div>
      </div>
    </div>
  );
};

export default Intro;