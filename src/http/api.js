import request from "@/http/request";

export function queryStatusList(status, pageNo, orderid, goodname) {
    return request({
        url: "/orders/queryStatusList?status=" + status + "&&pageNo=" + pageNo + "&&orderid=" + orderid + "&&goodname=" + goodname,//接口路径
        method: "get",//接口方法
    })
}

/*宠物分类模糊查询*/
export function queryAllCwfl(pageNo,feneli) {
    return request({
        url: "/chongwufenlei/queryList?pageNo="+pageNo+"&&fenlei="+feneli,//接口路径
        method: "get"//接口方法
    })
}
/*宠物分类添加*/
export function cwflAdd(fenlei) {
    return request({
        url: "/chongwufenlei/add?fenlei="+fenlei,//接口路径
        method: "post"//接口方法
    })
}
/*宠物分类删除单个*/
export function cwflDel(id) {
    return request({
        url: "/chongwufenlei/deleteById?id="+id,//接口路径
        method: "post"//接口方法
    })
}
/*宠物分类批量删除*/
export function cwflDelids(ids) {
    return request({
        url: "/chongwufenlei/deleteByIds?ids="+ids,//接口路径
        method: "post"//接口方法
    })
}
/*宠物分类查看详情,依据id查询*/
export function cwflqueryById(id) {
    return request({
        url: "/chongwufenlei/queryById?id="+id,//接口路径
        method: "get"//接口方法
    })
}
/*宠物分类修改,需要传id才知道改那条数据*/
export function cwflUpd(data) {
    return request({
        url: "/chongwufenlei/edit",//接口路径
        method: "post",//接口方法
        data
    })
}
/*宠物用品查询所有*/
export function queryAllCwyp(pageNo,shangpinmingcheng,feneli) {
    return request({
        url: "/chongwuyongpin/queryList?pageNo="+pageNo+"&&shangpinmingcheng="+shangpinmingcheng+"&&fenlei="+feneli,//接口路径
        method: "get"//接口方法
    })
}
/*宠物用品依据id查询*/
export function cwypByid(id) {
    return request({
        url: "/chongwuyongpin/queryById?id="+id,//接口路径
        method: "get"//接口方法
    })
}
/*宠物用品新增中商品分类的下拉框查询*/
export function cwypFenlei() {
    return request({
        url: "/shangpinfenlei/queryAll",//接口路径
        method: "get"//接口方法
    })
}
/*宠物用品添加*/
export function cwypAdd(data) {
    return request({
        url: "/chongwuyongpin/add",//接口路径
        method: "post", //接口方法
        data
    })
}
/*宠物用品修改*/
export function cwypUpd(data) {
    return request({
        url: "/chongwuyongpin/edit",//接口路径
        method: "post", //接口方法
        data
    })
}
/*宠物用品删除单条数据*/
export function cwypDel(id) {
    return request({
        url: "/chongwuyongpin/deleteById?id="+id,//接口路径
        method: "post"//接口方法
    })
}
/*宠物用品批量删除*/
export function cwypDelids(ids) {
    return request({
        url: "/chongwuyongpin/deleteByIds?ids="+ids,//接口路径
        method: "post"//接口方法
    })
}
/*宠物用品查看评论-查询所有*/
export function cwypPl(pageNo,content,refid) {
    return request({
        url: "/discusschongwuyongpin/queryList?pageNo="+pageNo+"&&content="+content+"&&refid="+refid,//接口路径
        method: "get"//接口方法
    })
}
/*宠物用品查看评论详情-依据id查询*/
export function cwypPlxq(refid) {
    return request({
        url: "/discusschongwuyongpin/queryById?id="+refid,//接口路径
        method: "get"//接口方法
    })
}
/*宠物用品回复评论修改*/
export function cwypHf(data) {
    return request({
        url: "/discusschongwuyongpin/edit",//接口路径
        method: "post", //接口方法
        data
    })
}

export function queryById(id) {
    return request({
        url: "/orders/queryById?id=" + id,//接口路径
        method: "get"//接口方法
    })
}

//分页模糊查询宠物领养
export function queryListCwly(chongwumingcheng, fenlei, zhonglei, chongwuzhuangtai, pageNo) {
    return request({
        url: "/chongwulingyang/queryList?chongwumingcheng=" + chongwumingcheng + "&&fenlei=" + fenlei + "&&zhonglei=" + zhonglei + "&&chongwuzhuangtai=" + chongwuzhuangtai + "&&pageNo=" + pageNo,
        method: "get"//接口方法
    })
}

//轮播图模糊查询
export function lbtQueryAll(name) {
    return request({
        url: "/config/queryList?name=" + name,//接口路径
        method: "get"//接口方法
    })
}

//轮播图单条数据删除
export function lbtDel(id) {
    return request({
        url: "/config/deleteById?id=" + id,//接口路径
        method: "post"//接口方法
    })
}

//轮播图多条数据删除
export function lbtDelMany(ids) {
    return request({
        url: "/config/deleteByIds?ids=" + ids,//接口路径
        method: "post",//接口方法
    })
}

//轮播图依据id查询
export function lbtqueryById(id) {
    return request({
        url: "/config/queryById?id=" + id,//接口路径
        method: "get",//接口方法
    })
}

//轮播图修改
export function lbtUpdate(data) {
    return request({
        url: "/config/edit",//接口路径
        method: "post",//接口方法
        data
    })
}

//轮播图添加
export function lbtAdd(data) {
    return request({
        url: "/config/add",//接口路径
        method: "post",//接口方法
        data
    })
}

//宠物资讯模糊查询
export function cwzxQueryAll(title) {
    return request({
        url: "/news/queryList?title=" + title,//接口路径
        method: "get"//接口方法
    })
}

//宠物资讯单条数据删除
export function cwzxtDel(id) {
    return request({
        url: "/news/deleteById?id=" + id,//接口路径
        method: "post"//接口方法
    })
}

//宠物资讯多条数据删除
export function cwzxDelMany(ids) {
    return request({
        url: "/news/deleteByIds?ids=" + ids,//接口路径
        method: "post",//接口方法
    })
}

//宠物资讯依据id查询
export function cwzxqueryById(id) {
    return request({
        url: "/news/queryById?id=" + id,//接口路径
        method: "get",//接口方法
    })
}

//宠物资讯修改
export function cwzxUpdate(data) {
    return request({
        url: "/news/edit",//接口路径
        method: "post",//接口方法
        data
    })
}

//宠物资讯添加
export function cwzxadd(data) {
    return request({
        url: "/news/add",//接口路径
        method: "post",//接口方法
        data
    })
}

//分类种类查询
export function queryAllCwfl1() {
    return request({
        url: "/chongwufenlei/queryAll",//接口路径
        method: "get"//接口方法
    })

}

//宠物领养信息删除
export function deleteById(id) {
    return request({
        url: "/chongwulingyang/deleteById?id=" + id,//接口路径
        method: "post"//接口方法
    })

}

//管理员查询
export function queryUsersList(username, pageNo) {
    return request({
        url: "/users/queryList?username=" + username + "&&pageNo=" + pageNo,
        method: "get"
    })
}

//管理员id查询
export function queryUsersById(id) {
    return request({
        url: "/users/queryById?id=" + id,
        method: "get"
    })
}

//增加管理员
export function addUser(data) {
    return request({
        url: "/users/add",
        method: "post",
        data
    })
}

//通过id删除管理员
export function deleteUserById(id) {
    return request({
        url: "/users/deleteById?id=" + id,
        method: "post"
    })
}

//通过ids删除管理员
export function deleteUserByIds(ids) {
    return request({
        url: "/users/deleteByIds?ids=" + ids,
        method: "post",
    })
}

//通过id修改管理员
export function editUser(data) {
    return request({
        url: "/users/edit",
        method: "post",
        data
    })
}

//宠物领养单条信息查询
export function culyQueryById(id) {
    return request({
        url: "/chongwulingyang/queryById?id=" + id,//接口路径
        method: "get"//接口方法
    })

}

//宠物领养删除多条信息查询
export function cwlyDeleteByids(ids) {
    return request({
        url: "/chongwulingyang/deleteByIds?ids=" + ids,//接口路径
        method: "post"//接口方法
    })

}

//查询宠物领养表
export function queryAllCwly() {
    return request({
        url: "/chongwulingyang/queryAll",//接口路径
        method: "get"//接口方法
    })

}


//查询宠物评论
export function queryListCwlyPl(pageNo, content,refid) {
    return request({
        url: "/discusschongwulingyang/queryList?pageNo=" + pageNo + "&&content=" + content+"&&refid="+refid,//接口路径
        method: "get"//接口方法
    })

}


//添加宠物领养表
export function addCwly(data) {
    return request({
        url: "/chongwulingyang/add",//接口路径
        method: "post",//接口方法
        data
    })

}

//查询宠物领养评论详情
export function queryPl(id) {
    return request({
        url: "/discusschongwulingyang/queryById?id="+id,//接口路径
        method: "get",//接口方法

    })

}
//修改宠物领养
export function updCwly(data) {
    return request({
        url: "/chongwulingyang/edit",//接口路径
        method: "post",//接口方法
        data
    })

}
//回复宠物领养评论
export function updCwlyPl(reply,id) {
    return request({
        url: "/discusschongwulingyang/edit?reply="+reply+"&&id="+id,//接口路径
        method: "post",//接口方法

    })

}

//删除宠物领养评论
export function delCwlyPl(id) {
    return request({
        url: "/discusschongwulingyang/deleteById?id=" + id,//接口路径
        method: "post",//接口方法

    })

}

//宠物挂失查询
export function queryCWGSList(pageNo, guashibiaoti, fenlei, chongwumingcheng, chengshi) {
    return request({
        url: "/chongwuguashi/queryList?pageNo=" + pageNo + "&&guashibiaoti=" + guashibiaoti + "&&fenlei=" + fenlei + "&&chongwumingcheng=" + chongwumingcheng + "&&chengshi=" + chengshi,
        method: "get"
    })
}

//通过ids删除宠物挂失
export function deleteByIds(ids) {
    return request({
        url: "/chongwuguashi/deleteByIds?ids=" + ids,
        method: "post",
    })
}

//通过id查询宠物挂失回显到详情
export function DataReturnById(id) {
    return request({
        url: "/chongwuguashi/queryById?id=" + id,
        method: "get",
    })
}

//通过id删除宠物挂失
export function deleteCWGSById(id) {
    return request({
        url: "/chongwuguashi/deleteById?id=" + id,
        method: "post",
    })
}

//通过id修改宠物挂失
export function CWGSEdit(data) {
    return request({
        url: "/chongwuguashi/edit",
        method: "post",
        data
    });
}
/*登录校验*/
export function login(username,password){
    return request({
        url:"/users/login?username="+username+"&&password="+password,
        method:"get",
    });
}