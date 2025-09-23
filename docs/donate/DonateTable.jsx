import { useState, useEffect } from "react";
import { List, Card, Tooltip, Divider } from "antd";

const DonateTable = () => {
  const getBaseUrl = () => {
    const isGithubIo = window.location.hostname.includes("github.io");
    return isGithubIo ? "/docs" : "";
  };

  const url = `${getBaseUrl()}/donate-data.json`;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // 1. 按昵称分组捐赠并计算总额
        const donors = data.reduce((acc, item) => {
          if (!acc[item.nickname]) {
            acc[item.nickname] = {
              nickname: item.nickname,
              totalAmount: 0,
              donations: [],
            };
          }
          acc[item.nickname].totalAmount += item.amount;
          acc[item.nickname].donations.push(item);
          return acc;
        }, {});

        // 2. 创建用于显示的数据
        const displayData = Object.values(donors).map((donor) => {
          const latestDonation = donor.donations.reduce((latest, current) => {
            return new Date(current.date) > new Date(latest.date)
              ? current
              : latest;
          });

          return {
            nickname: donor.nickname,
            amount: donor.totalAmount, // 总金额
            date: latestDonation.date, // 用于排序的最新捐赠日期
            donations: donor.donations.sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            ),
          };
        });

        // 3. 按最新捐赠日期对捐赠者进行排序
        displayData.sort((a, b) => new Date(b.date) - new Date(a.date));

        setData(displayData);
      });
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes gold-glow {
            0% {
              box-shadow: 0 4px 12px rgba(250, 173, 20, 0.2);
            }
            50% {
              box-shadow: 0 6px 18px rgba(250, 173, 20, 0.6);
            }
            100% {
              box-shadow: 0 4px 12px rgba(250, 173, 20, 0.2);
            }
          }
          @keyframes red-glow {
            0% {
              box-shadow: 0 4px 12px rgba(255, 77, 79, 0.25);
            }
            50% {
              box-shadow: 0 6px 20px rgba(255, 77, 79, 0.6);
            }
            100% {
              box-shadow: 0 4px 12px rgba(255, 77, 79, 0.25);
            }
          }

          /* 暗色主题动画（更柔和、更暗的光晕） */
          @keyframes gold-glow-dark {
            0% {
              box-shadow: 0 4px 12px rgba(250, 173, 20, 0.15);
            }
            50% {
              box-shadow: 0 6px 18px rgba(250, 173, 20, 0.35);
            }
            100% {
              box-shadow: 0 4px 12px rgba(250, 173, 20, 0.15);
            }
          }
          @keyframes red-glow-dark {
            0% {
              box-shadow: 0 4px 12px rgba(255, 77, 79, 0.18);
            }
            50% {
              box-shadow: 0 6px 20px rgba(255, 77, 79, 0.4);
            }
            100% {
              box-shadow: 0 4px 12px rgba(255, 77, 79, 0.18);
            }
          }

          html.dark .donate-table .donate-card {
            border-color: #303030 !important;
            background: linear-gradient(145deg, #141414 0%, #1f1f1f 100%) !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6) !important;
          }
          html.dark .donate-table .donate-card .nickname {
            color: rgba(255, 255, 255, 0.88);
          }
          html.dark .donate-table .donate-card.normal .amount {
            /* 默认保持品牌色，暗色下亮度足够 */
          }
          html.dark .donate-table .donate-card.premium {
            border-color: #d89614 !important;
            background: linear-gradient(145deg, #2a1f00 0%, #141414 100%) !important;
            animation: gold-glow-dark 2.5s infinite ease-in-out !important;
          }
          html.dark .donate-table .donate-card.super-premium {
            border-color: #ff7875 !important;
            background: linear-gradient(145deg, #2a0f0e 0%, #141414 100%) !important;
            animation: red-glow-dark 2.5s infinite ease-in-out !important;
          }
        `}
      </style>
      <div className="donate-table">
        <List
        grid={{
          gutter: 16,
          xs: 3,
          sm: 4,
          md: 5,
          lg: 6,
          xl: 7,
          xxl: 8,
        }}
        dataSource={data}
        renderItem={(item) => {
          const isSuperPremium = item.amount >= 200;
          const isPremium = item.amount >= 50 && item.amount < 200;

          const cardStyle = {
            border: "1px solid #f0f0f0",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
            transition: "all 0.3s ease",
          };

          const premiumStyle = {
            ...cardStyle,
            borderColor: "#faad14",
            background: "linear-gradient(145deg, #fffaf0 0%, #ffffff 100%)",
            animation: "gold-glow 2.5s infinite ease-in-out",
          };

          const superPremiumStyle = {
            ...cardStyle,
            borderColor: "#ff7875",
            background: "linear-gradient(145deg, #fff1f0 0%, #ffffff 100%)",
            animation: "red-glow 2.5s infinite ease-in-out",
          };

          const currentStyle = isSuperPremium
            ? superPremiumStyle
            : isPremium
            ? premiumStyle
            : cardStyle;

          const cardClassName = `donate-card ${
            isSuperPremium ? "super-premium" : isPremium ? "premium" : "normal"
          }`;

          const currentColor = isSuperPremium
            ? "#f5222d"
            : isPremium
            ? "#faad14"
            : "#1677ff";

          return (
            <List.Item>
              <Tooltip
                title={
                  <div style={{ textAlign: "left", maxWidth: 300 }}>
                    <div>
                      <b>昵称:</b> {item.nickname}
                    </div>
                    <div>
                      <b>总金额:</b> ¥{item.amount}
                    </div>
                    <Divider style={{ margin: "8px 0" }} />
                    <div style={{ maxHeight: 200, overflowY: "auto" }}>
                      {item.donations.map((donation, index) => (
                        <div key={index} style={{ marginBottom: 4 }}>
                          {donation.date}: ¥{donation.amount}
                          {donation.remark && ` - ${donation.remark}`}
                        </div>
                      ))}
                    </div>
                  </div>
                }
              >
                <Card
                  size="small"
                  hoverable
                  style={currentStyle}
                  className={cardClassName}
                  bodyStyle={{
                    padding: "12px 8px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginBottom: "4px",
                    }}
                    className="nickname"
                    title={item.nickname}
                  >
                    {item.nickname}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: currentColor,
                    }}
                    className="amount"
                  >
                    ¥{item.amount}
                  </div>
                </Card>
              </Tooltip>
            </List.Item>
          );
        }}
      />
      </div>
    </>
  );
};

export default DonateTable;
