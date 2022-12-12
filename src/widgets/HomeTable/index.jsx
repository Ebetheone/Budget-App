import React, { useState } from "react";
import { Table, Button } from "antd";

import "./style.scss";
import "antd/dist/antd.css";

import OrlogoNemeh from "./Modal/income";
import ZarlagaNemeh from "./Modal/out";

import { useBudget } from "./Modal/useBudget";

const { Column } = Table;

const TableActions = () => {
  const { data, loading } = useBudget();
  const [orlogo, setOrlogo] = useState(false);
  const [zarlaga, setZarlaga] = useState(false);

  return (
    <div>
      <OrlogoNemeh visible={orlogo} setVisible={setOrlogo} loading={loading} />
      <ZarlagaNemeh
        visible={zarlaga}
        setVisible={setZarlaga}
        loading={loading}
      />
      <div className="Border">
        <div className="flex">
          <div className="title">Бүгд</div>
        </div>
        <div className="Table">
          <div className="buttons">
            <Button type="primary" onClick={() => setOrlogo(true)}>
              Орлого нэмэх
            </Button>
            <Button type="primary" onClick={() => setZarlaga(true)}>
              Зарлага нэмэх
            </Button>
          </div>
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
