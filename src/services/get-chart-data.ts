import { chartData } from "../mock"
import { Filter, ChartData } from "../types"

export const getChartData = async (filter?: Filter): Promise<ChartData[]> => {
  let data = [...chartData]

  if (filter) {
    /* Fetching chart data by filters */
    data = data.filter((data) => {
      const createdAt = new Date(data.label)
      
      if (!filter.endDate) return createdAt >= filter.startDate

      return createdAt >= filter.startDate && createdAt <= filter.endDate
    })
  }
  
  // Sort data by date
  data.sort((d1, d2) => {
    if (d1.label > d2.label) return 1
    if (d1.label < d2.label) return -1
    return 0
  })
  
  return data
}
