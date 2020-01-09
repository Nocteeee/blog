let ipUrl = 'http://101.133.167.101:7002/default/';

const servicePath = {
    getArticleList: ipUrl + 'article',  //  首页文章列表接口
    getArticleById: ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
    getTypeInfo: ipUrl + 'getTypeInfo',  // 文章分类
};
export default servicePath;
