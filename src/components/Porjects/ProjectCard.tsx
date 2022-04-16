import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { FiCode, FiLink, FiX } from 'react-icons/fi';

interface IProps {
  open: boolean;
  close: () => void;
}

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
  hidden: { opacity: 0, scale: 0 },
};

const ProjectCard: any = ({
  open,
  close,
  project,
}: any) => {
  if (!open) return null;
  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-10 flex items-center justify-center"
      aria-modal="true"
      open={open}
      onClose={close}
    >
      <div
        className="fixed inset-0 bg-stone-700 opacity-75"
        onClick={close}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="relative top-5 flex h-[85%] w-[clamp(50%,_900px,_90%)] flex-col rounded bg-stone-100 dark:bg-stone-900 md:h-[min(75%,_500px)] md:flex-row"
      >
        <div className="relative h-2/5 md:h-full md:w-3/5">
          <Image
            src={project.images[0]}
            layout="fill"
            priority
            alt="someimage"
            className="h-full w-full rounded-t object-scale-down"
          />
        </div>
        <div className="relative flex h-3/5 flex-col justify-evenly space-y-2 p-4 md:h-full md:w-2/5">
          <button
            className="absolute right-5 top-5 cursor-pointer text-3xl"
            onClick={close}
          >
            <FiX title="Close" />
          </button>
          <span className="text-sm font-semibold md:text-base">
            Project
          </span>
          <h3 className="font-bold md:text-3xl">
            {project.title}
          </h3>
          <ul className="flex flex-wrap text-xs md:text-base">
            {project.tags.map((tag: any, index: number) => (
              <li
                className="my-1 mr-2 rounded-sm border border-stone-400 px-1 dark:border-stone-500"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <span className="text-sm font-semibold md:text-base">
            About
          </span>
          <p
            className="scrollbar-thin scrollbar-thumb-stone-700 dark:scrollbar-thumb-stone-300 inline-block h-40 overflow-y-scroll rounded-sm border border-stone-400 p-3 text-sm dark:border-stone-500 md:h-80 md:text-base whitespace-pre-wrap"
            tabIndex={1}
          >
            {project.description}
          </p>
          <div className="mt-2 flex space-x-2">
            <Link href={project.demo} passHref>
              <a
                target={'_blank'}
                className="flex items-center rounded-sm border-2 border-stone-900 bg-stone-900 px-3 py-1 text-sm tracking-wider text-stone-100 transition-all duration-200 hover:bg-stone-100 hover:text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900 dark:hover:border-stone-100 dark:hover:bg-stone-900 dark:hover:text-stone-100 dark:focus:border-stone-900 dark:focus:ring-stone-900 md:text-base"
              >
                <FiLink className="mr-2 text-xs" />
                Demo
              </a>
            </Link>
            <Link href={project.code} passHref>
              <a
                target={'_blank'}
                className="flex items-center rounded-sm border-2 border-stone-900 bg-stone-900 px-3 py-1 text-sm tracking-wider text-stone-100 transition-all duration-200 hover:bg-stone-100 hover:text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900 dark:hover:border-stone-100 dark:hover:bg-stone-900 dark:hover:text-stone-100 dark:focus:border-stone-900 dark:focus:ring-stone-900 md:text-base"
              >
                <FiCode className="mr-2 text-xs" />
                Code
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </Dialog>
  );
};
export default ProjectCard;
