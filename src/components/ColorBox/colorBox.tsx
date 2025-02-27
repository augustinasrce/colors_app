import { useState } from "react";
import { Link } from "react-router-dom";
import { ColorFormatType, GeneratedColor } from "../../models/SeedColor";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./colorBox.scss";

interface ColorProps {
  color: GeneratedColor;
  format: ColorFormatType;
  id: string;
  paletteId: string;
}

const ColorBox = ({ color, format, id, paletteId }: ColorProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="ColorBox" style={{ background: color[format] }}>
      <div
        className={`${copied ? "show-overlay" : "copy-overlay"}`}
        style={{ background: color[format] }}
      ></div>
      <div className={`${copied ? "show-message" : "copy-message"}`}>
        <h1>copied!</h1>
        <p>{color[format]}</p>
      </div>
      <div className="copy-container">
        <div className="box-content">
          <span className="color-name">{color.name}</span>
        </div>
        <CopyToClipboard text={color[format]} onCopy={handleCopyState}>
          <button className="copy-button">Copy</button>
        </CopyToClipboard>
        <Link to={`/palette/${paletteId}/color/${id}`}>
          <span className="see-more">More</span>
        </Link>
      </div>
    </div>
  );
};
export default ColorBox;
