import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
        <h1 className='head-text'>
            Well met Traveller, I go by,
            <span className='old-scroll_text font-semibold drop-shadow'>
          Debasish
        </span>
        </h1>

      <div className='mt-5 flex flex-col gap-4 text-[#4B006E] tracking-wider'>
        <p>
            A game-smith hailing from the lands of India, well-versed in the art of gameplay programming,
            the solving of technical riddles, and the forging of interactive wonders.
        </p>
      </div>

        <div className='py-10 flex flex-col items-center bg-transparent border-t-2 border-[#4B006E]'>
            <h3 className='subhead-text'>Crafts and Proficiencies</h3>
            <div className='mt-16 flex flex-wrap gap-12 justify-center border-t-2 border-[#4B006E] pt-8'>
                {skills.map((skill) =>(
                <div className='skill-card w-20 h-20' key={skill.name}>
                    <div className='skill-bg rounded-xl' />
                        <div className='skill-content rounded-xl flex justify-center items-center'>
                            <img
                                src={skill.imageUrl}
                                alt={skill.name}
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                 </div>
                ))}
            </div>
      </div>

      <div className='py-16'>
          <h3 className='subhead-text'>Tales of Toil and Triumph</h3>
          <div className='mt-5 flex flex-col gap-3 text-[#DF367C]'>
          <p>
              Through many trials and labors, have I sharpened my craft in game-forging (game development), the smithing of tools (Tools Development), and the art of system alchemy (Sytem Optimisation). Behold the tale of mine journey:
          </p>
          </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
                <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    dateClassName="text-[#4B006E] text-sm"
                    iconStyle={{ background: experience.iconBg }}
                    icon={
                        <div className='flex justify-center items-center w-full h-full'>
                            <img
                                src={experience.icon}
                                alt={experience.company_name}
                                className='w-[60%] h-[60%] object-contain'
                            />
                        </div>
                    }
                    contentStyle={{
                        borderBottom: `8px solid ${experience.iconBg}`,
                        boxShadow: "none",
                    }}
                >
                <div>
                  <h3 className='text-[#4B006E] text-xl font-cinzel font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-[#4B006E] font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-[#4B006E] font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-[#DF367C]' />
      <CTA />
    </section>
  );
};

export default About;
