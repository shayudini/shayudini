import Image from 'next/image';

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiEye } from 'react-icons/fi';

import ProjectCard from 'components/Porjects/ProjectCard';
import { GenericButton } from 'components/common/Button';

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  }),
  hidden: { opacity: 0, y: 20 },
};

const ProjectItem = ({ project, index }: any) => {
  const [isActive, setIsActive] = useState(false);
  const controls = useAnimation();

  const handleModal = () => {
    if (
      document.body.classList.contains('overflow-hidden') &&
      isActive
    ) {
      document.body.classList.remove('overflow-hidden');
    } else {
      document.body.classList.add('overflow-hidden');
    }
    setIsActive(!isActive);
  };
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      className="m-auto h-64 w-full min-w-max max-w-md overflow-hidden rounded-lg shadow-lg sm:h-72"
    >
      <div className="flex h-full w-full flex-col">
        <div className="relative h-full">
          <Image
            alt={project.title}
            src={project.images[0]}
            className="max-h-40 w-full object-cover"
            layout="fill"
          />
        </div>
        <div className="flex w-full bg-stone-200 p-4 dark:bg-stone-900">
          <GenericButton
            className="mx-auto rounded px-4 py-2 font-semibold tracking-wider"
            onClick={handleModal}
          >
            <span className="flex items-center space-x-2">
              <FiEye /> <p>View Project</p>
            </span>
          </GenericButton>
        </div>
      </div>
      <ProjectCard
        open={isActive}
        close={handleModal}
        project={project}
      />
    </motion.div>
  );
};
export default ProjectItem;
