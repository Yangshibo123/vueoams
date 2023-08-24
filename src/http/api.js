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
/*所有员工查询*/
export function queryUsersList(pageNo,queryMhAll){
    return request({
        url:"/aoaProcessList/queryList?pageNo="+pageNo+"&&all="+queryMhAll,
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
//查询出状态
export function queryDeeplyList(){
    return request({
        url:"/aoaTypeList/queryDeeplyList",
        method:"get",
    })
}
//查询出所有支付方式
export function queryIncomeTypeList(){
    return request({
        url:"/aoaTypeList/queryIncomeTypeList",
        method:"get",
    })
}
//查询所有科目
export function queryIncomeTreeList(){
    return request({
        url:"/aoaSubject/queryTreeList",
        method:"get",
    })
}
//查询全部用户
export function queryAllUser(){
    return request({
        url:"/aoaUser/queryAll",
        method:"get",
    })
}
//新建流程插入功能
export function addBursement(data){
    return request({
        url:"/aoaBursement/add",
        method:"post",
        data
    })
}
