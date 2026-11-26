/** Shape returned by `GET /hire/v1/job/statistics/`. */
export interface JobStatisticsDto {
  accepted_count: number
  application_count: number
  position_count: number
}

/** Shape consumed by the app. */
export interface JobStatistics {
  acceptedCount: number
  applicationCount: number
  positionCount: number
}
