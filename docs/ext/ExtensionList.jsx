import { Space, List } from "antd";
import { useState, useEffect } from "react";
import {
    DownloadOutlined,
    HeartOutlined,
    ExportOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";

const ExtensionList = () => {
    const [data, setData] = useState([]);

    const initData = async () => {
        const url = "/extension-data.json";
        const response = await fetch(url);
        const data = await response.json();

        for (let item of data) {
            const latestUpdate = new Date(item.latest_update);
            const now = new Date();
            const diffDays = Math.floor(
                (now - latestUpdate) / (1000 * 60 * 60 * 24)
            );
            item.latest = diffDays < 7 ? 1 : 0;
        }

        setData(data);
    };

    useEffect(() => {
        initData();
    }, []);

    return (
        <List
            header={<div>Total: {data.length}</div>}
            dataSource={data}
            itemLayout="vertical"
            renderItem={(item) => (
                <List.Item
                    extra={
                        <Space>
                            {!!item.latest && <Tag color="green">最近更新</Tag>}
                        </Space>
                    }
                    actions={[
                        <Space>
                            <DownloadOutlined />
                            {item.downloads}
                        </Space>,
                        <Space>
                            <HeartOutlined />
                            {item.favers}
                        </Space>,
                        <Space>
                            <a href={item.url} target="_blank">
                                <ExportOutlined
                                    style={{ marginRight: "6px" }}
                                />
                                Packagist
                            </a>
                        </Space>,
                        <Space>
                            <a href={item.repository} target="_blank">
                                <ExportOutlined
                                    style={{ marginRight: "6px" }}
                                />
                                Source Code
                            </a>
                        </Space>,
                    ]}
                >
                    <List.Item.Meta
                        title={
                            <Space>
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                    }}
                                >
                                    {item.name}
                                </span>

                                {!!item.last_version && (
                                    <Tag color="blue">{item.last_version}</Tag>
                                )}
                            </Space>
                        }
                        description={
                            <div>
                                <p style={{ color: "#666" }}>
                                    {item.description}
                                </p>

                                {!!item.latest_update && (
                                    <p
                                        style={{
                                            color: "#ccc",
                                            fontSize: "12px",
                                            paddingTop: 20,
                                        }}
                                    >
                                        Last Update: {item.latest_update}
                                    </p>
                                )}
                            </div>
                        }
                    />
                </List.Item>
            )}
        />
    );
};

export default ExtensionList;
