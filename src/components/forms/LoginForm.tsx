"use client"

import Text from '../ui/input/auth/Text';
import Rounded from '../ui/buttons/Rounded';
import { useActionState, useEffect } from 'react';
import { login } from '@/app/auth/actions';
import { useUserStore } from '@/store/user';
import { useTransitionRouter } from 'next-view-transitions';
import { slideInOut } from '@/util/transition';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function LoginForm() {
    const [loginState, loginAction] = useActionState(login, undefined);
    const dispatchLogin = useUserStore(prevState=>prevState.login);
    const router = useTransitionRouter();

    useEffect(()=>{
        if(loginState?.success) {
            const username = loginState.success.username;
            const token = loginState.success.token;
            dispatchLogin(username,token);
            router.push('/',{onTransitionReady: slideInOut});
        }   
    },[loginState]);

    return(
        <form action={loginAction} className='grid grid-cols-1 gap-5 py-10 px-5 md:px-10'>
            <div className='mb-5'>
                <h1 className="text-(--secondary-background) text-5xl text-left">WELCOME BACK!</h1>
                <h2 className="italic text-xl text-left text-(--disabled)">Log into your account</h2>  
            </div>
            <div>
                <Text type='text' placeholder='Username' id='username' name='username' defaultValue={loginState?.payload?.username}/>
                {loginState?.errors?.username && <p className='text-(--error)'>{loginState.errors.username}</p>}
            </div>
            <div>
                <Text type='password' placeholder='Password' id='password' name='password'/>
                {loginState?.errors?.password && <p className='text-(--error)'>{loginState.errors.password}</p>}
            </div>
            <Rounded color='orange'>
                Login
            </Rounded>
            <div className='mt-20 text-center text-(--dark)'>
                {"Don't have an acccount? "}<span className='font-extrabold text-(--secondary-background)'>
                    <Link 
                        href={'/auth/register'}
                    >
                        Register
                    </Link> 
                </span><br/>
                <Link 
                    href={'/auth/login'}
                    onClick={(e)=>{
                        e.preventDefault();
                        router.push('/',{
                            onTransitionReady: slideInOut,
                        })
                    }}
                    className='font-extrabold'
                >
                    <FontAwesomeIcon icon={faChevronLeft}/> Back to home
                </Link> 
            </div>
        </form>
    )
}