import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import Image from "next/image";
import * as motion from "motion/react-client";

interface AuthProps {
    params: Promise<{ mode: string }>;
}

export default async function Auth({ params }: AuthProps) {
    const { mode } = await params;

    return (
        <main className="h-screen flex justify-center items-center relative transition-all duration-200 h-[calc-size(auto)] px-5">
            <motion.div className='bg-white rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden my-auto w-full max-w-4xl' layout key={mode}>
                <div className="bg-(--secondary-background) md:flex hidden py-1 md:px-4 justify-center items-center flex">
                    <Image
                        src={'/images/blackwelllogo.png'}
                        alt="Blackwell Global Logo"
                        width={200}
                        height={200}
                    />
                </div>
                {mode == 'login'?
                    <LoginForm/>
                :
                    <RegisterForm/>
                }
            </motion.div>
        </main>
    );
}
