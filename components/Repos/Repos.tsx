/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next'
import { useState, useEffect, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { RepoProps, RepoStateProps } from '../../Utils/Types/RepoProps'
import FlipMove from 'react-flip-move'
import Image from 'next/image'
import github from '../../public/github.png'
import star from '../../public/star.png'
import forked from '../../public/forked.png'

const Repos: NextPage<RepoProps> = ({ repoData }) => {
  const [selectValue, setSelectValue] = useState('stars')
  const [topRepos, setTopRepos] = useState<any>()
  const dropdownVals = ['stars', 'forks', 'size']

  const handleSelectChange = (event: any) => {
    setSelectValue(event.target.name)
  }

  const nameFilter = (repoName: string) => {
    if (repoName.length > 20) {
      repoName = repoName.slice(0, 18)
      repoName = repoName.concat('...')
    }
    return repoName
  }

  useEffect(() => {
    const getTopRepos = (type: any) => {
      const LIMIT = 8
      const sorted = repoData.sort((a, b) => b[type] - a[type]).slice(0, LIMIT)
      setTopRepos(sorted)
    }
    getTopRepos((selectValue as 'stars') || 'forks' || 'size')
  }, [selectValue, repoData])

  return (
    <section className="my-20  flex w-full flex-col items-start font-medium leading-relaxed tracking-wider text-slate-800">
      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl underline decoration-slate-400 decoration-dashed">
          Top Repos
        </h1>
        <p className=" ml-4 text-lg font-light">by</p>
        <div className="ml-8 text-right">
          <Menu as="div" className="relative inline-block w-24 text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none">
                {selectValue}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className=" absolute z-10 mt-2 w-24 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {dropdownVals.map((val: string, index: number) => (
                  <div key={`${val}${index}`} className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleSelectChange}
                          name={val}
                          className={`${
                            active
                              ? 'bg-indigo-500 text-white'
                              : 'text-gray-900'
                          }  flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {val}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <FlipMove className="mt-4 flex flex-wrap justify-center">
        {topRepos &&
          topRepos.map((repo: RepoStateProps) => (
            <a
              key={repo.url}
              href={repo.url}
              rel="noreferrer noopener"
              target="_blank"
            >
              <div className="mx-4 my-4 flex h-56 w-80 flex-col justify-between rounded-lg p-6 shadow-md  transition duration-200 ease-in hover:shadow-xl">
                <h1 className="mt-4 flex font-mono text-base font-semibold">
                  <Image src={github} alt="repo icon" height={16} width={24} />
                  <span className="ml-4">{nameFilter(repo.name)}</span>
                </h1>
                <p className=" -mt-2 font-normal">{repo.desc}</p>
                <div className="flex w-full items-center justify-between text-xs font-normal">
                  <p>{repo.language}</p>
                  <p className="flex">
                    <Image src={star} height={16} width={16} alt="star icon" />
                    <span className="ml-1">{repo.stars.toLocaleString()}</span>
                  </p>
                  <p className="flex">
                    <Image
                      src={forked}
                      height={16}
                      width={18}
                      alt="forked icon"
                    />
                    <span className="ml-1">{repo.forks.toLocaleString()}</span>
                  </p>
                  <p>{repo.size.toLocaleString()} KB</p>
                </div>
              </div>
            </a>
          ))}
      </FlipMove>
    </section>
  )
}

export default Repos
