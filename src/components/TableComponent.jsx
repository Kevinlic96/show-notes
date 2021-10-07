import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import reactDom from 'react-dom';

const TableComponent = ({ data, columns }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default TableComponent;
