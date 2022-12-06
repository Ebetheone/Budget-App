import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { categories } from "../../utils/menu";
import "./style.scss";

const { Sider } = Layout;

const Sidebar = () => {
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
            gap: "10px",
            alignItems: "center",
          }}
        >
          {categories.map((dat) => (
            <Menu.Item eventKey={dat.key} key={dat.key} icon={dat.icon}>
              <Link to={dat.path}>{dat.label}</Link>
            </Menu.Item>
          ))}
          <div className="bottom">
            <Menu.Item icon={<AppstoreOutlined />} eventKey={key}>
              <Link to={"/"} onClick={() => localStorage.removeItem("token")}>
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
