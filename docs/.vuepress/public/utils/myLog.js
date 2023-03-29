// 参考文章：
// 控制台也能炫-chrome浏览器控制台输出彩色文字：https://blog.csdn.net/zhuzheqing/article/details/109657009
// 你所不知道的谷歌浏览器 console.log打印技巧：https://blog.csdn.net/fd2025/article/details/124405821
const myLog = {
  /**
   * 默认
   * @param s 打印的字符串内容
   * @param showBackground 是否显示背景色
   */
  log: function (s, showBackground = false) {
    const css = showBackground ? 'color:#202124;background-color:#ffffff;font-size:14px;font-weight:bold;padding:8px 10px;' : 'font-size:14px;font-weight:bold;'
    console.log('%c%s', css, s)
  },
  // 主要
  primary: function (s, showBackground = false) {
    const css = showBackground ? 'color:#fff7d3;background-color:#409eff;font-size:14px;font-weight:bold;padding:8px 10px;' : 'color:#409eff;font-size:14px;font-weight:bold;'
    console.log('%c%s', css, s)
  },
  // 成功
  success: function (s, showBackground = false) {
    const css = showBackground ? 'color:#fff7d3;background-color:#67c23a;font-size:14px;font-weight:bold;padding:8px 10px;' : 'color:#67c23a;font-size:14px;font-weight:bold;'
    console.log('%c%s', css, s)
  },
  // 信息
  info: function (s, showBackground = false) {
    const css = showBackground ? 'color:#fff7d3;background-color:#909399;font-size:14px;font-weight:bold;padding:8px 10px;' : 'color:#909399;font-size:14px;font-weight:bold;'
    console.log('%c%s', css, s)
  },
  // 警告
  warn: function (s, showBackground = false) {
    const css = showBackground ? 'color:#fff7d3;background-color:#e6a23c;font-size:14px;font-weight:bold;padding:8px 10px;' : 'color:#e6a23c;font-size:14px;font-weight:bold;'
    console.log('%c%s', css, s)
  },
  // 危险
  danger: function (s, showBackground = false) {
    const css = showBackground ? 'color:#fff7d3;background-color:#f56c6c;font-size:14px;font-weight:bold;padding:8px 10px;' : 'color:#f56c6c;font-size:14px;font-weight:bold;'
    console.log('%c%s', css, s)
  }
}

myLog.primary('欲买桂花同载酒，终不似，少年游。')
