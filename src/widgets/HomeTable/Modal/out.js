import {
  Modal,
  Button,
  Form,
  InputNumber,
  Calendar,
  Input,
  Select,
} from "antd";

import "antd/dist/antd.css";

import { useEditBudget } from "./useEditBudget";
import { ScaleLoader } from "react-spinners";
import { useEffect } from "react";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

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

const ZarlagaNemeh = ({
  setVisible,
  visible,
  loading,
  id,
  setTableModified,
}) => {
  const { addZarlaga } = useEditBudget(id);

  useEffect(() => {
    setTableModified((prev) => !prev);
  }, [visible]);

  const onFinish = (values) => {
    setVisible(false);
    setTableModified((prev) => !prev);
    addZarlaga(values);
  };

  return (
    <div>
      <Modal
        title="Зарлага нэмэх"
        visible={visible}
        onCancel={() => {
          setVisible(false);
          setTableModified((prev) => !prev);
        }}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          {loading ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ScaleLoader
                color="#1890FF"
                height={50}
                speedMultiplier={1.5}
                width={5}
              />
            </div>
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
                name="zarlaga"
                label="Зарлага"
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
                name="type"
                label="Төрөл"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Select
                  defaultValue="Төлбөр"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Төлбөр",
                      label: "Төлбөр",
                    },
                    {
                      value: "Хүнс",
                      label: "Хүнс",
                    },
                    {
                      value: "Бусад",
                      label: "Бусад",
                    },
                  ]}
                />
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

export default ZarlagaNemeh;
