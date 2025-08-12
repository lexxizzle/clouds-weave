import React from 'react';

interface CloudShapeProps {
  className: string;
}

const CloudShape: React.FC<CloudShapeProps> = ({ className }) => {
  return <div className={`cloud ${className}`}></div>;
};

export default CloudShape;