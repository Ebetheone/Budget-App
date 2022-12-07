import { Modal, Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useEditUser } from "./useEditUser";
import { ScaleLoader } from "react-spinners";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const EditUser = ({ setHandleEdit, handleEdit, loading }) => {
  const { editUser } = useEditUser();
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={!!handleEdit}
        onCancel={() => setHandleEdit(undefined)}
        footer={null}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={(formData) =>
            editUser({ ...formData, _id: handleEdit._id })
          }
        >
          {loading ? (
            <ScaleLoader
              color="#1890FF"
              height={50}
              speedMultiplier={1.5}
              width={5}
            />
          ) : (
            <div>
              <Form.Item name="firstName" label="First Name">
                <Input />
              </Form.Item>
              <Form.Item name="lastName" label="Last Name">
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="password"
                rules={[
                  {
                    required: true,
                    message: "Please use uppercase and lowercase with digits!",
                    pattern: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default EditUser;
