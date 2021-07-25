package top.jybill.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.jybill.controller.WXController;
import top.jybill.mapper.WxMapper;
import top.jybill.pojo.User;

import java.io.IOException;
import java.io.InputStream;

public interface WxService {
  User getAuthCode2Session(User user) throws Exception;
}
