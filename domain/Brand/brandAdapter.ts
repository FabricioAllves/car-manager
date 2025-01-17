import { Brand, BrandResponseApi } from './brandTypes'

function toBrand(BrandResponseApi: BrandResponseApi): Brand {
  return {
    id: Number(BrandResponseApi.codigo),
    name: BrandResponseApi.nome,
  }
}

export const apiBrandAdapter = { toBrand }
