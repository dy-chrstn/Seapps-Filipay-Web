import React, { useEffect, useState } from 'react';
import './toggle.css'; // Create this CSS file for styling the toggle switch

interface ToggleProps {
  value: boolean;
  onChange: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange }) => {
  const [isToggled, setIsToggled] = useState(value);

  useEffect(() => {
    setIsToggled(value);
  }, [value]);

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onChange} />
      <span className="switch-slider"></span>
    </label>
  );
};

export default Toggle;