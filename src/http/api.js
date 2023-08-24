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
//查询考勤管理
export function queryKqgl(pageNo,sel){

    return request({
        url:"/aoaAttendsList/queryList?pageNo="+pageNo+"&&sel="+sel,
        method:"get",
    })

}
