import axios from 'axios'

const request = axios.create({
  // 指定请求根路径
  baseURL: 'https://applet-base-api-t.itheima.net/'
})

export default request
