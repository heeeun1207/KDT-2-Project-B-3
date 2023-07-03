import React from 'react';
import '../style/modalbtn.css';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const YesNoModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        {/* <h2>Confirmation Modal</h2> */}
        <p>정말 적용하시겠습니까?</p>
        <button className="custom-button" onClick={onConfirm}>
          예
        </button>
        <button className="custom-button" onClick={onClose}>
          아니오
        </button>
      </div>
    </div>
  );
};

export default YesNoModal;
