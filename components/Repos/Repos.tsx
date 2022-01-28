import { NextPage } from 'next'
import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { RepoProps } from '../../Utils/Types/RepoProps'

const Repos: NextPage<RepoProps> = ({ repoData }) => {
  const [selectValue, setSelectValue] = useState('stars')
  const dropdownVals = ['stars', 'forks', 'size']

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (event: any) => {
    console.log(selectValue)

    setSelectValue(event.target.name)
  }
  return (
    <div className="my-20  flex w-full flex-col items-start font-medium leading-relaxed tracking-wider text-slate-800">
      <div className="flex  items-baseline justify-between">
        <h1 className="text-3xl underline decoration-slate-400 decoration-dashed">
          Top Repos
        </h1>
        <p className=" ml-4 text-lg font-light">by</p>
        <div className="ml-8 text-right">
          <Menu as="div" className="relative inline-block w-24 text-left">
            <div>
              <Menu.Button className=" inline-flex w-full justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none">
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
              <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
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
    </div>
  )
}

export default Repos
