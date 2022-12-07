import React, { useState } from "react";
import { Space, Table, Modal, Button } from "antd";
import { Navigate } from "react-router-dom";

import "./style.scss";
import "antd/dist/antd.css";

import AddUser from "./Modal/AddUser";
import EditUser from "../SettingsTable/Modal/EditUser";
import { useEditUser } from "../SettingsTable/Modal/useEditUser";
import { useUsers } from "./Modal/useUsers";

const { Column } = Table;
const { confirm } = Modal;

const UserTable = () => {
  const { data, loading } = useUsers();
  const [visible, setVisible] = useState(false);
  const [handleEdit, setHandleEdit] = useState();
  const { DeleteUser } = useEditUser();
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure delete this task?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        DeleteUser(id);
        <Navigate to="/" />;
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <>
      <AddUser visible={visible} setVisible={setVisible} loading={loading} />
      <EditUser
        handleEdit={handleEdit}
        setHandleEdit={setHandleEdit}
        loading={loading}
      />
      <div className="Border">
        <div className="flex">
          <div className="title">Хэрэглэгчид</div>
          <Button type="primary" onClick={() => setVisible(true)}>
            Add User
          </Button>
        </div>
        <div className="UserTable">
          <Table dataSource={data}>
            <Column title="Email" dataIndex="email" key="Email" />
            <Column title="Id" dataIndex="_id" key="id" />
            <Column title="First Name" dataIndex="firstName" key="FirstName" />
            <Column title="Last Name" dataIndex="lastName" key="LastName" />
            <Column
              title="Action"
              key="action"
              render={(_, record) => (
                <Space size="middle">
                  <a onClick={() => setHandleEdit(record)}>Edit</a>
                  <a onClick={() => showDeleteConfirm(record._id)}>Delete</a>
                </Space>
              )}
            />
          </Table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
