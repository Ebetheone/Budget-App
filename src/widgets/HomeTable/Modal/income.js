import React, { useEffect } from "react";
import { Modal, Button, Form, InputNumber, Calendar, Input } from "antd";

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

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const OrlogoNemeh = ({ setVisible, visible, loading, setTableModified }) => {
  const { addOrlogo } = useEditBudget();

  useEffect(() => {
    setTableModified((prev) => !prev);
  }, [visible]);

  const onFinish = (values) => {
    setVisible(false);
    setTableModified((prev) => !prev);
    addOrlogo(values);
  };
  return (
    <div>
      <Modal
        title="Орлого нэмэх"
        visible={visible}
        onCancel={() => {
          setVisible(false);
          setTableModified((prev) => !prev);
        }}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          {loading ? (
            <ScaleLoader
              color="#1890FF"
              height={50}
              speedMultiplier={1.5}
              width={5}
            />
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Form.Item
                name="orlogo"
                label="Орлого"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputNumber addonAfter="₮" defaultValue={0} />
              </Form.Item>
              <Form.Item
                name="detail"
                label="Утга"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="date"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Calendar
                  fullscreen={false}
                  onPanelChange={onPanelChange}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
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

export default OrlogoNemeh;
