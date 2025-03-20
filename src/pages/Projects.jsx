import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='old-scroll_text drop-shadow font-semibold'>
          Labors
        </span>
      </h1>

      <p className='text-amber-700 mt-2 leading-relaxed'>
          Through countless trials and triumphs, I have forged many creations,
          yet these stand as the most cherished of my craft.
          Many are laid bare for all to see, open to those with keen minds and steady hands.
          Shouldst thou find aught that stirs thy spirit, venture forth into the code, lend thy wisdom,
          and together we shall weave wonders anew. Thy fellowship is most welcome!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-cinzel font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-amber-800'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-lora'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-[#8c2d2a]'
                >
                  Play it Here
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    <hr className='border-amber-50' />
  <CTA />
    </section>
  );
};

export default Projects;
