import { NextPage } from 'next'
import Image from 'next/image'
import { HeaderProps } from '../../Utils/Types/HeaderProps'
import Moment from 'react-moment'
// import 'moment-timzone'
import calendar from '../../public/calendar.png'

const Header: NextPage<HeaderProps> = ({ headerData }) => {
  //   console.log(headerData)

  return (
    <div className="h-fit-content flex w-screen flex-col items-center bg-neutral-900 font-medium leading-relaxed tracking-wider text-slate-200">
      <div
        className="mt-20 flex items-center justify-center border-8 border-indigo-500"
        style={{ borderRadius: '50%' }}
      >
        <Image
          src={headerData.avatar}
          alt="github avatar"
          //   layout="fill"
          height={128}
          width={128}
          className="rounded-full"
        />
      </div>
      <div>
        <h1 className="mt-4 text-4xl">{headerData.name}</h1>
      </div>
      <div className="mt-4 text-2xl text-indigo-500">
        <a
          href={`https://www.github.com/${headerData.login}`}
          rel="noreferrer"
          target="_blank"
          className=" hover:underline"
        >
          @{headerData.login}
        </a>
      </div>
      <div className="my-4 flex w-80 items-center justify-around text-slate-400">
        <Image src={calendar} alt="calender icon" height={20} width={20} />
        <p className="text-base">
          <Moment date={headerData.createdAt} />
        </p>
      </div>
      <div className="mt-4 mb-64 flex w-1/4 justify-between">
        <div className="rounded-lg bg-neutral-800 py-4 px-8 text-center">
          <p className="text-2xl">
            {headerData.repos} <br />
            <span className=" text-xs text-slate-400">REPOSITORIES</span>
          </p>
        </div>
        <div className="rounded-lg bg-neutral-800 py-4 px-8 text-center">
          <p className="text-2xl">
            {headerData.followers} <br />
            <span className=" text-xs text-slate-400">FOLLOWERS</span>
          </p>
        </div>
        <div className="rounded-lg bg-neutral-800 py-4 px-8 text-center">
          <p className="text-2xl">
            {headerData.following} <br />
            <span className=" text-xs text-slate-400">FOLLOWING</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
