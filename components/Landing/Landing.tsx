import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import github from '../../public/github.png'

const Landing = () => {
  const [username, setUsername] = useState('')
  const router = useRouter()
  return (
    <main>
      <Head>
        <title>Github Profile</title>
      </Head>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          router.push({
            pathname: '/user',
            query: { id: username },
          })
        }}
      >
        <div className="flex min-h-screen flex-col items-center justify-center tracking-wider">
          <div className="-mt-40">
            <Image src={github} alt="github icon" height={128} width={128} />
          </div>
          <div className="my-4">
            <h1 className=" text-center text-4xl leading-relaxed text-gray-200 ">
              A Cool Way To Visualise <br /> Your Github Profile
            </h1>
          </div>
          <div>
            <input
              type="text"
              className="rounded-lg bg-neutral-600 px-4 py-2 text-center text-4xl tracking-wider text-indigo-500 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
      </form>
    </main>
  )
}

export default Landing
