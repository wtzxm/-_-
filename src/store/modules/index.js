import ajax from '../../http'
import {
	CHANGEINDEXDATA
} from '../mutation-type'
const state = {
	indexData: {}, // index主页数据
}

const mutations = {
	[CHANGEINDEXDATA](state, indexData){
		state.indexData = indexData
	}
}

const actions = {
	async getIndexData({commit}){
		console.log("++++++")
		// 异步行为： 发送请求获取数据
		let indexData = await ajax.index.getIndexData()
		commit(CHANGEINDEXDATA, indexData)
	}
}



export default {
	state,
	mutations,
	actions,
}