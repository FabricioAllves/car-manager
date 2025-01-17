import { Model, ModelResponseApi } from './modelTypes'

function toModel(ModelResponseApi: ModelResponseApi): Model {
  return {
    models: ModelResponseApi.modelos.map((model) => ({
      id: model.codigo,
      name: model.nome,
    })),
    years: ModelResponseApi.anos.map((year) => ({
      id: year.codigo,
      name: year.nome,
    })),
  }
}

export const modelAdapter = { toModel }
