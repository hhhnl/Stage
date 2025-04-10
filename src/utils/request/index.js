import axios from 'axios'
import { ElLoading } from 'element-plus'
import { ref, watch } from 'vue'

const loading = ref(0)

watch(loading, (val) => {
    let loadingInstance = ElLoading.service({ fullscreen: true })
    if (!val) return loadingInstance.close()
})

const baseURL = import.meta.env.VITE_API_URL

const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
        // 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    }
})

function request(options) {
    const { params, url, method = 'GET', data = {}, _headers = {}, timeout = 30000 } = options

    loading.value += 1

    return new Promise(function (resolve, reject) {
        instance({
            url,
            method,
            params,
            data,
            timeout,
            headers: {
                // 'Content-Type': 'application/json',
                ..._headers,
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then((e) => {
                resolve(e);
                loading.value -= 1
            })
            .catch((e) => {
                loading.value -= 1
                reject(e);
            })
    })
}

export default request