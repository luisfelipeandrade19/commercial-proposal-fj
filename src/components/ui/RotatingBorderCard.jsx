import React from 'react';

const RotatingBorderCard = ({ children, className = "" }) => {
    return (
        <div className={`relative overflow-hidden rounded-[60px] bg-gradient-to-b from-black  to-[#56B8FF] ${className}`}>
         
            <div className="absolute inset-0 flex items-center justify-center animate-border-spin z-0">
                <div className="w-[100%] h-[100%] absolute -top-[50%] bg-radial from-[rgba(0,187,255,0.69)] from-1% to-transparent to-70% opacity-70 blur-[30px]" />
            </div>

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default RotatingBorderCard;
