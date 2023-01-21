import UploadButton from "./UploadButton";
import CompareSlider from "./CompareSlider";

function MainTextBrowser() {
  return (
    <>
      <div className="scroll-text" style={{ top: '35vh' }}>
        <h1 className="animate-text" style={{ fontSize: '2em !important' }}>
          Upscale low resolution
        </h1>
        <h1 className="animate-text" style={{ fontSize: '2em !important' }}>
          images
        </h1>
        <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
          Using the Real-ESRGAN image restoration algorithm, low resolution
        </h4>
        <h4 className="animate-text" style={{ fontSize: '1em !important' }}>
          pictures are doubled in size without losing details.
        </h4>
        <UploadButton />
      </div>
      <h5 className="scroll-info">Scroll for more <div  style={{ fontSize: '1.5em !important' }}>🠗</div></h5>
      <div className="scroll-text" style={{ top: '162vh' }}>
        <h1 className="animate-text" style={{ fontSize: '2em !important' }}>
            Image upscaled using
        </h1>
        <h1 className="animate-text" style={{ fontSize: '2em !important', marginBottom: '0.15em' }}>
            Real-ESRGAN
        </h1>
        <CompareSlider width="30vw"/>
      </div>
      <div className="scroll-text" style={{ top: '340vh' }}>
        <h1 className="animate-text" style={{ fontSize: '1em !important' }}>
          Check out the source
        </h1>
        <h1 className="animate-text" style={{ fontSize: '1em !important' }}>
          code for Real-ESRGAN
        </h1>
        <h1 className="animate-text" style={{ fontSize: '1em !important' }}>
          <a target="_blank" rel="noreferrer" href="https://github.com/xinntao/Real-ESRGAN">here</a>.
        </h1>
      </div>
    </>
  );
}

export default MainTextBrowser;