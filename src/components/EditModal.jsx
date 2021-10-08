import React, {useState} from "react";
import { Modal, Form, Input, Select } from "antd";

const EditModal = ({modalState = false, dataToUpdate = {}, closeModal, key}) => {
  const {customerType, printerModel} = dataToUpdate;
  return (
    <Modal
      key={key}
      title="Basic Modal"
      visible={modalState}
      onCancel={() => closeModal()}
    >
      <>
        <Form.Item label="Printer Model" name="printerModel">
          <Input defaultValue={printerModel}/>
        </Form.Item>
        <Form.Item label="Customer type" name="customerType">
          <Select defaultValue={customerType}>
            <Select.Option value="opcion1">opcion1</Select.Option>
            <Select.Option value="opcion2">opcion2</Select.Option>
          </Select>
        </Form.Item>
      </>
    </Modal>
  );
}

export default EditModal;
