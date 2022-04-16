import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLink } from 'react-icons/fi';
import useWindowSize from 'lib/hooks/useWindowSize';
import { menu, social } from 'lib/constants';
import { GlobalContext } from 'lib/context';

const Header = ({ PROJECTS }: any) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { width } = useWindowSize();

  const ThemeButton = dynamic(() =>
    import('../Button').then((mod) => mod.ThemeButton)
  );

  const ToggleMobileNavButton = dynamic(() =>
    import('../Button').then((mod) => mod.MobileNavButton)
  );
  return (
    <header
      className={`sticky top-0 z-30 bg-stone-200 py-4 text-xl dark:bg-stone-900`}
    >
      <nav
        className={`container flex h-full w-full items-center gap-4`}
      >
        <ul className="hidden space-x-4 text-base md:flex">
          {menu.map((link) => {
            return (
              <li
                className="cursor-pointer"
                title={link.title}
                key={link.key}
              >
                <Link href={link.path} passHref>
                  <a
                    className="flex items-center gap-3 transition-all duration-200 ease-in-out hover:text-stone-500 dark:hover:text-stone-400"
                    onClick={() =>
                      dispatch({ type: 'Reset' })
                    }
                  >
                    {link.icon}
                    {link.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <ToggleMobileNavButton />
        <Link href="/" passHref>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className={`m-auto font-semibold tracking-wide md:order-first md:ml-0`}
          >
            {width <= 1024
              ? 'S. Hayudini'
              : 'Sharif Hayudini'}
          </motion.a>
        </Link>
        <ThemeButton />
        {width >= 600 ? (
          <div
            className={`fixed inset-0 flex w-full justify-around bg-stone-50 px-4 pt-24 text-lg transition-transform duration-300 ease-linear dark:bg-stone-900 md:hidden ${
              state.mobileNav
                ? 'translate-x-0'
                : '-translate-x-full'
            }`}
          >
            <ul className="flex flex-col space-y-4">
              {menu.map((link) => {
                return (
                  <li key={link.key}>
                    <span className="flex items-center space-x-3">
                      {link.icon}
                      <Link href={link.path} passHref>
                        <a
                          onClick={() =>
                            dispatch({ type: 'Reset' })
                          }
                        >
                          {link.title}
                        </a>
                      </Link>
                    </span>
                    <hr className="w-full border-stone-400 dark:border-stone-500" />
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col space-y-8">
              {social.map((link) => {
                return (
                  <li
                    className="rounded-sm p-2"
                    key={link.key}
                  >
                    <span className="flex flex-col items-center space-x-3">
                      <Link href={link.path} passHref>
                        <a
                          onClick={() =>
                            dispatch({ type: 'Reset' })
                          }
                        >
                          {link.icon}
                        </a>
                      </Link>
                      <p className="mt-1 text-xs">
                        {link.title}
                      </p>
                    </span>
                    <hr className="border-1 w-full border-stone-400 dark:border-stone-500" />
                  </li>
                );
              })}
            </ul>
            {PROJECTS.map((project: any) => {
              return (
                <div
                  className={`relative h-52 w-full max-w-xs`}
                  key={project._id}
                >
                  <div className="absolute inset-0 z-30 flex flex-col justify-between bg-stone-900/60 p-4 text-stone-50">
                    <h4 className="font-semibold">
                      Most Recent
                    </h4>

                    <div className="mt-2 flex justify-evenly space-x-2">
                      <Link href={project.code} passHref>
                        <a
                          target={'_blank'}
                          className="flex items-center rounded-sm border-2 border-stone-900 bg-stone-900 px-3 py-1 text-sm tracking-wider text-stone-100 transition-all duration-200 hover:bg-stone-100 hover:text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900 dark:hover:border-stone-100 dark:hover:bg-stone-900 dark:hover:text-stone-100 dark:focus:border-stone-900 dark:focus:ring-stone-900 md:text-base"
                          onClick={() =>
                            dispatch({ type: 'Reset' })
                          }
                        >
                          <FiLink className="mr-2 text-xs" />
                          Demo
                        </a>
                      </Link>
                      <Link href={project.demo} passHref>
                        <a
                          target={'_blank'}
                          className="flex items-center rounded-sm border-2 border-stone-900 bg-stone-900 px-3 py-1 text-sm tracking-wider text-stone-100 transition-all duration-200 hover:bg-stone-100 hover:text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900 dark:hover:border-stone-100 dark:hover:bg-stone-900 dark:hover:text-stone-100 dark:focus:border-stone-900 dark:focus:ring-stone-900 md:text-base"
                          onClick={() =>
                            dispatch({ type: 'Reset' })
                          }
                        >
                          <FiCode className="mr-2 text-xs" />
                          Code
                        </a>
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={project.images[0]}
                    layout="fill"
                    alt="someimage"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className={`fixed inset-0 flex w-full flex-col justify-around bg-stone-50 px-4 pt-24 text-lg transition-transform duration-300 ease-linear dark:bg-stone-900 md:hidden ${
              state.mobileNav
                ? 'translate-x-0'
                : '-translate-x-full'
            }`}
          >
            <ul className="mx-auto flex w-full max-w-sm flex-col space-y-4">
              {menu.map((link) => {
                return (
                  <li key={link.key}>
                    <span className="flex items-center space-x-3">
                      {link.icon}
                      <Link href={link.path} passHref>
                        <a
                          className="font-semibold"
                          onClick={() =>
                            dispatch({ type: 'Reset' })
                          }
                        >
                          {link.title}
                        </a>
                      </Link>
                    </span>
                    <hr className="border-1 w-full border-stone-300 dark:border-stone-600" />
                  </li>
                );
              })}
            </ul>
            <div className="space-y-4 text-left">
              <h3 className="flex w-full items-center justify-start text-lg font-semibold">
                <FiLink className="mr-2" />
                Links
              </h3>
              <ul className="mx-auto flex w-full max-w-sm flex-wrap pt-0">
                {social.map((link) => {
                  return (
                    <li
                      className="mx-auto w-fit rounded-sm border p-2"
                      key={link.key}
                    >
                      <span className="flex flex-col items-center">
                        <Link href={link.path} passHref>
                          <a
                            download
                            target={'_blank'}
                            onClick={() =>
                              dispatch({ type: 'Reset' })
                            }
                          >
                            {link.icon}
                          </a>
                        </Link>
                        <p className="mt-1 text-xs">
                          {link.title}
                        </p>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {PROJECTS.map((project: any) => {
              return (
                <div
                  className={`relative mx-auto h-52 w-full max-w-sm`}
                  key={project._id}
                >
                  <div className="absolute inset-0 z-30 flex flex-col justify-between bg-stone-900/60 p-4 text-stone-50">
                    <h4 className="font-semibold">
                      Most Recent
                    </h4>
                    <div className="mt-2 flex justify-evenly space-x-2">
                      <Link href={project.code} passHref>
                        <a
                          target={'_blank'}
                          className="flex items-center rounded-sm border-2 border-stone-900 bg-stone-900 px-3 py-1 text-sm tracking-wider text-stone-100 transition-all duration-200 hover:bg-stone-100 hover:text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900 dark:hover:border-stone-100 dark:hover:bg-stone-900 dark:hover:text-stone-100 dark:focus:border-stone-900 dark:focus:ring-stone-900 md:text-base"
                          onClick={() =>
                            dispatch({ type: 'Reset' })
                          }
                        >
                          <FiLink className="mr-2 text-xs" />
                          Demo
                        </a>
                      </Link>
                      <Link href={project.demo} passHref>
                        <a
                          target={'_blank'}
                          className="flex items-center rounded-sm border-2 border-stone-900 bg-stone-900 px-3 py-1 text-sm tracking-wider text-stone-100 transition-all duration-200 hover:bg-stone-100 hover:text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900 dark:hover:border-stone-100 dark:hover:bg-stone-900 dark:hover:text-stone-100 dark:focus:border-stone-900 dark:focus:ring-stone-900 md:text-base"
                          onClick={() =>
                            dispatch({ type: 'Reset' })
                          }
                        >
                          <FiCode className="mr-2 text-xs" />
                          Code
                        </a>
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={project.images[0]}
                    layout="fill"
                    alt="someimage"
                  />
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
