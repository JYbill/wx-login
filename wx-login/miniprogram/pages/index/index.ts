// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {

  },
  findSome() {
    wx.request({
      url: 'http://127.0.0.1:8080/wx/findsome',
      header: {
        Authentication: wx.getStorageSync('token')
      },
      success({data}: any): void {
        console.log(data);
      }
    })
  }
})
