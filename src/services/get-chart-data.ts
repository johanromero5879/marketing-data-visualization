import { chartData } from "../mock"
import { Filter, ChartData } from "../types"

export const getChartData = async (filter?: Filter): Promise<ChartData[]> => {
  if (!filter) return chartData

  /* Fetching chart data by filters */
  const data = chartData.filter((data) => {
    const createdAt = new Date(data.label)
    
    if (!filter.endDate) return createdAt >= filter.startDate

    return createdAt >= filter.startDate && createdAt <= filter.endDate
  })

  return data
}
