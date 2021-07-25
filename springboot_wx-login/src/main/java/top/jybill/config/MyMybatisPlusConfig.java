package top.jybill.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan("top.jybill.mapper")
public class MyMybatisPlusConfig {
}
