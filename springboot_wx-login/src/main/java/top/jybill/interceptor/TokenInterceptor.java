package top.jybill.interceptor;

import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.servlet.HandlerInterceptor;
import top.jybill.utils.JWTUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

public class TokenInterceptor implements HandlerInterceptor {
  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

//    System.out.println(request.getRequestURL());
    Map<String, Object> resMap = new HashMap<>();

    String authentication = request.getHeader("Authentication");

    response.setCharacterEncoding("UTF-8"); // 处理乱码问题

    // 未传递token
    if (authentication == null) {
      System.out.println("拦截器");
      resMap.put("code", 401);
      resMap.put("status", "no token");
      response.getWriter().write(new ObjectMapper().writeValueAsString(resMap));
      return false;
    }

    // token异常
    try {
      JWTUtils.verify(authentication);
      return true;
    } catch (SignatureVerificationException e) {
      resMap.put("status", "签名无效");
    } catch (TokenExpiredException e) {
      resMap.put("status", "令牌过期");
    } catch (AlgorithmMismatchException e) {
      resMap.put("status", "算法不匹配");
    } catch (Exception e) {
      resMap.put("status", "无效token");
    }
    resMap.put("code", 401);
    response.getWriter().write(new ObjectMapper().writeValueAsString(resMap));
    return false;
  }
}