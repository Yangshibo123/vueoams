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
//通讯录：
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

//加班申请：
/*通讯录查询人名*/
export function queryTxl(){
    return request({
        url:"/aoaUser/queryAll",
        method:"get",
    })
}
/*查询加班类型*/
export function queryJblx(){
    return request({
        url:"/aoaTypeList/queryJblx",
        method:"get",
    })
}


//我的申请：
/*添加费用报销*/
export function queryMyList(userId,content,pageNo,pageSize){
    return request({
        url:"/aoaProcessList/queryMyList?userId="+userId+"&&content="+content+"&&pageNo="+pageNo+"&&pageSize="+pageSize,
        method:"get",
    })
}
//我的申请查询
export function queryProcess(pageNo,pageSize,content,userId){
    return request({
        url:"/aoaProcessList/queryProcess",
        method:"get",
        params:{
            pageNo:pageNo,
            pageSize:pageSize,
            content:content,
            processUserId:userId
        }
    });
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
//查询出紧急程度
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
/*我的申请详情页*/
export function queryMyBursementDetail(processId){
    return request({
        url:"/aoaProcessList/queryMyBursementDetail?processId="+processId,
        method:"get",
    })
}
