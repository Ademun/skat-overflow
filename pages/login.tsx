import LoginModal from '@components/ui/LoginModal/LoginModal';
import React from 'react';

const login = () => {
    return (
        <div className='absolute h-3/4 w-full flex items-center justify-center'>
            <LoginModal/>
        </div>
    );
};

export default login;
