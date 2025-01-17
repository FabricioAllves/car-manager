import { getLocalStorageUser } from '@/utils/local-storage/user'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1/carros',
})

const apiAuth = axios.create({
  baseURL: 'https://test-api-y04b.onrender.com',
})

apiAuth.interceptors.request.use(
  async (config) => {
    const token = await getLocalStorageUser()
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export { api, apiAuth }
