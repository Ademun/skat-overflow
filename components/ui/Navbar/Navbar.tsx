import {Navbar} from "react-skat-ui";
import React, { useState } from 'react';
import NavbarLink from './NavbarLink';
import { links } from './NavbarLinks';

const Nav = () => {
  const [selectedLink, setSelectedLink] = useState(0);
  return (
    <Navbar>
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
    </Navbar>
  );
};

export default Nav;
