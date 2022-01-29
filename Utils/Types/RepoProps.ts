export interface RepoProps {
  repoData: {
    name: string
    url: string
    desc: string
    size: number
    stars: number
    language: string
  }[]
}

export interface RepoStateProps {
  name: string
  url: string
  desc: string
  size: number
  stars: number
  language: string
  forks: number
}

export interface RepoDataProps {
  name: string
  html_url: string
  description: string
  size: number
  stargazers_count: number
  language: string
  forks: number
}
