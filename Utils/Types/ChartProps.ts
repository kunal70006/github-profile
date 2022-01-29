import { RepoProps } from './RepoProps'

export interface ChartProps extends RepoProps {
  langData: {
    label: string
    value: number
    color: string
  }[]
}

export interface ChartDataProps {
  langData: {
    label: string
    value: number
    color: string
  }[]
}
