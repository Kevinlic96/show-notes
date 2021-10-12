import React, { useState } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { getData, updateData } from './../notesApi';

const EditModal = ({
  modalState = false,
  dataToUpdate = {},
  closeModal,
  nkey,
}) => {
  const { key, customerType, printerModel } = dataToUpdate;
  const [form] = Form.useForm();
  const notesData = getData();

  const onFinish = (values) => {
    //const nData = notesData.filter((note) => note.key !== dataToUpdate.key);
    //const dataNotes = { key, ...values };
    //  updateData([dataNotes, ...nData]);
    //  closeModal();
    console.log(values);
  };

  return (
    <Modal
      key={nkey}
      title="Basic Modal"
      visible={modalState}
      onCancel={() => closeModal()}
      onOk={form.submit}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="Printer Model" name="printerModel">
          <Input defaultValue={printerModel} />
        </Form.Item>
        <Form.Item label="Customer type" name="customerType">
          <Select defaultValue={customerType}>
            <Select.Option value="opcion1">opcion1</Select.Option>
            <Select.Option value="opcion2">opcion2</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
