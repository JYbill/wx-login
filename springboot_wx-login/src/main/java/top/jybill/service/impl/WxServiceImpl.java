package top.jybill.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.jybill.mapper.WxMapper;
import top.jybill.pojo.User;
import top.jybill.service.WxService;

import java.io.IOException;

@Service
public class WxServiceImpl implements WxService {

  // 认证url
  private static final String AUTH_URL = "https://api.weixin.qq.com/sns/jscode2session?";

  // appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code

  @Autowired
  private WxMapper wxMapper;

  @Autowired
  private CloseableHttpClient httpClient;
  @Autowired
  private RequestConfig config;

  public User getAuthCode2Session(User user) throws IOException {
    HttpGet get =
            new HttpGet(AUTH_URL + "appid=" + user.getAppid() + "&secret=" + user.getSecret() + "&js_code=" + user.getJs_code() + "&grant_type=" + user.getGrant_type());
    get.setConfig(config); // 装配配置信息
    CloseableHttpResponse res = this.httpClient.execute(get);

    User retUser = null;
    if (res.getStatusLine().getStatusCode() == 200) {
      // json转对象
      retUser = new ObjectMapper().readValue(EntityUtils.toString(res.getEntity()), User.class);
//      System.out.println(retUser);
      wxMapper.insert(retUser); // 添加入数据库
    }
//    System.out.println(user);

    res.close(); // 关闭返回结果
    httpClient.close(); // 关闭httpClient
    return retUser;
  }

}
