package top.jybill.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrivacyUser {
  @TableId(type = IdType.AUTO)
  private Long id;

  // 返回的重要参数
  private String openid;
  private String session_key;
  private String unionid;
}
