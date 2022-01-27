import { useRouter } from 'next/router'

const user = () => {
  const { query } = useRouter()
  const { id } = query
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default user
