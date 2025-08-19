import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  image?: string;
  imageAlt?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className = "bg-white/90 backdrop-blur-sm",
  image,
  imageAlt = ""
}) => {
  return (
    <div className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}>
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;