/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50536
Source Host           : 127.0.0.1:3306
Source Database       : wx-login

Target Server Type    : MYSQL
Target Server Version : 50536
File Encoding         : 65001

Date: 2021-07-25 20:55:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `openid` varchar(255) DEFAULT NULL,
  `session_key` varchar(255) DEFAULT NULL,
  `unionid` varchar(255) DEFAULT NULL,
  `id` int(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
