// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch(): void {
    const token: string = wx.getStorageSync('token');

    // 未保存token
    if (!token) {
      wx.login({
        success ({code}): void {
          if (code) {
            console.log(code);
            wx.request({
              url: 'http://127.0.0.1:8080/wx/login',
              method: 'POST',
              data: {
                appid: 'wxe8a141f1bb800ff7',
                secret: 'ede7d29a505f77e8318fa54c0d1dd057',
                js_code: code
              },
              success({data}: any): void {
                console.log(data);
                wx.setStorage({
                  key: "token",
                  data: data.data
                })
              }
            });
          }
        }
      });
      return;
    }
  }
})