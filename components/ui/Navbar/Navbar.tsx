import Link from 'next/link';
import React, { useState } from 'react';
import NavbarLink from './NavbarLink';
import { links } from './NavbarLinks';

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState(0);
  return (
    <nav className='fixed w-48 h-full bg-[#e0e2ec] shadow-2dp p-4'>
      <span className='text-xl font-medium'>Questions</span>
      <ul className='flex flex-col items-center w-full'>
        {links.map(link => (
          <NavbarLink
            key={link.id}
            onClick={() => setSelectedLink(link.id)}
            icon={link.icon}
            body={link.body}
            href={link.href}
            style={`w-full ${
              selectedLink === link.id && 'bg-[#43474e30]'
            }  hover:bg-[#43474e30] rounded my-1 duration-500 cursor-pointer`}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
