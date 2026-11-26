export function useJobStatistics() {
  return useFetch<JobStatistics>('/api/job-statistics', {
    key: 'job-statistics'
  })
}
