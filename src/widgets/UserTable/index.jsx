import React, { useState } from "react";
import { Table, Button } from "antd";

import "./style.scss";
import "antd/dist/antd.css";

import AddUser from "./Modal/AddUser";
import { useUsers } from "./Modal/useUsers";

const { Column } = Table;

const UserTable = () => {
  const { data, loading } = useUsers();
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <AddUser visible={visible} setVisible={setVisible} loading={loading} />
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
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
