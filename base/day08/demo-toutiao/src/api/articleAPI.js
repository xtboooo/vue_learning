// 文章相关的API
import request from '@/utils/request.js'

// 向外按需导出一个API函数
export const getArticleListAPI = function (_page, _limit) {
  return request.get('/articles', {
    params: { _page, _limit }
  })
}
