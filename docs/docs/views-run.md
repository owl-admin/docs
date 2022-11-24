---
group: 前端
title: 运行注意事项
order: 2
---

## 代理

- 跨域 / 404 : 需要在 config/proxy.ts 中配置代理, 默认路由前缀为 /admin-api/

## publicPath

- 运行时, 你需要将 `config/config.ts` 中的 `publicPath` 去掉(暂时注释掉), 否则会找不到配置文件
