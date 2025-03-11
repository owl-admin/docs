import { Space, List } from "antd";
import { useState, useEffect } from "react";
import {
    DownloadOutlined,
    HeartOutlined,
    ExportOutlined,
} from "@ant-design/icons";

const ExtensionList = () => {
    const [data, setData] = useState([]);

    const initData = async () => {
        const url = "/extension-data.json";
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        initData();
    }, []);

    return (
        <List
            header={
                <div>
                    Total: {data.length}
                </div>
            }
            dataSource={data}
            itemLayout="vertical"
            renderItem={(item) => (
                <List.Item
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
                            <span
                                style={{ fontWeight: "bold", fontSize: "16px" }}
                            >
                                {item.name}
                            </span>
                        }
                        description={
                            <p style={{ color: "#666" }}>{item.description}</p>
                        }
                    />
                </List.Item>
            )}
        />
    );
};

export default ExtensionList;
