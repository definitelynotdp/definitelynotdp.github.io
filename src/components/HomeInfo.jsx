import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1) {
        return (
            <div className="border-4 border-[#4B006E] rounded-xl bg-black-500/70 p-6 shadow-lg mx-5">
                <h1 className="sm:text-xl sm:leading-snug text-center parchment-bg py-4 px-8 text-[#B2F7EF]">
                    Hail, traveler! I am
                    <span className="font-semibold mx-2 text-[#DCCCFF]">Debasish</span> ⚔️
                    <br />
                    A game-smith from the lands of India
                </h1>
            </div>
        );
    }
    if (currentStage === 2) {
        return (
            <div className="border-4 border-[#4B006E] rounded-xl bg-black-500/70 p-6 shadow-lg mx-5">
                <p className='sm:text-xl sm:leading-snug text-center parchment-bg py-4 px-8 text-[#B2F7EF]'>
                    Through many guilds have I toiled, <br/> honing my craft and gathering wisdom.
                </p>
                <Link to='/about' className='glassmorphism neo-btn'>
                    Unravel the tale
                    <img src={arrow} alt='arrow' className='invert w-4 h-4 object-contain'/>
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className="border-4 border-[#4B006E] rounded-xl bg-black-500/70 p-6 shadow-lg mx-5">
                <p className='sm:text-xl sm:leading-snug text-center parchment-bg py-4 px-8 text-[#B2F7EF]'>
                    Many ventures have I steered to triumph. <br />
                    Witness my Legacy.
                </p>

                <Link to='/projects'className='glassmorphism neo-btn'>
                    Behold my Labors
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className="border-4 border-[#4B006E] rounded-xl bg-black-500/70 p-6 shadow-lg mx-5">
                <p className='sm:text-xl sm:leading-snug text-center parchment-bg py-4 px-8 text-[#B2F7EF]'>
                    In need of a skilled craftsman for thy grand endeavor? <br />
                    A mere parchment away, I await thy summons.
                </p>

                <Link to='/contact' className='glassmorphism neo-btn'>
                    Send thy raven
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }
    return null;
};
export default HomeInfo;
