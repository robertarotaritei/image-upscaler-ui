import { useEffect, useState } from "react";

function RealESRGANText() {
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
          <h1 className="animate-text">Real-ESRGAN aims at</h1>
          <h1 className="animate-text">developing Practical</h1>
          <h1 className="animate-text">Algorithms for General</h1>
          <h1 className="animate-text">Image/Video Restoration.</h1>
          <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
            It extends the powerful ESRGAN to a practical restoration application
          </h4>
          <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
            (namely, Real-ESRGAN), which is trained with pure synthetic data. Check
          </h4>
          <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
            out the source code <a target="_blank" rel="noreferrer" href="https://github.com/xinntao/Real-ESRGAN">here</a>.
          </h4>
        </div>
      ) : (
        <div className="polygon-text">
          <div className="scroll-text" style={{ top: '20vh' }}>
            <h1 className="animate-text">Real-ESRGAN aims</h1>
            <h1 className="animate-text">at developing</h1>
            <h1 className="animate-text">Practical Algorithms</h1>
            <h1 className="animate-text">for General Image/</h1>
            <h1 className="animate-text">Video Restoration.</h1>
            <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
              It extends the powerful ESRGAN to a 
            </h4>
            <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
              practical restoration application (namely,
            </h4>
            <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
              Real-ESRGAN), which is trained with pure
            </h4>
            <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
              synthetic data. Check out the source
            </h4>
            <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
              code <a target="_blank" rel="noreferrer" href="https://github.com/xinntao/Real-ESRGAN">here</a>.
            </h4>
          </div>
        </div>
      )}
    </>
  );
}

export default RealESRGANText;