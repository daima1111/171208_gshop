/**
 *包含n个接口请求函数的模块
 *函数的返回值：promise对象
 */

import ajax from "./ajax";

// [1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)
// export function reqAdress(latitude,longitude){
    
// }

export const reqAdress = (geohash) => ajax(`/position/${geohash}`)

// [2、获取食品分类列表](#2 获取食品分类列表)
//不需要传参数，所以为空
export const reqFoodTypes = () => ajax(`/index_category`)

// [3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)
//传的变量名需要根据接口文档书写
// export const reqShops = (a,b) => ajax('/shops',{longitude:a,latitude :b})
// export const reqShops = ({longitude,latitude}) => ajax() //传对象的方式，只需要传一个参数
export const reqShops = (longitude,latitude) => ajax(longitude,latitude)

// [4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)
// [5、获取一次性验证码](#5 获取一次性验证码)
// [6、用户名密码登陆](#6 用户名密码登陆)
// [7、发送短信验证码](#7 发送短信验证码)
// [8、手机号验证码登陆](#8 手机号验证码登陆)
// [9、根据会话获取用户信息](#9 根据会话获取用户信息)
// [10、用户登出](#10 用户登出)