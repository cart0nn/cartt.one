import React from 'react';
import { FaGithub } from "react-icons/fa6";

const GithubIcon = () => {
    return (
        <a href="https://github.com/cart0nn" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl text-white hover:text-gray-500 transition-colors duration-200"/>
        </a>
    )
};

export default GithubIcon;