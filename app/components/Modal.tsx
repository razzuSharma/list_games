import React from "react";

const Modal = ({ show, onClose, children }:any) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-75" onClick={onClose}></div>
      <div className="bg-white p-8 rounded-lg z-50">
        {children}
      </div>
    </div>
  );
};

export default Modal;
