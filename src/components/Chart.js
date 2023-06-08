import React from 'react'

import {Line} from 'react-chartjs-2'
import {Chart as chartJs,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, registerables} from 'chart.js'
import { data } from 'autoprefixer'

chartJs.register(
    CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend
)

const Chart = ({arr=[],currency,days}) => {
    const prices=[]
    const date = []
    const data = {
        labels: date,
        datasets:[{label:`price in ${currency}`,data:prices,borderColor:"rgb(23,435,6)",backgroundColor:"rgba(23,435,6,0.5)"}]
    }
     for (let i = 0; i < arr.length; i++) {
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }
  return (
    <>
        <Line options={{responsive: true}} data={data} />
    </>
  )
}

export default Chart