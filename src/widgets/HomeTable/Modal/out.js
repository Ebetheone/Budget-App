import React from "react";
import { Modal, Button, Form, InputNumber } from "antd";

import "antd/dist/antd.css";

import { useEditBudget } from "./useEditBudget";
import { ScaleLoader } from "react-spinners";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ZarlagaNemeh = ({ setVisible, visible, loading, id }) => {
  const { addZarlaga } = useEditBudget(id);
  return (
    <div>
      <Modal
        title="Зарлага нэмэх"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={addZarlaga}>
          {loading ? (
            <ScaleLoader
              color="#1890FF"
              height={50}
              speedMultiplier={1.5}
              width={5}
            />
          ) : (
            <div>
              <Form.Item name="zarlaga" label="Зарлага">
                <InputNumber addonAfter="₮" defaultValue={0} />
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

export default ZarlagaNemeh;
