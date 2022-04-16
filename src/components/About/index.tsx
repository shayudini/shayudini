import Link from 'next/link';

import { motion } from 'framer-motion';

import { GenericButton } from 'components/common/Button';

const heading = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
const paragraph = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
};
const anchor = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
const About = () => {
  return (
    <main className="container flex h-full items-center justify-center text-center">
      <section className="flex flex-col space-y-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heading}
          className="text-[2.75rem] font-bold sm:text-6xl md:text-8xl"
        >
          Hi, I&#39;m Sharif.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={paragraph}
          className="mx-auto mt-12 max-w-sm text-left text-base font-medium tracking-wider sm:max-w-xl sm:text-lg lg:text-xl"
        >
          I&#39;ve been working with computer networks for
          over 10 years. I also run a small structured
          cabling business, and help out my wife with her
          commerce work.
          <br />
          <br />
          I&#39;ve picked up coding in a little over a year
          now (self-taught), and I&#39;m absolutely in love
          with it!
        </motion.p>
        <Link passHref href={'/portfolio'}>
          <motion.a
            tabIndex={-1}
            initial="hidden"
            animate="visible"
            variants={anchor}
            className="w-fit mx-auto"
          >
            <GenericButton className="mx-auto rounded px-4 py-2 font-semibold tracking-wider">
              View Projects
            </GenericButton>
          </motion.a>
        </Link>
      </section>
    </main>
  );
};
export default About;
