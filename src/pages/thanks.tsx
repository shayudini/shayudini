import Head from 'next/head';
import { ProjectItem } from 'components/Porjects';
import { loadProjects } from 'lib/utils/fetch-projects';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import { GenericButton } from 'components/common/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ThankYou = ({ PROJECTS }: any) => {
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
  return (
    <>
      <Head>
        <title>Sharif Hayudini | Thank You!</title>
        <meta
          name="description"
          content="Sharif Hayudini's porfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header PROJECTS={PROJECTS} />
      <main className="container flex h-full items-center justify-center text-center">
        <section className="flex flex-col space-y-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={heading}
            className="text-5xl font-bold sm:text-6xl max-w-md"
          >
            Thank you for getting in touch!
          </motion.h1>
            <br />
          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraph}
            className="mx-auto mt-12 max-w-sm text-left text-base font-medium tracking-wider sm:max-w-xl sm:text-lg lg:text-xl"
          >
            I appreciate you contacting me, and I will make
            sure to get back to you as soon as I can.
            <br />
            <br />
            Cheers!
          </motion.p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const data = await loadProjects();

  const PROJECTS = data.projects;

  return {
    props: {
      PROJECTS,
    },
  };
}

export default ThankYou;
