import React, { useState } from "react";
import { Table, Button } from "antd";

import "./style.scss";
import "antd/dist/antd.css";

import OrlogoNemeh from "./Modal/income";
import ZarlagaNemeh from "./Modal/out";

import { useOrlogo } from "./Modal/useOrlogo";
import { useZarlaga } from "./Modal/useZarlaga";

const { Column } = Table;

const TableActions = () => {
  const { dataO, loadingO } = useOrlogo();
  const { dataZ, loadingZ } = useZarlaga();

  const [orlogo, setOrlogo] = useState(false);
  const [zarlaga, setZarlaga] = useState(false);

  return (
    <div>
      <OrlogoNemeh visible={orlogo} setVisible={setOrlogo} loading={loadingO} />
      <ZarlagaNemeh
        visible={zarlaga}
        setVisible={setZarlaga}
        loading={loadingZ}
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
          <Table dataSource={dataO}>
            <Column title="Орлого" dataIndex="orlogo" key="orlogo" />
          </Table>
          <Table dataSource={dataZ}>
            <Column title="Зарлага" dataIndex="zarlaga" key="zarlaga" />
          </Table>
        </div>
      </div>
    </div>
  );
};
export default TableActions;
