import { useState } from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';

const navItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-white pr-2 pl-2 lg:pr-3 lg:pl-3">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-5 lg:my-6">
            <img src={logo} alt="easybank logo" />
          </div>
          <div className="hidden lg:block text-sm text-neutral-grayish-blue">
            {navItems.map((navItem) => (
              <a className="mx-3 py-5 hover:gradient-border-bottom" href="#">
                {navItem}
              </a>
            ))}
          </div>
          <button className="hidden lg:block bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400">
            Request Invite
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img
              className={`${isOpen && 'hidden'}`}
              src={hamburger}
              alt=""
            />
            <img
              className={isOpen ? 'block' : 'hidden'}
              src={close}
              alt=""
            />
          </button>
        </nav>
      </div>
      <div
        className={`fixed inset-0 z-30 bg-gray-800 
      bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem) => (
            <a key={navItem} className="py-2" href="#">
              {navItem}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}