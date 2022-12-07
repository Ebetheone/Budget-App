import React from "react";
import { Modal, Button, Form, Input } from "antd";

import "antd/dist/antd.css";

import { useEditUser } from "../../SettingsTable/Modal/useEditUser";
import { ScaleLoader } from "react-spinners";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const AddUser = ({ setVisible, visible, loading, id }) => {
  const { addUser } = useEditUser(id);
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={addUser}>
          {loading ? (
            <ScaleLoader
              color="#1890FF"
              height={50}
              speedMultiplier={1.5}
              width={5}
            />
          ) : (
            <div>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="firstName" label="First Name">
                <Input />
              </Form.Item>
              <Form.Item name="lastName" label="Last Name">
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                type="password"
                rules={[
                  {
                    required: true,
                    message: "Please use uppercase and lowercase with digits!",
                    pattern: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => setVisible(false)}
                >
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

export default AddUser;
