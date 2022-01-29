/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
// import { useRouter } from 'next/router'
import Header from '../../components/Header/Header'
import Repos from '../../components/Repos/Repos'
import { GetServerSideProps } from 'next'
import { RepoDataProps } from '../../Utils/Types/RepoProps'
const Index = ({ data, repoData }: any) => {
  // console.log(repoData)
  let repoArr: {
    name: string
    url: string
    desc: string
    size: number
    stars: number
    language: string
    forks: number
  }[] = []
  const headerData = {
    avatar: data?.avatar_url,
    createdAt: data?.created_at,
    followers: data?.followers,
    following: data?.following,
    name: data?.name,
    login: data?.login,
    repos: data?.public_repos,
  }
  repoData.map((repo: RepoDataProps) => {
    let tempObj = {
      name: repo?.name,
      url: repo?.html_url,
      desc: repo?.description,
      size: repo?.size,
      stars: repo?.stargazers_count,
      language: repo?.language,
      forks: repo?.forks,
    }
    repoArr.push(tempObj)
  })

  return (
    <div className="flex h-screen flex-col items-center px-60">
      <Header headerData={headerData} />
      <Repos repoData={repoArr} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.github.com/users/${id}`)
  const data = await res.json()
  const repoRes = await fetch(
    `https://api.github.com/users/${id}/repos?per_page=100`
  )
  const repoData = await repoRes.json()
  return {
    props: {
      data,
      repoData,
    },
  }
}

export default Index
