
'use client';

import Modal from './Modal';
import useLoginModal from '@/app/hooks/useLoginModal';

import { useState } from 'react';
import CustomButton from '../forms/CustomButton';

const LoginModal = () => {

    const loginModal = useLoginModal();
    const [showModal, setShowModal] = useState(loginModal.isOpen);
    const content = (
        <>
            <form className='space-y-4'>
                <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" 
                />

                <input 
                    type="password" 
                    placeholder="Your password" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" 
                />

                <div className='p-5 bg-rose-400 text-white rounded-xl opacity-80'>
                    The Error Message
                </div>
            
                <CustomButton 
                    label="Submit"
                    onClick={() => console.log('Login submitted')}
                />
            </form>
        </>
    )

    return (
        <Modal 
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log In"
            content={content}
        />
    );
}

export default LoginModal;