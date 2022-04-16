import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-screen-md flex-col items-center justify-between p-4 text-center">
      <div className="hidden w-full space-x-6 text-sm sm:flex">
        <p className="mr-auto">
          © 2022 <strong>Sharif Hayudini.</strong>
        </p>
        <span>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:shayudini@gmail.com"
            className="font-semibold hover:text-stone-600 dark:hover:text-stone-400"
          >
            shayudini@gmail.com
          </a>
        </span>{' '}
        <span>
          <strong>Tel:</strong>{' '}
          <a
            href="tel:+905301556059"
            className="font-semibold hover:text-stone-600 dark:hover:text-stone-400"
          >
            +90 530 155 6059
          </a>
        </span>
      </div>
      <div className="flex w-full items-center space-x-6 sm:hidden">
        <p className="mr-auto">
          © 2022 <strong>Sharif Hayudini.</strong>
        </p>
        <a
          className="text-xl font-black"
          href="mailto:shayudini@gmail.com"
        >
          <FiMail />
        </a>
        <a
          className="text-xl font-black"
          href="tel:+90 530 155 6059"
        >
          <FiPhone />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
