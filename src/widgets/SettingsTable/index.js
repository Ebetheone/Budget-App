import React, { useState, useEffect } from "react";
import { Space, Table, Modal } from "antd";

import "./style.scss";
import "antd/dist/antd.css";

import EditUser from "./Modal/EditUser";
import ResetUser from "./Modal/ResetUser";

import { useEditUser } from "./Modal/useEditUser";
import { useUsers } from "../UserTable/Modal/useUsers";
import { useUserContext } from "../../context/user.context";

const SettingsTable = () => {
  const { Column } = Table;
  const { confirm } = Modal;
  const { data, loading } = useUsers();

  const { deleteUser } = useEditUser();
  const [handleReset, setHandleReset] = useState();
  const [handleEdit, setHandleEdit] = useState();

  const { user } = useUserContext();
  console.log(user);
  const [userData, setUserData] = useState([user]);

  const showDeleteConfirm = (id) => {
    confirm({
      title: "Хаяг устгахдаа итгэлтэй байна уу?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteUser(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <div>
      <ResetUser
        handleReset={handleReset}
        setHandleReset={setHandleReset}
        loading={loading}
      />
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
          <Table dataSource={userData}>
            <Column title="И-мэйл" dataIndex="email" key="Email" />
            <Column
              title="Үйлдэл"
              key="action"
              render={(_, record) => (
                <Space size="middle">
                  <a onClick={() => setHandleEdit(record)}>Мэдээлэл засах</a>
                  <a onClick={() => setHandleReset(record)}>Нууц үг солих</a>
                  <a onClick={() => showDeleteConfirm(record._id)}>
                    Хаяг устгах
                  </a>
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
