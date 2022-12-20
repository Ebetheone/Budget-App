import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";

import "./style.scss";
import "antd/dist/antd.css";

import OrlogoNemeh from "./Modal/income";
import ZarlagaNemeh from "./Modal/out";

import { useOrlogo } from "./Modal/useOrlogo";
import { useZarlaga } from "./Modal/useZarlaga";
import { useEditBudget } from "./Modal/useEditBudget";
import { useUserContext } from "../../context/user.context";
import axios from "../../axios";

const { Column } = Table;
const { confirm } = Modal;

const TableActions = () => {
  const [tableModified, setTableModified] = useState();
  const { user, setUserData } = useUserContext();
  const token = localStorage.getItem("token");

  const userId = localStorage.getItem("userId");
  const getUser = () => {
    axios
      .get(`/user/getUser?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data.result[0] && setUserData(res.data.result[0]));
  };

  useEffect(() => {
    getUser();
  }, []);

  const { dataO, loadingO } = useOrlogo(tableModified);
  const { dataZ, loadingZ } = useZarlaga(tableModified);

  const { DeleteOrlogo, DeleteZarlaga } = useEditBudget(userId);
  const [orlogo, setOrlogo] = useState(false);
  const [zarlaga, setZarlaga] = useState(false);

  const showDeleteOrlogoConfirm = (id) => {
    confirm({
      title: "Орлогын мэдээллээ устгах уу?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        const res = DeleteOrlogo(id);
        if (res) setTableModified((prev) => !prev);
      },
      onCancel() {
        setTableModified((prev) => !prev);
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
        const res = DeleteZarlaga(id);
        if (res) setTableModified((prev) => !prev);
      },
      onCancel() {
        console.log("Зарлагын мэдээллээ устгах цуцлагдлаа.");
      },
    });
  };

  return (
    <div>
      <OrlogoNemeh
        visible={orlogo}
        setVisible={setOrlogo}
        loading={loadingO}
        setTableModified={setTableModified}
      />
      <ZarlagaNemeh
        visible={zarlaga}
        setVisible={setZarlaga}
        loading={loadingZ}
        setTableModified={setTableModified}
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
            <Table dataSource={dataO} loading={loadingO}>
              <Column title="Орлого" dataIndex="orlogo" key="orlogo" />
              <Column title="Өдөр" dataIndex="date" key="date" />
              <Column title="Утга" dataIndex="detail" key="detail" />
              <Column title="Төрөл" dataIndex="type" key="type" />
              <Column
                title="Үйлдэл"
                key="action"
                render={(_, record) => (
                  <a
                    onClick={() => {
                      showDeleteOrlogoConfirm(record._id);
                      console.log(tableModified);
                    }}
                  >
                    Устгах
                  </a>
                )}
              />
            </Table>
            <Table dataSource={dataZ} loading={loadingZ}>
              <Column title="Зарлага" dataIndex="zarlaga" key="zarlaga" />
              <Column title="Өдөр" dataIndex="date" key="date" />
              <Column title="Утга" dataIndex="detail" key="detail" />
              <Column title="Төрөл" dataIndex="type" key="type" />
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
