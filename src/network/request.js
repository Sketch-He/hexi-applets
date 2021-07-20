import {cloud, transfer} from "./axiosRequest";


// //查询统计信息
// export function QueryCompanyStatistics(params) {
//     return output({
//         url: '/Company/statistics',
//         params
//     })
// }
// export function QueryPatentStatistics(params) {
//     return output({
//         url: '/Patent/statistics',
//         params
//     })
// }
// export function QuerySubsidyStatistics(params) {
//     return output({
//         url: '/Subsidy/statistics',
//         params
//     })
// }
//
// //水电统计
// export function BillStatistics(params) {
//     return output({
//         url: '/Bill/statistics',
//         params,
//     })
// }
//
// //公告查询
// export function AnnouncementPage(data) {
//     return output({
//         method: 'post',
//         data,
//         url: 'Announcement/page'
//     })
// }
//
// //查询车辆分布
// export function CarStatus(params) {
//     return output({
//         params,
//         url: '/BarrierLog/getCarStatus'
//     })
// }
//
// //道闸模块
// export function BarrierLogPage(data) {
//     return output({
//         url: '/BarrierLog/page',
//         method: 'post',
//         data,
//     })
// }

//版本优化
//获取当前版本
export function getVersion() {
    return cloud({
        url: '/version/get',
    })
}

//切换版本
export function setVersion(id) {
    return cloud({
        url: '/version/set',
        params: {id}
    })
}

//获取数据
export function getJson(params) {
    return cloud({
        url: '/json/get',
        params,
    })
}

export function UserLogin( params) {
    return transfer({
        url: '/user/login',
        params,
    })
}

//获取当前登录状态
export function UserStatus() {
    return transfer({
        url: '/user/status',

    })
}
//登出*
export function UserLogout() {
    return transfer({
        url: '/user/logout',
    })
}


// //修改数据
// export function setJson(params, data) {
//     return cloud({
//         url: '/json/set',
//         method: 'post',
//         params,
//         data
//     })
// }
//
// //覆盖数据
// export function overWrite({type, name, version}) {
//     return cloud({
//         url: '/json/overWrite',
//         params: {type, name, version}
//     })
// }

//获取版本列表
export function versionList() {
    return cloud({
        url: '/json/list',
    })
}

// //创建新版本
// export function createVersion(id) {
//     return cloud({
//         url: '/json/create',
//         params: {id}
//     })
// }

//删除版本
export function delVersion(id) {
    return cloud({
        url: '/json/del',
        params: {id}
    })
}

