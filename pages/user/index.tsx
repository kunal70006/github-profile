// import { useRouter } from 'next/router'
import Header from '../../components/Header/Header'
import Repos from '../../components/Repos/Repos'
import { GetServerSideProps } from 'next'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Index = ({ data, repoData }: any) => {
  console.log(repoData)
  const headerData = {
    avatar: data?.avatar_url,
    createdAt: data?.created_at,
    followers: data?.followers,
    following: data?.following,
    name: data?.name,
    login: data?.login,
    repos: data?.public_repos,
  }
  const repos = {
    name: repoData?.name,
    url: repoData?.html_url,
    desc: repoData?.description,
    size: repoData?.size,
    stars: repoData?.stargazers_count,
    language: repoData?.language,
    forks: repoData?.forks,
  }
  return (
    <div className="flex h-screen flex-col items-center px-60">
      <Header headerData={headerData} />
      <Repos repoData={repos} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.github.com/users/${id}`)
  const data = await res.json()
  const repoRes = await fetch(`https://api.github.com/users/${id}/repos`)
  const repoData = await repoRes.json()
  return {
    props: {
      data,
      repoData,
    },
  }
}

export default Index
