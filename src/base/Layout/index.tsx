import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import Contact from 'components/common/Contact';
import React from 'react';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Contact />
      {children}
    </>
  );
};

export default Layout;
