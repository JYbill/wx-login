package top.jybill.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.util.*;

public class JWTUtils {

  // 密匙
  public static final String KEY = "!@#SDF!@@#!%";

  public static HashMap<String, Object> header = null;

  /**
   *
   * @param claims 设置payload
   * @param expire 设置过去时间为空即7天
   * @return
   */
  public static String getToken(Map<String, Object> claims, Date expire) {

    JWTCreator.Builder builder = JWT.create();

    if (JWTUtils.header != null) builder.withHeader(JWTUtils.header); // 设置 header

    // 设置 payload
    claims.forEach((k, v) -> {
//      System.out.println(v.getClass().getSimpleName()); 调试
      switch (v.getClass().getSimpleName()) {
        case "String":
          builder.withClaim(k , (String) v);
          break;

        case "Integer":
          builder.withClaim(k , (Integer) v);
          break;

        case "Boolean":
          builder.withClaim(k , (Boolean) v);
          break;
      }
    });

    // 默认日期 = 当前 + 3天
    Date defaultDate = expire;
    if (defaultDate == null) {
      Calendar calendar = Calendar.getInstance();
      calendar.add(Calendar.DAY_OF_MONTH, 3);
      defaultDate = calendar.getTime();
    }
    return builder.withExpiresAt(defaultDate)
            .sign(Algorithm.HMAC256(KEY)); // 设置过期时间, 默认3天
  }

  /**
   * 验证并返回DecodedJWT, 可以其解析获取数据， 验证不合法会抛出各种异常
   * @param token
   * @return
   */
  public static DecodedJWT verify(String token) {
    return JWT.require(Algorithm.HMAC256(KEY)).build().verify(token);
  }
}
