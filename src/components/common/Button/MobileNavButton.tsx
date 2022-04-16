import { useContext, useEffect } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';

import { GlobalContext } from 'lib/context';

const MobileNavButton: any = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const className = 'overflow-hidden';
    const element = window.document.body;
    if (state.mobileNav) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [state.mobileNav]);

  return (
    <button
      className={`z-50 rounded-[4px] border p-1 dark:border-stone-500 md:hidden`}
      title="Toggle Mobile Navigation"
      onClick={() => dispatch({ type: 'ToggleMobileNav' })}
    >
      {state.mobileNav ? (
        <FiX className={``} />
      ) : (
        <FiMenu className={``} />
      )}
    </button>
  );
};

export default MobileNavButton;
