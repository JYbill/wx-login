"use strict";
App({
    globalData: {},
    onLaunch: function () {
        var token = wx.getStorageSync('token');
        if (!token) {
            wx.login({
                success: function (_a) {
                    var code = _a.code;
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
                            success: function (_a) {
                                var data = _a.data;
                                console.log(data);
                                wx.setStorage({
                                    key: "token",
                                    data: data.data
                                });
                            }
                        });
                    }
                }
            });
            return;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVEsRUFBUjtRQUNFLElBQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHakQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ1AsT0FBTyxFQUFQLFVBQVMsRUFBTTt3QkFBTCxJQUFJLFVBQUE7b0JBQ1osSUFBSSxJQUFJLEVBQUU7d0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEIsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0QkFDVCxHQUFHLEVBQUUsZ0NBQWdDOzRCQUNyQyxNQUFNLEVBQUUsTUFBTTs0QkFDZCxJQUFJLEVBQUU7Z0NBQ0osS0FBSyxFQUFFLG9CQUFvQjtnQ0FDM0IsTUFBTSxFQUFFLGtDQUFrQztnQ0FDMUMsT0FBTyxFQUFFLElBQUk7NkJBQ2Q7NEJBQ0QsT0FBTyxFQUFQLFVBQVEsRUFBVztvQ0FBVixJQUFJLFVBQUE7Z0NBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQ0FDWixHQUFHLEVBQUUsT0FBTztvQ0FDWixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUNBQ2hCLENBQUMsQ0FBQTs0QkFDSixDQUFDO3lCQUNGLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuQXBwPElBcHBPcHRpb24+KHtcbiAgZ2xvYmFsRGF0YToge30sXG4gIG9uTGF1bmNoKCk6IHZvaWQge1xuICAgIGNvbnN0IHRva2VuOiBzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcblxuICAgIC8vIOacquS/neWtmHRva2VuXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgd3gubG9naW4oe1xuICAgICAgICBzdWNjZXNzICh7Y29kZX0pOiB2b2lkIHtcbiAgICAgICAgICBpZiAoY29kZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29kZSk7XG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo4MDgwL3d4L2xvZ2luJyxcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhcHBpZDogJ3d4ZThhMTQxZjFiYjgwMGZmNycsXG4gICAgICAgICAgICAgICAgc2VjcmV0OiAnZWRlN2QyOWE1MDVmNzdlODMxOGZhNTRjMGQxZGQwNTcnLFxuICAgICAgICAgICAgICAgIGpzX2NvZGU6IGNvZGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3VjY2Vzcyh7ZGF0YX06IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAga2V5OiBcInRva2VuXCIsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufSkiXX0=