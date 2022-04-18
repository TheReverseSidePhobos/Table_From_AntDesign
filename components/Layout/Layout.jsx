import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={style.page}>
      <div>
        <Header className={style.header} />
      </div>
      <div className={style.main}>{children}</div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
