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
        <>
            <style>{`
              html.dark .extension-list .subtle-text,
              html.dark .extension-list .meta {
                color: rgba(255, 255, 255, 0.45) !important;
              }
              html.dark .extension-list .desc {
                color: rgba(255, 255, 255, 0.75) !important;
              }
              html.dark .extension-list a {
                color: #69b1ff;
              }
              html.dark .extension-list a:hover {
                color: #91caff;
              }

              /* 头部“总计”在暗色下更高对比度 */
              html.dark .extension-list .total {
                color: rgba(255, 255, 255, 0.88) !important;
                font-variant-numeric: tabular-nums;
              }

              /* 指标数字在暗色下更清晰，启用等宽数字便于对齐 */
              html.dark .extension-list .metric {
                color: rgba(255, 255, 255, 0.85) !important;
                font-variant-numeric: tabular-nums;
              }
              html.dark .extension-list .metric-downloads {}
              html.dark .extension-list .metric-favers {}

              /* 标题在暗色下提高对比度（覆盖链接默认蓝色） */
              html.dark .extension-list .ant-list-item-meta-title,
              html.dark .extension-list .ant-list-item-meta-title a,
              html.dark .extension-list .title {
                color: rgba(255, 255, 255, 0.88) !important;
              }

              /* AntD List 分隔线与头部边框 */
              html.dark .extension-list .ant-list-header {
                border-bottom-color: #303030 !important;
              }
              html.dark .extension-list .ant-list-item {
                border-block-end: 1px solid #303030 !important;
              }

              /* 动作区域与图标颜色 */
              html.dark .extension-list .ant-list-item-action {
                color: rgba(255, 255, 255, 0.65);
              }
              html.dark .extension-list .ant-list-item-action .anticon {
                color: inherit;
              }

              /* 下载 & Star 图标在暗色下更清晰 */
              html.dark .extension-list .icon {
                color: rgba(255, 255, 255, 0.75) !important;
                transition: color 0.2s ease;
              }
              html.dark .extension-list .ant-list-item-action > li:hover .icon {
                color: rgba(255, 255, 255, 0.95) !important;
              }

              /* 行 hover 轻微背景 */
              html.dark .extension-list .ant-list-items .ant-list-item:hover {
                background: rgba(255, 255, 255, 0.03);
              }
            `}</style>
            <div className="extension-list">
        <List
            header={
                <div className="list-header" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="total">总计: {data.length}</div>
                    <div className="subtle-text" style={{ color: "#ccc" }}>
                        数据来自&emsp;
                        <a href="https://packagist.org/" target="_blank">
                            Packagist
                        </a>
                        &emsp;每天 6:00 更新
                    </div>
                </div>
            }
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
                            <DownloadOutlined className="icon" />
                            <span className="metric metric-downloads">{item.downloads}</span>
                        </Space>,
                        <Space>
                            <HeartOutlined className="icon" />
                            <span className="metric metric-favers">{item.favers}</span>
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
                                    className="title"
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
                                <p className="desc" style={{ color: "#666" }}>
                                    {item.description}
                                </p>

                                {!!item.latest_update && (
                                    <p
                                        className="meta"
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
            </div>
        </>
    );
};

export default ExtensionList;
