import { ReactNode, FC } from 'react';
import AppBar from '@components/ui/AppBar/AppBar';
import Head from 'next/head';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { close } from '@redux/guideline/guidelineSlice';
import Navbar from '@components/ui/Navbar/Navbar';

interface ILayout {
  title: string;
  description: string;
  children: ReactNode;
  navbar?: boolean;
}

const Layout: FC<ILayout> = ({ children, title, description, navbar }) => {
  const guideline = useAppSelector(state => state.guidline.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'></link>
      </Head>
      <div
        className='fixed top-0 left-0 right-0 bottom-0 '
        onClick={() => dispatch(close())}>
        <AppBar />
        <div className=' mt-16 bg-[#fdfcff]'>
          {navbar ? (
            <>
              <Navbar />
              <div className='ml-48 p-8'>{children}</div>
            </>
          ) : (
            <>{children}</>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;
