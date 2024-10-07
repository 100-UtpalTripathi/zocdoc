import React from "react";
import pluscross from "../assets/pluscross.svg";

function BottomFooter() {
  return (
    <footer className="bg-[#010001] text-[#808081] py-6">
      <div className="container mx-auto flex justify-between items-center">
 
        <div className="flex space-x-6">
          <span className="text-white">© 2024 Zocdoc, Inc.</span>
          <a href="/terms" className="hover:text-white">
            Terms
          </a>
          <a href="/privacy" className="hover:text-white">
            Privacy
          </a>
          <a href="/consumer-health" className="hover:text-white">
            Consumer Health
          </a>
          <a
            href="/your-privacy-choices"
            className="flex items-center gap-2 hover:text-white"
          >
            <img src={pluscross} alt="Plus Cross" className="w-6 h-6" />
        
            Your privacy choices
          </a>
        </div>

      
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="bi bi-twitter "></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default BottomFooter;
