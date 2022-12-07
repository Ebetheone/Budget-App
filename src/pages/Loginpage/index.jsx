import React, { useState } from "react";
import { Button, Form, Input, Space } from "antd";
import { ScaleLoader } from "react-spinners";

import { useLogin } from "./useLogin";

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
            <div className="rounded">
              <p className="title">Register</p>
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
                <Form.Item label="First Name" name="firstName">
                  <Input />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName">
                  <Input />
                </Form.Item>
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
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
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
            <div className="rounded">
              <p className="title">Login</p>
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
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Space>
                    <Button type="primary" htmlType="submit">
                      Log In
                    </Button>
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={() => setChange(true)}
                    >
                      Register
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
