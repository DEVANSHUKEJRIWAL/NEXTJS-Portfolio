import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="text-white body-font bg-black bg-opacity-50">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">

                    <span className="ml-3 text-xl">CodeWithDev</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © {year} codewithdev — Developer
                </p>
            </div>
        </footer>
    );
}

export default Footer;
