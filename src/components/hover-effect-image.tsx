import { useState} from 'react';

export default function HoverEffectImage() {
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 5; // Adjust rotation sensitivity
        const rotateY = ((x - centerX) / centerX) * -5;

        setStyle({
            transform: `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'scale(1) rotateX(0) rotateY(0)', // Reset on mouse leave
            transition: 'transform 0.5s ease-out',
        });
    };

    return (
        <div className="relative pt-14 mt-1">
            <div
                className="ps-8"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    perspective: '1000px', // Add depth
                }}
            >
                <img
                    className="w-fit rounded-xl shadow-xs transition-transform transform-gpu duration-500 ease-out"
                    src="/assets/images/homepage-jms.jpg"
                    alt="home screen photo"
                    style={style}
                />
            </div>
        </div>
    );
}
