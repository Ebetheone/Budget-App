import React, { useState } from "react";
import { Space, Table, Modal, Button } from "antd";

import "./style.scss";
import "antd/dist/antd.css";

const { Column } = Table;

const TableActions = () => {
  return (
    <div>
      <div className="Border">
        <div className="flex">
          <div className="title">Бүгд</div>
        </div>
        <div className="Table">
          <Table>
            <Column title="Орлого" dataIndex="orlogo" key="orlogo" />
            <Column title="Зарлага" dataIndex="zarlaga" key="zarlaga" />
            <Column title="Тайлан" dataIndex="tailan" key="tailan" />
          </Table>
        </div>
      </div>
    </div>
  );
};
export default TableActions;
