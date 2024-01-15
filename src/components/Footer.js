import React from "react";

import { FaYoutube, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 uppercase mb-6 font-semibold">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/70">
            Be the first to get the latest news about trends, promotions and
            discounts!
          </p>
        </div>
        {/* form */}
        <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-12">
          <input
            type="text"
            placeholder="Your email address"
            className="input"
          />
          <button className="btn btn-accent min-w-[150px]"> Join</button>
        </form>

        {/* Links */}
        <div className="text-base  text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9 ">
          <a href="#" className="hover:text-white transition-all">
            Return policy
          </a>
          <a href="#" className="hover:text-white transition-all">
            Track your package
          </a>
          <a href="#" className="hover:text-white transition-all">
            Shopping & delivery
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-x-6 max-w-max mx-auto text-xl mb-12">
          <a
            href="https://www.linkedin.com/in/artin-mohsenpour/"
            className="hover:text-white transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/c/ArtinDE"
            className="hover:text-white transition-all"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/artin_mohsenpour/"
            className="hover:text-white transition-all"
          >
            <FaInstagram />
          </a>

          <a
            href="https://web.telegram.org/a/#5257219698"
            className="hover:text-white transition-all"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="py-10 border-t border-t-white/10 ">
        <div className="container mx-auto">
          <div className="text-center text-sm text-white/60">
            Copyright &copy; ArtinLand 2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
