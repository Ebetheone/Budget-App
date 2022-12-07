import React, { useState } from "react";
import { Space, Table, Modal } from "antd";
import { Navigate } from "react-router-dom";

import "./style.scss";
import "antd/dist/antd.css";

import EditUser from "./Modal/EditUser";
import { useEditUser } from "./Modal/useEditUser";
import { useUsers } from "../UserTable/Modal/useUsers";

const { Column } = Table;
const { confirm } = Modal;

const SettingsTable = () => {
  const { data, loading } = useUsers();
  const { DeleteUser } = useEditUser();

  const [reset, setReset] = useState();
  const [handleEdit, setHandleEdit] = useState();

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
    <div>
      <EditUser
        handleEdit={handleEdit}
        setHandleEdit={setHandleEdit}
        loading={loading}
      />
      <div className="Border">
        <div className="flex">
          <div className="title">Хувийн тохиргоо</div>
        </div>
        <div className="UserTable">
          <Table dataSource={data}>
            <Column title="Email" dataIndex="email" key="Email" />
            <Column
              title="Action"
              key="action"
              render={(_, record) => (
                <Space size="middle">
                  <a onClick={() => setHandleEdit(record)}>Edit</a>
                  <a onClick={() => showDeleteConfirm(record._id)}>Delete</a>
                  <a onClick={() => setReset(record)}>Reset Password</a>
                </Space>
              )}
            />
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SettingsTable;
