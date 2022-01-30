/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header/Header'
import Repos from '../../components/Repos/Repos'
import Charts from '../../components/Charts/Charts'
import RateLimit from '../../components/RateLimit/RateLimit'
import Corner from '../../components/Corner/Corner'
import GhPolyglot from 'gh-polyglot'
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { RepoDataProps } from '../../Utils/Types/RepoProps'
import Footer from '../../components/Footer/Footer'

const Index = ({ data, repoData }: any) => {
  const [langData, setLangData] = useState<any>()
  const [limit, setLimit] = useState(0)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const getRateLimit = async () => {
      const rateLimitRes = await fetch('https://api.github.com/rate_limit')
      const rateLimitData = await rateLimitRes.json()
      const limitNum = rateLimitData?.rate?.remaining
      setLimit(limitNum)
    }

    getRateLimit()
    const getLangData = () => {
      const me = new GhPolyglot(`${id}`)
      try {
        me.userStats((err: any, stats: any) => {
          if (err) {
            console.log(err)
          }
          setLangData(stats)
        })
      } catch (err) {
        console.log(err)
      }
    }

    getLangData()
  }, [id])
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
  try {
    repoData?.map((repo: RepoDataProps) => {
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
  } catch (err) {
    console.log(err)
  }

  return repoData.length ? (
    <main className="flex h-screen w-screen flex-col items-center overflow-x-hidden px-60">
      <Head>
        <title>A Better Github Profile | {id}</title>
      </Head>
      <div className="flex w-screen justify-between">
        <RateLimit limit={limit} />
        <Corner />
      </div>
      <Header headerData={headerData} />
      <Charts langData={langData} repoData={repoArr} />
      <Repos repoData={repoArr} />
      <Footer />
    </main>
  ) : (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-900 text-center font-medium">
      <Head>
        <title>oops</title>
      </Head>
      <h1 className="text-4xl leading-snug tracking-wider text-slate-100">
        Either we couldn&apos;t find the user <br />
        Or <br />
        You hit the rate limit :/
      </h1>
      <p className="mb-8 mt-4 text-2xl font-normal text-slate-600">
        Here&apos;s a cat gif instead
      </p>
      <Image
        className="rounded-lg"
        src="https://c.tenor.com/i1rsgMyOFgcAAAAd/cat-cat-love.gif"
        alt="cat gif"
        width={128}
        height={256}
      />
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
