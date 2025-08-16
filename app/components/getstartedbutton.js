'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const GetStartedButton = ({ onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            className="flex items-center rounded-full bg-[#222] shadow-lg overflow-hidden px-2 py-2 cursor-pointer"
        >
            {/* Text Background */}
            <span className="bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300">
                Get Started
            </span>

            {/* Arrow Icon with rotation animation */}
            <motion.div
                className="ml-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-500 flex items-center justify-center text-white"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <ArrowForwardIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
        </motion.button>
    );
};

export default GetStartedButton;
