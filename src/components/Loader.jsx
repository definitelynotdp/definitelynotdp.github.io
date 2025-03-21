import { Html } from "@react-three/drei";

const Loader = () => {
    return (
        <Html center>
            <div className="flex justify-center items-center w-40 h-40 relative">
                {/* Glowing Arcane Arc */}
                <div className="absolute w-full h-full border-4 border-[#4B006E] border-opacity-50 rounded-full animate-spin-slow"
                     style={{
                         borderStyle: "dashed", // Makes the spin visible
                         maskImage: "conic-gradient(transparent 40%, white 60%)",
                     }}
                ></div>

                {/* Inner Glowing Orb */}
                <div className="w-16 h-16 bg-violet-800 rounded-full shadow-xl shadow-violet-200 flex justify-center items-center">
                    <span className="text-white text-lg font-bold animate-pulse">⚜️</span>
                </div>
            </div>
        </Html>
    );
};

export default Loader;