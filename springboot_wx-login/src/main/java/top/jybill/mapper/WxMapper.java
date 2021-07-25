package top.jybill.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.springframework.stereotype.Repository;
import top.jybill.pojo.PrivacyUser;
import top.jybill.pojo.User;

import java.io.IOException;

@Repository
public interface WxMapper extends BaseMapper<User> {
}
