"use client"
import Text from '../ui/input/auth/Text';
import Rounded from '../ui/buttons/Rounded';
import { slideInOut } from '@/util/transition';
import { useActionState, useEffect } from 'react';
import { register } from '@/app/auth/actions';
import { useUserStore } from '@/store/user';
import { useTransitionRouter } from 'next-view-transitions';
import Link from 'next/link';
import Country from '../ui/input/auth/Country';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function RegisterForm() {
    const [registerState, registerAction] = useActionState(register, undefined);
    const dispatchLogin = useUserStore(prevState=>prevState.login);
    const router = useTransitionRouter();

    useEffect(()=>{
        if(registerState?.success) {
            const username = registerState.success.username;
            const token = registerState.success.token;
            dispatchLogin(username,token);
            router.push('/auth/success');
        }   
    },[registerState]);

    return(
        <form action={registerAction} className='grid grid-cols-1 gap-5 py-10 px-5 md:px-10'>
            <div className='mb-5'>
                <h1 className="text-(--secondary-background) text-5xl text-left">WELCOME!</h1>
                <h2 className="italic text-xl text-left text-(--disabled)">Create an account</h2>  
            </div>
            <div>
                <Text type='text' placeholder='Username' id='username' name='username' defaultValue={registerState?.payload?.username}/>
                {registerState?.errors?.username && <p className='text-(--error)'>{registerState.errors.username}</p>}
            </div>
            <div>
                <Text type='email' placeholder='Email' id='email' name='email' defaultValue={registerState?.payload?.email}/>
                {registerState?.errors?.email && <p className='text-(--error)'>{registerState.errors.email}</p>}
            </div>
            <div>
                <Text type='tel' placeholder='Mobile' id='tel' name='tel' defaultValue={registerState?.payload?.tel}/>
                {registerState?.errors?.tel && <p className='text-(--error)'>{registerState.errors.tel}</p>}
            </div>
            <div>
                <Country id='country' name='country' defaultValue={registerState?.payload?.country}/>
                {registerState?.errors?.country && <p className='text-(--error)'>{registerState.errors.country}</p>}
            </div>
            <div>
                <Text type='password' placeholder='Password' id='password' name='password'/>
                {registerState?.errors?.password && <p className='text-(--error)'>{registerState.errors.password}</p>}
            </div>
            <div>
                <Text type='password' placeholder='Confirm Password' id='cpassword' name='cpassword'/>
                {registerState?.errors?.cpassword && <p className='text-(--error)'>{registerState.errors.cpassword}</p>}
            </div>
            <Rounded color='orange'>
                Sign up
            </Rounded>
            <div className='mt-20 text-center text-(--dark)'>
                Already have an acccount? <span className='font-extrabold text-(--secondary-background)'>
                    <Link 
                        href={'/auth/login'}
                    >
                        Login
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