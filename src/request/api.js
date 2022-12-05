//将request整体倒入
import request from '@/request'

export function getSuggestion(query, region) {
    return request({
        method: 'get',
        url: '/suggestion?query=' + query + '&region=' + region + '&output=json&ak=7u8EaeqYHtKmZtrSPDkBc0hwD8pMf3Lh',
        params: {
            query,
            region
        }
    })
}
