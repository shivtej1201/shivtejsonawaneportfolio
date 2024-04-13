export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey 👋 , I'm Shivtej Sonawane</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Software Developer at Bajaj Finserv || Full Stack Developer ||
            Graduation in Master of Computer Science(MCS) at Savitribai Phule
            Pune University || MERN Stack ||
            <br /> A passionate Software Developer from Pune
          </p>
        </div>
        <div className="HomeButton">
          <a href="https://drive.google.com/file/d/1qOoj486k0YO2vUM439uUsqu14Rh4KHHc/view?usp=sharing">
            <button className="btn btn-primary">Download Resume</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/SHIVTEJ_PNG.png" alt="Hero Section" />
      </div>
    </section>
  );
}
