import { useState, useEffect } from "react";
import { Table } from "antd";

const DonateTable = () => {
  const getBaseUrl = () => {
    const isGithubIo = window.location.hostname.includes('github.io');
    return isGithubIo ? '/docs' : '';
  };

  const url = `${getBaseUrl()}/donate-data.json`;

  const [data, setData] = useState([]);

  const columns = [
    { title: "日期", dataIndex: "date", key: "date" },
    { title: "金额", dataIndex: "amount", key: "amount" },
    { title: "昵称", dataIndex: "nickname", key: "nickname" },
    { title: "备注", dataIndex: "remark", key: "remark" },
  ];

  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setData(data))
  }, []);

  return <Table dataSource={data} columns={columns} pagination={false} />;
};

export default DonateTable;
