"use strict";
var app = getApp();
Page({
    data: {},
    findSome: function () {
        wx.request({
            url: 'http://127.0.0.1:8080/wx/findsome',
            header: {
                Authentication: wx.getStorageSync('token')
            },
            success: function (_a) {
                var data = _a.data;
                console.log(data);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFLEVBRUw7SUFDRCxRQUFRLEVBQVI7UUFDRSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLG1DQUFtQztZQUN4QyxNQUFNLEVBQUU7Z0JBQ04sY0FBYyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxFQUFQLFVBQVEsRUFBVztvQkFBVixJQUFJLFVBQUE7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG5cbiAgfSxcbiAgZmluZFNvbWUoKSB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvd3gvZmluZHNvbWUnLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIEF1dGhlbnRpY2F0aW9uOiB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3Moe2RhdGF9OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbiJdfQ==