import React, { useState } from "react";
import { Space, Table, Modal, Button } from "antd";

import "./style.scss";
import "antd/dist/antd.css";

const { Column } = Table;

const TableActions = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <div className="Border">
        <div className="flex">
          <div className="title">Бүгд</div>
        </div>
        <div className="Table">
          <Table dataSource={data}>
            <Column title="Орлого" dataIndex="orlogo" key="orlogo" />
            <Button>Орлого нэмэх</Button> {/*ene buttonuud bas ajilku bgama */}
            <Column title="Зарлага" dataIndex="zarlaga" key="zarlaga" />
            <Button>Зарлага нэмэх</Button> {/*ene buttonuud bas ajilku bgama */}
          </Table>
        </div>
      </div>
    </div>
  );
};
export default TableActions;
