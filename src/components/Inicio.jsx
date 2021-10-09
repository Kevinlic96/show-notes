import React, { useState } from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Select,
  Button,
} from 'antd';
import { v4 as uuid } from 'uuid';

import NotesTable from './TableComponent';
import Modal from './EditModal';
import {insertData, getData, deleteData} from './../notesApi';

const Inicio = () => {
  const { Header, Content, Footer } = Layout;
  const [objectNotes, setObjectNotes] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editRow, setEditRow] = useState([]);
  const [tableId, setTableId] = useState(uuid());
  const [modalId, setModalId] = useState(uuid());

  const notesData = getData(); //here is getData Method call to get notes from the localStorage

  const onFinish = (values) => {
    const dataNotes = { key: uuid(), ...values };
    insertData([dataNotes, ...notesData]);
    //here is the table key change to force the render of the table after add a new data.
    setTableId(uuid());
  };

  const deleteNotes = (sKey) => {
    const newData = [...objectNotes];
    const index = objectNotes.findIndex((nData) => nData.key === sKey);
    newData.splice(index, 1);
    setObjectNotes(newData);
  
  };

  const deleteNotes2 = (sKey) => {
    const newData = notesData.filter((data) => data.key !== sKey);
    deleteData(newData);
    //here is the table key change to force the render of the table after add a new data.
    setTableId(uuid());
  };

  const handleEdit = (editData) => {
    setIsModalVisible(true);
    setEditRow(editData);
    //here is key changes to force the render of the modal after every open,
    //and see the change of the information.
    setModalId(uuid());
  };

  const closeModal = () => {
    setIsModalVisible(false);
  }

  const columns = [
    {
      title: 'Printer Model',
      dataIndex: 'printerModel',
      key: 'printerModel',
      editable: true,
      render: (texto) => <a>{texto}</a>,
    },
    {
      title: 'Customer Type',
      dataIndex: 'customerType',
      key: 'customerType',
      editable: true,
    },
    {
      title: 'Operation2',
      render: (record) => (
        <Button type="link" onClick={() => handleEdit(record)}>
          Edit
        </Button>
      ),
    },
    {
      title: 'operation',
      render: (record) => (
        <Button type="primary" onClick={() => deleteNotes2(record.key)} danger>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            Inicio
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Form
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 7 }}
            onFinish={onFinish}
          >
            <Form.Item label="Printer Model" name="printerModel">
              <Input />
            </Form.Item>
            <Form.Item label="Customer type" name="customerType">
              <Select>
                <Select.Option value="opcion1">opcion1</Select.Option>
                <Select.Option value="opcion2">opcion2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <NotesTable data={notesData} columns={columns} key={tableId}/>
          <Modal key={modalId} modalState={isModalVisible} dataToUpdate={editRow} closeModal={closeModal}/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default Inicio;
