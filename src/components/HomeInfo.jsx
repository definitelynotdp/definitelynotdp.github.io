import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1) {
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center parchment-bg py-4 px-8 text-amber-900 mx-5'>
                Hail, traveler! I am
                <span className='font-semibold mx-2 text-amber-900'>Debasish</span> ⚔️
                <br/>
                A game-smith from the lands of India
            </h1>
        );
    }
    if (currentStage === 2) {
        return (
            <div className='scroll-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Through many guilds have I toiled, <br/> honing my craft and gathering wisdom.
                </p>
                <Link to='/about' className='golden-scroll neo-btn'>
                    Unravel the tale
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    Many ventures have I steered to triumph. <br />
                    Witness my Legacy.
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Behold my Labors
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    In need of a skilled craftsman for thy grand endeavor? <br />
                    A mere parchment away, I await thy summons.
                </p>

                <Link to='/contact' className='ancient-scroll neo-btn'>
                    Send thy raven
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }
    return null;
};
export default HomeInfo;
