import Link from 'next/link';
import { useState } from 'react';
import {
  FiAtSign,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiUser,
  FiX,
} from 'react-icons/fi';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { GenericButton } from 'components/common/Button';
import { social } from 'lib/constants';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
  hidden: { opacity: 0, y: -100 },
};

const Contact = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute top-16 right-0 lg:top-1/2 lg:left-0 lg:flex lg:-translate-y-1/2">
      <GenericButton
        className="group cursor-pointer space-x-2 rounded-bl border-2 border-l-0 bg-stone-900 p-2 text-stone-100 hover:border-stone-900 hover:bg-stone-100 hover:text-stone-900 dark:bg-stone-100 dark:text-stone-900 dark:hover:border-stone-100 dark:hover:bg-stone-900 dark:hover:text-stone-100 lg:rounded-r lg:p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiAtSign className="hidden text-2xl group-hover:animate-ping-once lg:inline-block" />
        <p className="font-semibold lg:hidden">Contact</p>
      </GenericButton>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 flex items-center justify-center"
        aria-modal="true"
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <div
          className="fixed inset-0 bg-stone-700 opacity-75"
          onClick={() => setIsOpen(!isOpen)}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="relative top-5 flex h-[85%] w-[clamp(50%,_900px,_90%)] flex-col rounded bg-stone-100 dark:bg-stone-900 md:h-[min(75%,_500px)] md:flex-row"
        >
          <button
            className="absolute right-3 top-3 z-10 cursor-pointer text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiX title="Close" />
          </button>
          <div className="md:grid-col-3 flex h-full w-full flex-col items-center justify-evenly gap-4 p-4 md:grid md:grid-cols-1 md:gap-6">
            <div className="h-min self-center md:col-span-full">
              <div className="px-4 sm:px-0">
                <h3 className="text-2xl font-bold leading-6 text-stone-900 dark:text-stone-100">
                  Get in touch
                </h3>
              </div>
            </div>
            <form
              action="https://formsubmit.co/shayudini@gmail.com"
              method="POST"
              className="h-full w-full"
            >
              <input
                type="hidden"
                name="_next"
                value="https://www.hayudini.dev/thanks"
              />
              <div className="h-full overflow-hidden shadow sm:rounded-md">
                <div className="h-full bg-stone-300 px-4 py-5 dark:bg-stone-700 sm:p-6">
                  <div className="grid h-full grid-cols-6 gap-2">
                    <div className="col-span-full sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="flex items-center text-sm font-medium text-stone-700 dark:text-stone-200"
                      >
                        <FiUser className="mr-2" />
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="mt-1 block w-full rounded-md border-stone-300 bg-stone-50 p-2 shadow-sm dark:bg-stone-900"
                        placeholder="John Dev"
                      />
                    </div>

                    <div className="col-span-full sm:col-span-2">
                      <label
                        htmlFor="email-address"
                        className="flex items-center text-sm font-medium text-stone-700 dark:text-stone-200"
                      >
                        <FiMail className="mr-2" />
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 bg-stone-50 p-2 shadow-sm dark:bg-stone-900"
                        placeholder="handler@domain.com"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="flex items-center text-sm font-medium text-stone-700 dark:text-stone-200"
                      >
                        <FiPhone className="mr-2" />
                        Phone number
                      </label>
                      <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="phone"
                        className="mt-1 block w-full rounded-md border-gray-300 bg-stone-50 p-2 shadow-sm dark:bg-stone-900"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>

                    <div className="col-span-full sm:col-span-4">
                      <label
                        htmlFor="about"
                        className="flex items-center text-sm font-medium text-stone-700 dark:text-stone-200"
                      >
                        <FiMessageSquare className="mr-2" />
                        Message
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 bg-stone-50 p-2 shadow-sm dark:bg-stone-900"
                          placeholder="{ ...content }"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="col-start-5 place-self-center text-center sm:col-span-2 sm:col-start-5 sm:px-6">
                      <GenericButton
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm "
                      >
                        Submit <FiSend />
                      </GenericButton>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="grid">
              <ul className="col-start-12 flex space-x-6 text-xl sm:text-2xl">
                {social.map((link) => {
                  return (
                    <li
                      className="rounded-sm border p-1"
                      key={link.key}
                    >
                      <span className="flex justify-center flex-col items-center">
                        <Link href={link.path} passHref>
                          <a download target={'_blank'}>
                            {link.icon}
                          </a>
                        </Link>
                        <p className="text-xs">
                          {link.title}
                        </p>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      </Dialog>
    </div>
  );
};
export default Contact;
