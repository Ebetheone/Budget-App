import React from "react";
import { Modal, Button, Form, Input } from "antd";
import "antd/dist/antd.css";

import { useEditUser } from "./useEditUser";
import { ScaleLoader } from "react-spinners";
import { LockOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ResetUser = ({ setHandleReset, handleReset, loading }) => {
  const { resetUser } = useEditUser();
  return (
    <div>
      <Modal
        title="Нууц үг солих"
        visible={!!handleReset}
        onCancel={() => setHandleReset(undefined)}
        footer={null}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={(formData) =>
            resetUser({ ...formData, _id: handleReset._id })
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
              <Form.Item
                label="Нууц үг"
                name="password"
                rules={[
                  {
                    required: true,
                    message:
                      "Нууц үгэнд том үсэг, жижиг үсэг, тоо орсон байна.",
                    pattern: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  type="password"
                  name="password"
                />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => setHandleReset(false)}
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

export default ResetUser;
