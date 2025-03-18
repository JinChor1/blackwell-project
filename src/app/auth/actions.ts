"use server"
import { z } from 'zod';
import { isMobilePhone, isStrongPassword } from 'validator';
import isEmail from 'validator/lib/isEmail';

// simulate promise delay
const delay = () => new Promise(res=>setTimeout(res,1000));

// mock data for login
const testUser = {
    id: 1,
    username: 'Blackwell',
    password: '123456789',
}

const country = [
    'malaysia',
    'vietnam',
    'thailand',
    'others',
]

const loginSchema = z.object({
    username: z.string()
                .min(1, { message: "Username is required" }),
    password: z.string()
                .min(1, { message: "Password is required" }) ,
});

const registerSchema = z.object({
    username: z.string()
                .min(1, { message: "Username is required" }),
    email: z.string()
                .trim()
                .refine(isEmail,{ message: "Invalid email address" }),
    tel: z.string()
            .refine(isMobilePhone,{ message: "Invalid phone number" }),
    country: z.string()
            .min(1, { message: "Country is required" })
            .refine((value)=>country.includes(value),{ message: "Invalid country value" }),
    password: z.string()
                .refine(isStrongPassword,{ message: "Password not strong enough. At least 8 characters, with at least a lowercase, uppercase, symbol, numbers each" }),
    cpassword: z.string()
}).refine(
    (schema)=>{
        return schema.password===schema.cpassword
    },{  message: "Password does not match", path: ['cpassword'],}
);

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function login(prevState: any, formData: FormData) {
    await delay();
    const result = loginSchema.safeParse(Object.fromEntries(formData));
    if (!result.success){
        return{
            errors: result.error.flatten().fieldErrors,
            payload: {username: (formData.get('username') || "") as string}
        }
    }
    
    const {username, password} = result.data;
    if (username!==testUser.username || password!==testUser.password) {
        return{
            errors:{
                username: ["Invalid username or password"],
                password: ["Invalid username or password"],
            },
            payload: {username}
        }
    }

    return{
        success:{
            username: username,
            token: 'FutureTokenHere'
        }
    }
}

export async function register(prevState: any, formData: FormData) {
    await delay();
    const result = registerSchema.safeParse(Object.fromEntries(formData));

    if (!result.success){
        return{
            errors: result.error.flatten().fieldErrors,
            payload: {
                username: (formData.get('username') || "") as string,
                email: (formData.get('email') || "") as string,
                tel: (formData.get('tel') || "") as string,
                country: (formData.get('country') || "") as string,
            }
        }
    }
    
    const {username} = result.data;

    return{
        success:{
            username: username,
            token: 'FutureTokenHere'
        }
    }
}

export async function logout() {}