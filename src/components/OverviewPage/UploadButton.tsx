import { ChangeEvent, useRef } from "react";
import axios from "axios";

function UploadButton() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    return axios({method: 'post', url: `${process.env.REACT_APP_API}/upload`, data: formData}).then((response) => {
      const a = document.createElement("a");
      a.href = "data:image/png;base64," + response.data;
      a.download = "Image.png";
      a.click();
    });
  };

  return (
    <>
      <div className="upload-btn" onClick={handleUploadClick}>
        <span className="upload-line" />
        Upscale photo
      </div>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </>
  );
}

export default UploadButton;