# 为什么获取不到最新版

### 原因

`composer` 国内镜像同步的慢~



### 解决方案

切换官方源
```shell
# 取消当前项目配置
composer config --unset repos.packagist

# 取消全局配置
composer config -g --unset repos.packagist
```
