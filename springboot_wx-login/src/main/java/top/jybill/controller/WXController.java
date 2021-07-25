package top.jybill.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import top.jybill.pojo.User;
import top.jybill.service.WxService;
import top.jybill.utils.JWTUtils;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/wx")
public class WXController {

  @Autowired
  private WxService wxService;

  @PostMapping("/login")
  public Map<String, Object> wxLogin(@RequestBody User user) throws Exception {
    user.setGrant_type(User.type);
    HashMap<String, Object> resMap = new HashMap<>();

    // 未传token
    if (user == null) {
      resMap.put("code", 500);
      resMap.put("data", "未传token");
      return resMap;
    }

    // 正确token -> 请求wx服务器
    User authCode2Session = wxService.getAuthCode2Session(user);
//    System.out.println("controller authCode2Session => " + authCode2Session);

    if (authCode2Session == null) {
      resMap.put("code", 500);
      resMap.put("data", "异常user返回为null, 检查service");
      return resMap;
    }

    // 生成token
    HashMap<String, Object> claims = new HashMap<>();

    resMap.put("code", 200);
    resMap.put("data", JWTUtils.getToken(claims, null));
//    System.out.println(resMap);
    return resMap;
  }

  @GetMapping("/findsome")
  public Map<String, Object> findSome() {
    HashMap<String, Object> resMap = new HashMap<>();
    resMap.put("code", 200);
    resMap.put("data", "成功返回findSome...");
    return resMap;
  }
}
