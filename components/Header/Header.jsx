import React from 'react';
import { PageHeader } from 'antd';
import style from './Header.module.scss';

const Header = () => {
  const routes = [
    {
      path: '/index',
      breadcrumbName: 'First-level Menu'
    },
    {
      path: '/first',
      breadcrumbName: 'Second-level Menu'
    },
    {
      path: '/second',
      breadcrumbName: 'Third-level Menu'
    },
    {
      path: '/third',
      breadcrumbName: 'Third-level Menu'
    }
  ];

  return (
    <div className={style.header}>
      <PageHeader
        breadcrumb={{ routes }}
        className="site-page-header"
        onBack={() => null}
        title="App"
      />
    </div>
  );
};

export default Header;
