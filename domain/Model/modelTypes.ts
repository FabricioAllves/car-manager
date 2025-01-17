export interface Model {
  models: {
    id: number
    name: string
  }[]
  years: {
    id: number
    name: string
  }[]
}

export interface ModelResponseApi {
  modelos: {
    codigo: number
    nome: string
  }[]
  anos: {
    codigo: number
    nome: string
  }[]
}
