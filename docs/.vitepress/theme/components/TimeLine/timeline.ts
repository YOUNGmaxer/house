import dayjs from 'dayjs'

/** 时间点信息 */
export interface TimePoint {
  /** 首次时间戳 */
  timestamp: number
  /** 上次更新时间戳 */
  lastModify: number
  /** 主内容 */
  content: string
  /** 照片 */
  photo?: string
  /** 视频 */
  video?: string
}

export const formatTimestamp = (timestamp: number): string => dayjs(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss')
