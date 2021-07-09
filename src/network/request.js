import {output} from "./axiosRequest";


//查询统计信息
export function QueryCompanyStatistics(params) {
    return output({
        url: '/Company/statistics',
        params
    })
}
export function QueryPatentStatistics(params) {
    return output({
        url: '/Patent/statistics',
        params
    })
}
export function QuerySubsidyStatistics(params) {
    return output({
        url: '/Subsidy/statistics',
        params
    })
}

//水电统计
export function BillStatistics(params) {
    return output({
        url: '/Bill/statistics',
        params,
    })
}

//公告查询
export function AnnouncementPage(data) {
    return output({
        method: 'post',
        data,
        url: 'Announcement/page'
    })
}

//查询车辆分布
export function CarStatus(params) {
    return output({
        params,
        url: '/BarrierLog/getCarStatus'
    })
}

//道闸模块
export function BarrierLogPage(data) {
    return output({
        url: '/BarrierLog/page',
        method: 'post',
        data,
    })
}
