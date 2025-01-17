import { useQuery } from '@tanstack/react-query'
import { brandService } from '../brandService'
import { useMemo, useState } from 'react'

export function useBrand() {
  const [searchText, setSearchText] = useState('')
  const { data: brands } = useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      const response = await brandService.getListBrand()
      return response
    },
  })

  const filteredBrands = useMemo(() => {
    return brands?.filter((brand) =>
      brand.name.toLowerCase().includes(searchText.toLowerCase()),
    )
  }, [brands, searchText])

  return { brands, filteredBrands, searchText, setSearchText }
}
