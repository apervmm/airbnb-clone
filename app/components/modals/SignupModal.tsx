
'use client';

import Modal from './Modal';
import useSignupModal from '@/app/hooks/useSignupModal';

import { useState } from 'react';
import CustomButton from '../forms/CustomButton';

const SignupModal = () => {

    const signupModal = useSignupModal();
    const [showModal, setShowModal] = useState(signupModal.isOpen);
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

                <input 
                    type="password" 
                    placeholder="Repeat your password" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" 
                />

                <div className='p-5 bg-rose-400 text-white rounded-xl opacity-80'>
                    The Error Message
                </div>
            
                <CustomButton 
                    label="Submit"
                    onClick={() => console.log('Signup submitted')}
                />
            </form>
        </>
    )

    return (
        <Modal 
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign Up"
            content={content}
        />
    );
}

export default SignupModal;