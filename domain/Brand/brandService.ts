import { brandApi } from './brandApi'
import { apiBrandAdapter } from './brandAdapter'
import { Brand } from './brandTypes'

async function getListBrand(): Promise<Brand[]> {
  const response = await brandApi.getListBrand()
  return response.map((brand) => apiBrandAdapter.toBrand(brand))
}

export const brandService = {
  getListBrand,
}
