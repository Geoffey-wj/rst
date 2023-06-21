// src/api/mock.js
import Mock from 'mockjs'
import homeApi from './home'

// 拦截请求
Mock.mock('/home/getData', homeApi.getHomeData)