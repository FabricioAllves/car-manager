import { modelApi } from './modelApi'
import { modelAdapter } from './modelAdapter'
import { Model } from './modelTypes'

async function getListModel(brandId: string): Promise<Model> {
  const response = await modelApi.getListModel(brandId)
  return modelAdapter.toModel(response)
}

export const modelService = {
  getListModel,
}
