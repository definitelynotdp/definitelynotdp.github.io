import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
        <div className='flex justify-center items-center min-h-screen bg-gray-900'>
            <div className='relative w-24 h-24'>
                {/* Glowing Arcane Circle */}
                <div className='absolute inset-0 w-full h-full border-4 border-amber-700 border-opacity-50 rounded-full animate-spin-slow'></div>

                {/* Inner Glowing Orb */}
                <div className='w-16 h-16 bg-indigo-700 rounded-full shadow-xl shadow-amber-700/70 flex justify-center items-center'>
                    <span className='text-white text-lg font-bold animate-pulse'>⚜️</span>
                </div>
            </div>
        </div>
    </Html>
  );
};

export default Loader;
