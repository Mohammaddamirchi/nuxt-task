import type { JobStatisticsDto } from '~/types/job-statistics'

export function useJobStatistics() {
  const { public: { apiBaseUrl } } = useRuntimeConfig()

  return useFetch<JobStatisticsDto>('/hire/v1/job/statistics/', {
    baseURL: apiBaseUrl,
    key: 'job-statistics',
    timeout: 8000
  })
}
