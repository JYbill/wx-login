---
typora-root-url: readme-image
---

# 微信小程序登陆流程

+ 环境：`springboot`、`小程序(ts)`

+ 官方实例：

![img](/微信登录官方实例.jpg)

+ 流程1：微信小程序通过`wx.login`获取到code，并将该code发送到后台, 这里我选择的是java后台, 当然也可以是node甚至云开发

`真实开发时最好对wx.request这种常用的进行Promise封装`

```js
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
```



+ 流程2：后台利用appId、appSecret 和code , 发送给微信官方服务器进行`校验`, 通过官方文档可以得出调用 [auth.code2Session](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html) 接口，换取 **用户唯一标识 OpenID** 、 用户在微信开放平台帐号下的**唯一标识UnionID**（若当前小程序已绑定到微信开放平台帐号） 和 **会话密钥 session_key**。

`url：GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code`

```java
// 此处只粘贴重要代码
HttpGet get = new HttpGet(AUTH_URL + "appid=" + user.getAppid() + "&secret=" + user.getSecret() + "&js_code=" + user.getJs_code() + "&grant_type=" + user.getGrant_type()); // url拼接

get.setConfig(config); // 装配配置信息
CloseableHttpResponse res = this.httpClient.execute(get);

User retUser = null;
if (res.getStatusLine().getStatusCode() == 200) {
    retUser = new ObjectMapper().readValue(EntityUtils.toString(res.getEntity()), User.class);// json转对象
    wxMapper.insert(retUser); // 添加入数据库
}

res.close(); // 关闭返回结果
httpClient.close(); // 关闭httpClient
```

+ 流程3：后台返回给前端一个jwt生成的token

```java
JWTUtils.getToken(claims, null); // 自己封装过的JWT工具类, 生成token扔给下程序
```

> `主要：拿到前端传过来的code、secret、appid、grant_type三个参数然后通过httpClient发送GET请求，获取到返回的json对象，将该对象保存在数据库，再用JWT将一些不隐私且常用的数据转成token并返回给小程序`
>
>  `注意`： 请求回来的session_key和openid，先留着存在数据库，token令牌用我们自己转换的

+ 流程4：小程序保存token

+ 流程5：前端请求携带openid在请求头，后端通过数据库查询对比判断用户是否登陆（效率更高可以采用jwt而不用每次都查询数据库）

```js
 wx.request({
      url: 'http://127.0.0.1:8080/wx/findsome',
      header: {
        Authentication: wx.getStorageSync('token')
      },
      success({data}: any): void {
        console.log(data);
      }
})
```



## 实操图片

+ 默认`app-onLaunch`即登陆

![微信登录](/微信登录.png)

+ 保存token

![微信登录保存token](/微信登录保存token.png)

+ 点击`查询` -> 获取数据

![微信登录后查询](/微信登录后查询.png)