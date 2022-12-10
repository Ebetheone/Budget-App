import React from "react";
import { Modal, Button, Form, Input } from "antd";

import "antd/dist/antd.css";

import { ScaleLoader } from "react-spinners";
import { useEditBudget } from "./useEditBudget";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const OrlogoNemeh = ({ setVisible, visible, loading, id }) => {
  const { addOrlogo } = useEditBudget(id);
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={addOrlogo}>
          {loading ? (
            <ScaleLoader
              color="#1890FF"
              height={50}
              speedMultiplier={1.5}
              width={5}
            />
          ) : (
            <div>
              <Form.Item name="orlogo" label="Орлого">
                <Input />
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

export default OrlogoNemeh;
