import github from '../../public/githubCorner.png'
import Image from 'next/image'

const Corner = () => {
  return (
    <a
      href="https://github.com/kunal70006/github-profile"
      rel="noreferrer noopener"
      target="_blank"
      className=" flex h-20 w-48 cursor-pointer justify-end overflow-hidden text-white"
      style={{
        background:
          ' linear-gradient(to top right,#171717 50%,#6366f1 50.1%) top right/80px 80px no-repeat,#171717',
      }}
    >
      <div className="rotate-45 pr-5 pt-3 transition duration-150 ease-in hover:pr-4 hover:pt-2">
        <Image src={github} alt="github icon" height={32} width={32} />
      </div>
    </a>
  )
}

export default Corner
