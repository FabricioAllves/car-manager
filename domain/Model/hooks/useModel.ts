import { useQuery } from '@tanstack/react-query'
import { modelService } from '../modelService'
import { useMemo, useState } from 'react'

export function useModel(brandId: string) {
  const [searchText, setSearchText] = useState('')
  const { data: models } = useQuery({
    queryKey: ['models'],
    queryFn: async () => {
      const response = await modelService.getListModel(brandId)
      return response
    },
  })

  const filteredModels = useMemo(() => {
    return models?.models?.filter((models) =>
      models.name.toLowerCase().includes(searchText.toLowerCase()),
    )
  }, [models, searchText])

  return { models, searchText, setSearchText, filteredModels }
}
