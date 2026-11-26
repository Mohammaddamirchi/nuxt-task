function isCount(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0
}

function isJobStatisticsDto(value: unknown): value is JobStatisticsDto {
  if (typeof value !== 'object' || value === null) return false

  const dto = value as Record<string, unknown>

  return isCount(dto.accepted_count)
    && isCount(dto.application_count)
    && isCount(dto.position_count)
}

/**
 * Proxies the upstream statistics endpoint: keeps the API address on the server,
 * avoids CORS in the browser and caches the response for a short time.
 */
export default defineCachedEventHandler(async (event): Promise<JobStatistics> => {
  const { apiBaseUrl } = useRuntimeConfig(event)

  const data = await $fetch<unknown>('/hire/v1/job/statistics/', {
    baseURL: apiBaseUrl,
    timeout: 8000,
    retry: 1
  }).catch((error: unknown) => {
    console.error('[job-statistics] upstream request failed', error)
    throw createError({ statusCode: 502, statusMessage: 'Statistics service unavailable' })
  })

  if (!isJobStatisticsDto(data)) {
    console.error('[job-statistics] unexpected upstream payload', data)
    throw createError({ statusCode: 502, statusMessage: 'Invalid statistics response' })
  }

  return {
    acceptedCount: data.accepted_count,
    applicationCount: data.application_count,
    positionCount: data.position_count
  }
}, {
  name: 'job-statistics',
  maxAge: 60,
  swr: false
})
