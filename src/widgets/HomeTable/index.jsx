import React, { useState } from "react";
import { Table, Button, Modal } from "antd";

import "./style.scss";
import "antd/dist/antd.css";

import OrlogoNemeh from "./Modal/income";
import ZarlagaNemeh from "./Modal/out";

import { useOrlogo } from "./Modal/useOrlogo";
import { useZarlaga } from "./Modal/useZarlaga";
import { useEditBudget } from "./Modal/useEditBudget";

const { Column } = Table;
const { confirm } = Modal;

const TableActions = () => {
  const { dataO, loadingO } = useOrlogo();
  const { dataZ, loadingZ } = useZarlaga();
  const { DeleteOrlogo, DeleteZarlaga } = useEditBudget();

  const [orlogo, setOrlogo] = useState(false);
  const [zarlaga, setZarlaga] = useState(false);

  const showDeleteOrlogoConfirm = (id) => {
    confirm({
      title: "Орлогын мэдээллээ устгах уу?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        DeleteOrlogo(id);
      },
      onCancel() {
        console.log("Орлогын мэдээллээ устгах цуцлагдлаа.");
      },
    });
  };

  const showDeleteZarlagaConfirm = (id) => {
    confirm({
      title: "Зарлагын мэдээллээ устгах уу?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        DeleteZarlaga(id);
      },
      onCancel() {
        console.log("Зарлагын мэдээллээ устгах цуцлагдлаа.");
      },
    });
  };

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
          <div className="title">Орлого, зарлагын бүртгэл</div>
        </div>
        <div className="Table">
          <div className="grid">
            <Button
              type="primary"
              onClick={() => setOrlogo(true)}
              style={{ width: 150, marginBottom: 20 }}
            >
              Орлого нэмэх
            </Button>
            <Button
              type="primary"
              onClick={() => setZarlaga(true)}
              style={{ width: 150, marginBottom: 20 }}
            >
              Зарлага нэмэх
            </Button>
            <Table dataSource={dataO}>
              <Column title="Орлого" dataIndex="orlogo" key="orlogo" />
              <Column
                title="Үйлдэл"
                key="action"
                render={(_, record) => (
                  <a onClick={() => showDeleteOrlogoConfirm(record._id)}>
                    Устгах
                  </a>
                )}
              />
            </Table>
            <Table dataSource={dataZ}>
              <Column title="Зарлага" dataIndex="zarlaga" key="zarlaga" />
              <Column
                title="Үйлдэл"
                key="action"
                render={(_, record) => (
                  <a onClick={() => showDeleteZarlagaConfirm(record._id)}>
                    Устгах
                  </a>
                )}
              />
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableActions;
