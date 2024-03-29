import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { categories } from "../utils/menu";
import { useUserContext } from "../context/user.context";
import "./style.scss";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const { setUserData } = useUserContext();
  const logout = async () => {
    setUserData({});
    localStorage.clear("token");
    localStorage.clear("userId");
    window.location.reload();
  };
  let key = categories.length + 1;
  return (
    <Layout>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            width: "300px",
            height: "100%",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            left: "0",
            top: "0",
            paddingTop: "50px",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <div className="logo">Financial System</div>
          {categories.map((dat) => (
            <Menu.Item eventKey={dat.key} key={dat.key} icon={dat.icon}>
              <Link to={dat.path}>{dat.label}</Link>
            </Menu.Item>
          ))}
          <div className="bottom">
            <Menu.Item icon={<AppstoreOutlined />} eventKey={key}>
              <Link to={"/"} onClick={logout}>
                LOG OUT
              </Link>
            </Menu.Item>
          </div>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
