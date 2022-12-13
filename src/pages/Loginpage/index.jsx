import React, { useState } from "react";
import { Button, Form, Input, Space } from "antd";
import { ScaleLoader } from "react-spinners";

import { useLogin } from "./useLogin";
import { UserOutlined, LockOutlined, MehOutlined } from "@ant-design/icons";

import "./style.scss";
import "antd/dist/antd.css";

const Login = () => {
  const { login, loading, register } = useLogin();
  const [change, setChange] = useState(false);

  return (
    <div>
      {change ? (
        <div className="Login">
          {loading ? (
            <ScaleLoader
              color="#1890FF"
              height={50}
              speedMultiplier={1.5}
              width={5}
            />
          ) : (
            <div className="grid">
              <img src="/logo.png" alt="logo" className="logoc" />
              <div className="rounded">
                <p className="title">Бүртгүүлэх</p>
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={register}
                  autoComplete="off"
                >
                  <Form.Item
                    name="firstName"
                    style={{ width: 500, marginLeft: 160 }}
                  >
                    <Input
                      size="large"
                      placeholder="Нэр"
                      prefix={<MehOutlined />}
                      name="firstname"
                    />
                  </Form.Item>
                  <Form.Item
                    name="lastName"
                    style={{ width: 500, marginLeft: 160 }}
                  >
                    <Input
                      size="large"
                      placeholder="Овог"
                      prefix={<MehOutlined />}
                      name="lastName"
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    style={{ width: 500, marginLeft: 160 }}
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Зөв имэйл оруулна уу",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="И-мэйл"
                      prefix={<UserOutlined />}
                      name="email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    style={{ width: 500, marginLeft: 160 }}
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
                      placeholder="Нууц үг"
                      prefix={<LockOutlined />}
                      type="password"
                      name="password"
                    />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: 150, marginLeft: 30 }}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="Login">
          {loading ? (
            <ScaleLoader
              color="#1890FF"
              height={50}
              speedMultiplier={1.5}
              width={5}
            />
          ) : (
            <div className="grid">
              <img src="/logo.png" alt="logo" className="logoc" />
              <div className="rounded">
                <p className="title">Нэвтрэх</p>
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={login}
                  autoComplete="off"
                >
                  <Form.Item
                    name="email"
                    style={{ width: 500, marginLeft: 160 }}
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Зөв имэйл оруулна уу",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="И-мэйл"
                      prefix={<UserOutlined />}
                      name="email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    style={{ width: 500, marginLeft: 160 }}
                    rules={[
                      {
                        required: true,
                        message: "Нууц үгээ хийнэ үү.",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Нууц үг"
                      prefix={<LockOutlined />}
                      type="password"
                      name="password"
                    />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                    style={{ width: 520 }}
                  >
                    <Space>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: 150 }}
                      >
                        Нэвтрэх
                      </Button>
                      <Button
                        type="primary"
                        style={{ width: 150 }}
                        htmlType="button"
                        onClick={() => setChange(true)}
                      >
                        Бүртгүүлэх
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
