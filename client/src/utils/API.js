import axios from 'axios'

export default {
    saveData: function (data) {
        return axios.post('/api/user', {
            _id: data._id,
    startDate: data.startDate,
    endDate: data.endDate,
    title: data.title
        }).then(res => res.data).catch(err => console.log(err))
    },
    findAllData: function() {
        return axios.get('/api/user').then(res => res.data).catch(err => console.log(err))
    }
}
// 