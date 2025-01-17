import { api } from '@/api'

import { ModelResponseApi } from './modelTypes'

async function getListModel(brandId: string): Promise<ModelResponseApi> {
  const response = await api.get<ModelResponseApi>(`/marcas/${brandId}/modelos`)
  return response.data
}

export const modelApi = {
  getListModel,
}
