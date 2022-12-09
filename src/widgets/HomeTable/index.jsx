import React, { useState } from "react";
import { Space, Table, Modal, Button } from "antd";

import "./style.scss";
import "antd/dist/antd.css";

const TableActions = () => {
  const [data, setData] = useState([]);

  const { Column } = Table;

  return (
    <div>
      <div className="Border">
        <div className="flex">
          <div className="title">Бүгд</div>
        </div>
        <div className="Table">
          <Button>Орлого нэмэх</Button>
          <Button>Зарлага нэмэх</Button>
          <Table dataSource={data}>
            <Column title="Орлого" dataIndex="orlogo" key="orlogo" />
            <Column title="Зарлага" dataIndex="zarlaga" key="zarlaga" />
          </Table>
        </div>
      </div>
    </div>
  );
};
export default TableActions;
