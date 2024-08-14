import React from "react";
import "../utils/ImageModal.css";

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Modal" className="modal-image" />
        <button
          className="open-in-new-tab-button"
          onClick={() => window.open(imageUrl, "_blank")}
        >
          Open in New Tab
        </button>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
