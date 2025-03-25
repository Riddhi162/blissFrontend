    import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { useNavigate } from 'react-router-dom';

    const AnimatedLogoReveal = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    const navigate = useNavigate();
    const logoText = "REALAR";

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsRevealed(true);
        // Navigate to home page after animation
        navigate('/home');
        }, 3000); // Increased duration to enjoy the animation

        return () => clearTimeout(timer);
    }, [navigate]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1
        }
        }
    };

    const letterVariants = {
        hidden: { 
        opacity: 0, 
        y: 50,
        rotate: -20
        },
        visible: { 
        opacity: 1, 
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
        }
        }
    };

    return (
        <div className="relative min-h-screen bg-primary-darkest flex items-center justify-center overflow-hidden">
        {/* Top Right Grid Texture */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-primary-accent/10 grid grid-cols-8 grid-rows-8 gap-1">
            {[...Array(64)].map((_, index) => (
                <div 
                key={index} 
                className="bg-primary-accent/5 border-[0.5px] border-primary-accent/10"
                />
            ))}
            </div>
        </div>

        {/* Bottom Left Grid Texture */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary-accent/10 grid grid-cols-8 grid-rows-8 gap-1">
            {[...Array(64)].map((_, index) => (
                <div 
                key={index} 
                className="bg-primary-accent/5 border-[0.5px] border-primary-accent/10"
                />
            ))}
            </div>
        </div>

        {/* Logo Container */}
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex items-center z-10 relative"
        >
            {logoText.split('').map((letter, index) => (
            <motion.span
                key={index}
                variants={letterVariants}
                className="text-primary-accent text-8xl font-bold"
            >
                {letter}
            </motion.span>
            ))}
        </motion.div>

        {/* Subtle Background Shimmer */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
            opacity: [0, 0.05, 0],
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop"
            }}
            className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-accent/5 to-transparent"
        />
        </div>
    );
    };

    export default AnimatedLogoReveal;