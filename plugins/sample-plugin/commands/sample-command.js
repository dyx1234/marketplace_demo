// 示例命令文件
export default {
  name: "sample-command",
  description: "这是一个示例命令",
  async execute(context) {
    return {
      success: true,
      message: "示例命令执行成功！"
    };
  }
};