import request from "@/http/request";
/*登录校验*/
export function login(username,password){
    //登录用户
    return request({
        url:"/aoaUser/login?username="+username+"&&password="+password,
        method:"get",
    });

}
export function queryMenusById(userId){
    //依据用户Id查看权限
    return request({
        url:"/aoaUser/queryMenus?userId="+userId,
        method:"get",
    })
}
/*通讯录-内部通讯录查询所有*/
export function querytxlNb(pageNo){
    return request({
        url:"/aoaUser/queryList?pageNo="+pageNo,
        method:"get",
    })
}
/*通讯录-外部通讯录查询*/
export function queryWbtxl(){
    return request({
        url:"/aoaDirectorUsers/queryAll",
        method:"get",
    })
}
