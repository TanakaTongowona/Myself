import React from 'react';
import Image from 'next/image'
import { StringKeyframeTrack } from 'three';
import { url } from 'inspector';

interface Props {
    imgURL: string;
    title:string;
    description:string

}
const ProjectCard = ({imgURL, title, description} : Props) => {

      

  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
         <div className='h-[200px] bg-red w-full'
         
         style={{backgroundImage: ` url(${imgURL})`, backgroundSize: 'cover'}}

              >
          </div>
         <div className='relative p-4'>
         <h1 className='text-2xl font-semibold text-white'>{title}</h1>
         <p className='mt-2 text-gray-300 h-[500px]'>{description}</p>
         </div>
    </div>
  );
}

export default ProjectCard;
