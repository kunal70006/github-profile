import { NextPage } from 'next'
import { RateLimitProps } from '../../Utils/Types/RateLimitProps'

const RateLimit: NextPage<RateLimitProps> = ({ limit }) => {
  return (
    <div className="flex w-full flex-col bg-neutral-900 px-8 pt-4 text-2xl leading-relaxed tracking-wider text-slate-500">
      <h1>{limit} / 60</h1>
      <h1 className="text-xs font-light">REQUESTS LEFT</h1>
    </div>
  )
}

export default RateLimit
