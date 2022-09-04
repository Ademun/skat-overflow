import Image from 'next/image';
import {FC} from 'react';
import logo from '@assets/skat.svg';
import Link from 'next/link';
import Search from '@components/ui/AppBar/Search/Search';
import {useAppSelector} from '@redux/hooks';
import {useRouter} from 'next/router';
import {Button, Header} from 'react-skat-ui';

const AppBar: FC = () => {
    const auth = useAppSelector(state => state.auth.value);
    const router = useRouter();
    const handleClick = (href: string) => {
        router.push(href);
    };

    return (
        <Header>
            <Link href='/'>
                <a className=' font-thin text-lg flex items-center px-4 duration-500 rounded'>
                    <Image src={logo} width={48} height={40} alt='Skat overflow'/>
                    Skat<span className='font-bold ml-1'>overflow</span>
                </a>
            </Link>
            <Search/>
            <div className=''>
                {auth ? (
                    <span>Succesfully logged</span>
                ) : (
                    <div>
                        <Button variant='solid' onClick={() => handleClick('signup')}>Sign up</Button>
                        <Button variant='none' onClick={() => handleClick('login')}>
                            Sign in
                        </Button>
                    </div>
                )}
            </div>
        </Header>
    );
};

export default AppBar;
