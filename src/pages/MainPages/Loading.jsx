import spinner from '../../assets/other/big.svg'
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className='flex flex-col items-center self-center min-w-screen h-full p-5 gap-8'>
            <motion.img
                src={spinner}
                className="h-48 sm:h-72 md:h-96"
                alt="spinner"
                animate={{ rotate: 360 }} // Rotate along Y-axis
                transition={{ repeat: Infinity, duration: 0.5, ease: 'linear'}} // Infinite rotation with 5-second duration per rotation
            />
            <p className="text-white text-center font-base text-sm sm:text-base md:text-lg">Please wait while your data is bing processed</p>
            <div class="border border-white rounded-full h-2.5 w-40 sm:h-4 sm:w-52 md:w-72">
                <div class={`loaderGradient h-2.5 rounded-full border border-white/20 w-1/4 sm:h-4`} ></div>
            </div>
        </div>
    );
}

export default Loading;