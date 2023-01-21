import UploadButton from "./UploadButton";
import CompareSlider from "./CompareSlider";

function MainTextMobile() {
  return (
    <>
      <div className="polygon-text">
        <div className="scroll-text" style={{ top: '35vh' }}>
          <h1 className="animate-text" style={{ fontSize: '2em !important' }}>
            Upscale low
          </h1>
          <h1 className="animate-text" style={{ fontSize: '2em !important' }}>
            resolution images
          </h1>
          <h4 className="animate-text" style={{ fontSize: '1em !important', marginTop: '1em' }}>
            Using the Real-ESRGAN image
          </h4>
          <h4 className="animate-text" style={{ fontSize: '1em !important' }}>
            restoration algorithm, low resolution
          </h4>
          <h4 className="animate-text" style={{ fontSize: '1em !important' }}>
            pictures are doubled in size without
          </h4>
          <h4 className="animate-text" style={{ fontSize: '1em !important' }}>
            losing details.
          </h4>
          <UploadButton />
        </div>
      </div>
      <div className="polygon-text">
        <div className="scroll-text" style={{ top: '162vh' }}>
          <h1 className="animate-text" style={{ fontSize: '2em !important' }}>
              Image upscaled
          </h1>
          <h1 className="animate-text" style={{ fontSize: '2em !important', marginBottom: '0.15em' }}>
            using Real-ESRGAN
          </h1>
          <CompareSlider width="87vw" />
        </div>
      </div>
      <div className="polygon-text">
        <div className="scroll-text" style={{ top: '340vh' }}>
          <h1 className="animate-text" style={{ fontSize: '1em !important' }}>
            Check out the
          </h1>
          <h1 className="animate-text" style={{ fontSize: '1em !important' }}>
            source code for
          </h1>
          <h1 className="animate-text" style={{ fontSize: '1em !important' }}>
            Real-ESRGAN <a target="_blank" rel="noreferrer" href="https://github.com/xinntao/Real-ESRGAN">here</a>.
          </h1>
        </div>
      </div>
    </>
  );
}

export default MainTextMobile;