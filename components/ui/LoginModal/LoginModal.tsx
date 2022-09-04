import { FC } from 'react';
import logo from '@assets/skat.svg';
import google from '@assets/google.svg';
import github from '@assets/github.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Input } from 'react-skat-ui';

const LoginModal: FC = () => {
  return (
    <div className='bg-[#fdfcff] shadow-2dp rounded w-96 p-2'>
      <div className='w-3/4 flex flex-col m-auto'>
        <div className='flex items-center justify-center font-thin text-lg'>
          <Image src={logo} width={48} height={56} alt='Skat overflow' />
          Skat<span className='font-bold ml-1'>overflow</span>
        </div>

        <span>Email</span>
        <Input
          placeholder='Email'
          sx='background-color: #e0e2ec; margin: 8px 0'
        />
        <span className='flex justify-between w-full'>
          Password
          <a href='todo' className='text-[#005faf]'>
            Forgot password?
          </a>
        </span>
        <Input
          placeholder='Password'
          sx='background-color: #e0e2ec; margin: 8px 0'
        />
        <Button variant='solid' sx='margin: 8px 0'>
          Log in
        </Button>
        <div className='flex justify-center my-2'>
          <Link href='login'>
            <a className='flex items-center mx-4 rounded hover:bg-[#e0e2ec] duration-500 p-2'>
              <Image src={google} width={24} height={24} alt='Google' />
            </a>
          </Link>
          <Link href='login'>
            <a className='flex items-center mx-4 rounded hover:bg-[#e0e2ec] duration-500 p-2'>
              <Image src={github} width={24} height={24} alt='Github' />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
