import React from 'react';
import { Table } from 'antd';

const TableComponent = ({ data }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        {
          text: 'NVIDIA',
          value: 'NVIDIA'
        },
        {
          text: 'AMD Radeon',
          value: 'AMD Radeon'
        }
      ],
      onFilter: (v, i) => i.name.includes(v)
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size'
    },
    {
      title: 'Index',
      dataIndex: 'index',
      key: 'index'
    },
    {
      title: 'GPU',
      dataIndex: 'GPU',
      key: 'GPU'
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year
    }
  ];
  const dataSource = data.map((item) => ({ ...item, key: item.id }));
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: '5' }}
    />
  );
};

export default TableComponent;
