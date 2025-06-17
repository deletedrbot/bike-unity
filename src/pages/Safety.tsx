import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Safety: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-page">
      <div className="pac-man-container">
        <div className="pac-man"></div>
        <div className="loading-text">
          <span className="letter">З</span>
          <span className="letter">А</span>
          <span className="letter">Г</span>
          <span className="letter">Р</span>
          <span className="letter">У</span>
          <span className="letter">З</span>
          <span className="letter">К</span>
          <span className="letter">А</span>
        </div>
      </div>
    </div>
  );
};

export default Safety; 