import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="border-t border-gray-800 py-20 px-2 mt-16 flex ">
        <div className="flex flex-col lg:flex-row gap-4 items-center mx-4 justify-center lg:gap-60 w-full">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="SyncHomie" className="h-8" />
            <p className="text-gray-400 text-sm text-wrap">Copyrights © 2024. All rights reserved by SyncHomie.com</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
            <div className="flex items-center gap-4 ml-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6M7 5h2v4h6V5h2v4h3v2H4V9h3V5Z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2.04c-5.46 0-9.9 4.44-9.9 9.9c0 4.38 2.84 8.1 6.78 9.39c.5.08.68-.22.68-.5c0-.24-.01-.87-.01-1.71c-2.76.6-3.35-1.18-3.35-1.18c-.45-1.16-1.1-1.47-1.1-1.47c-.9-.61.07-.6.07-.6c1 .07 1.53 1.02 1.53 1.02c.9 1.52 2.36 1.08 2.94.83c.1-.65.35-1.08.63-1.33c-2.21-.25-4.55-1.1-4.55-4.9c0-1.08.39-1.96 1.03-2.65c-.1-.25-.45-1.28.1-2.67c0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5.02 0c1.9-1.29 2.74-1.02 2.74-1.02c.55 1.39.2 2.42.1 2.67c.64.69 1.03 1.57 1.03 2.65c0 3.8-2.35 4.65-4.58 4.89c.35.3.67.89.67 1.8c0 1.3-.01 2.35-.01 2.66c0 .28.18.59.69.49c3.94-1.3 6.78-5 6.78-9.38c0-5.46-4.44-9.9-9.9-9.9Z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
              />
              </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.57 2.57 0 0 1-1.82.748a2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803" clipRule="evenodd"
              />
              </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
        </div>
    );
}

export default Footer;
