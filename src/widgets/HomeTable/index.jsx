import "./style.scss";
import { Space, Table, Modal, Button } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import Data from "../../data/home.json";
import AddUser from "./Modal/AddUser";
import EditUser from "./Modal/EditUser";
const { Column } = Table;
const { confirm } = Modal;

const TableActions = () => {
  const [visible, setVisible] = useState(false);
  const showDeleteConfirm = () => {
    confirm({
      title: "Та устгахдаа итгэлтэй байна уу?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("Deleted");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <>
      <AddUser visible={visible} setVisible={setVisible} />
      <EditUser visible={visible} setVisible={setVisible} />
      <div className="Border">
        <div className="flex">
          <div className="title">Бүгд</div>
          <Button type="primary" onClick={() => setVisible(true)}>
            Add
          </Button>
        </div>
        <div className="Table">
          <Table dataSource={Data}>
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Action"
              key="action"
              render={(_, record) => (
                <Space size="middle">
                  <a onClick={() => setVisible(true)}>Edit</a>
                  <a onClick={() => showDeleteConfirm()}>Delete</a>
                </Space>
              )}
            />
          </Table>
        </div>
      </div>
    </>
  );
};
export default TableActions;
