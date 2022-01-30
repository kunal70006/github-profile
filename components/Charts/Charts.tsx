import { NextPage } from 'next'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie, Doughnut } from 'react-chartjs-2'
import { ChartProps } from '../../Utils/Types/ChartProps'

const Charts: NextPage<ChartProps> = ({ langData, repoData }) => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  //   console.log(repoData)
  const labels = langData?.map((lang) => lang.label)
  const data = langData?.map((lang) => lang.value)
  const colors = langData?.map((lang) => lang.color)

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Top Languages',
        data: data,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  }
  const sortedRepos = repoData?.sort((a, b) => b.stars - a.stars)?.slice(0, 5)
  const sortedRepoData = sortedRepos.map((repo) => repo.stars)
  const repoLabels = sortedRepos?.map((repo) => repo.name)?.slice(0, 5)
  const barData = {
    labels: repoLabels,
    datasets: [
      {
        label: 'Most Starred Repos',
        data: sortedRepoData,
        backgroundColor: colors?.slice(0, 5),
        borderColor: colors?.slice(0, 5),
        borderWidth: 1,
      },
    ],
  }

  return (
    <section className="-mt-24 flex w-full justify-around">
      <div className=" flex flex-col rounded-lg bg-white px-12 py-8  shadow-lg">
        <h1 className="text-3xl underline decoration-slate-400 decoration-dashed">
          Top Languages
        </h1>
        <div className="mt-8">
          <Pie data={chartData} />
        </div>
      </div>
      <div className=" flex flex-col rounded-lg bg-white px-12 py-8 shadow-lg">
        <h1 className="text-3xl underline decoration-slate-400 decoration-dashed">
          Most Starred
        </h1>
        <div className="mt-8">
          <Doughnut data={barData} />
        </div>
      </div>
    </section>
  )
}

export default Charts
