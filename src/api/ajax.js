/**
*ajax 请求函数模块
*返回promise对象（异步返回的数据是response.data）
*/
import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET'){
    return new Promise(function (resolve, reject){
        //执行异步ajax请求

        //成功了调用resolve()
        //失败了调用reject()

        let Promise //返回的promise对象声明

        if(type === 'GET'){
            // 准备url query 参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key]+ '&'
            })
            if (dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                uaxios.post(url,data)rl = url + '?' + dataStr
            }
            //发送get请求
            promise = axios.post(url,data)
            }

            promise.then(response =>{
                resolve(response.data)
            })
            .catch(error =>{
                reject(error)
            })

    })
}