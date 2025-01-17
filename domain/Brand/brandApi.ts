import { api } from '@/api'
import { BrandResponseApi } from './brandTypes'

async function getListBrand(): Promise<BrandResponseApi[]> {
  const response = await api.get<BrandResponseApi[]>('/marcas')
  return response.data
}

export const brandApi = {
  getListBrand,
}
