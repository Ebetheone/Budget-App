import React, { useState, useContext } from "react";
import { Space, Table, Modal } from "antd";

import "./style.scss";
import "antd/dist/antd.css";

import EditUser from "./Modal/EditUser";
import ResetUser from "./Modal/ResetUser";
import IndexContext from "../../context";

import { useEditUser } from "./Modal/useEditUser";
import { useUsers } from "./Modal/useUsers";

const { Column } = Table;
const { confirm } = Modal;

const SettingsTable = () => {
  const { data, loading } = useUsers();
  const { DeleteUser } = useEditUser();

  const [handleReset, setHandleReset] = useState();
  const [handleEdit, setHandleEdit] = useState();

  const ctx = useContext(IndexContext);
  const haveEmail = ctx.chosenEmail;

  const showDeleteConfirm = (id) => {
    confirm({
      title: "Хаяг устгахдаа итгэлтэй байна уу?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        DeleteUser(id);
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
          <Table dataSource={data}>
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
