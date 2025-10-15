# 开放平台部门插件市场

这是一个符合 Claude Code 规范的插件市场仓库，由开放平台部门维护，用于分发和管理插件。

## 目录结构

- `.claude-plugin/marketplace.json` - 市场配置文件
- `plugins/` - 插件目录

## 当前插件

### Grafana日志查看器
- 名称: grafana-log-viewer
- 功能: 通过MCP查看Grafana日志
- MCP配置: 连接到gitlab.xaminim.com上的debug-mcp服务

## 市场配置

市场配置文件位于 `.claude-plugin/marketplace.json`，定义了市场信息和插件列表。

## 插件开发

插件位于 `plugins/` 目录中，每个插件都有自己的目录和 `plugin.json` 配置文件。

## 使用说明

1. 克隆此仓库
2. 根据需要修改 `.claude-plugin/marketplace.json`
3. 在 `plugins/` 目录中添加您的插件
4. 每个插件应包含 `plugin.json` 配置文件
5. 提交更改并推送到您的 Git 仓库
