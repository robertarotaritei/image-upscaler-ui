import { useEffect, useState } from "react";

function AboutText() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <>
      {windowSize > 1000 ? (
        <div className="scroll-text" style={{ top: '20vh' }}>
          <h1 className="animate-text">This project uses Three.js</h1>
          <h1 className="animate-text">to render 3D graphics</h1>
          <h1 className="animate-text">and Real-ESRGAN to </h1>
          <h1 className="animate-text">upscale photos.</h1>
          <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
            Check out some of my other work here:
          </h4>
          <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
            <a target="_blank" rel="noreferrer" href="https://wise-guys.nl/">WiseGuys website</a>
          </h4>
          <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
            <a target="_blank" rel="noreferrer" href="https://robertarotaritei.github.io/game-of-life/">Game of Life</a>
          </h4>
          <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
            <a target="_blank" rel="noreferrer" href="https://robertarotaritei.itch.io/shoot-em-up">Shoot-em-up</a>
          </h4>
        </div>
      ) : (
        <div className="polygon-text">
          <div className="scroll-text" style={{ top: '20vh' }}>
            <h1 className="animate-text">This project uses</h1>
            <h1 className="animate-text">Three.js to render</h1>
            <h1 className="animate-text">3D graphics and</h1>
            <h1 className="animate-text">Real-ESRGAN to </h1>
            <h1 className="animate-text">upscale photos.</h1>
            <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
              Check out some of my other work here:
            </h4>
            <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
              <a target="_blank" rel="noreferrer" href="https://wise-guys.nl/">WiseGuys website</a>
            </h4>
            <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
              <a target="_blank" rel="noreferrer" href="https://robertarotaritei.github.io/game-of-life/">Game of Life</a>
            </h4>
            <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
              <a target="_blank" rel="noreferrer" href="https://robertarotaritei.itch.io/shoot-em-up">Shoot-em-up</a>
            </h4>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutText;