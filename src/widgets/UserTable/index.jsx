import React, { useState } from "react";
import "./style.scss";
import { Space, Table, Modal, Button } from "antd";
import "antd/dist/antd.css";
import AddUser from "./Modal/AddUser";
import EditUser from "./Modal/EditUser";
import { useEditUser } from "./Modal/useEditUser";
import { useUsers } from "./Modal/useUsers";
import { Navigate } from "react-router-dom";
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
            <Column title="Username" dataIndex="username" key="Username" />
            <Column title="Id" dataIndex="_id" key="id" />
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
