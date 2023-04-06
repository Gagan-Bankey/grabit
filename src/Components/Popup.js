import React from 'react';
import "./Dashboard_css.css"
export default function Popup(props) {
  const { isOpen, onClose, children } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div >
    popup
    </div>
  );
}

