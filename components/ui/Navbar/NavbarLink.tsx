import Link from 'next/link';
import { FC } from 'react';

interface INavbar {
  icon: string;
  body: string;
  href: string;
  style: string;
  onClick: () => void;
}

const NavbarLink: FC<INavbar> = ({ icon, body, href, style, onClick }) => {
  return (
    <li onClick={onClick} className={style}>
      <Link href={href}>
        <span className='flex items-center p-2'>
          <span className='material-icons mr-2'>{icon}</span>
          {body}
        </span>
      </Link>
    </li>
  );
};

export default NavbarLink;
