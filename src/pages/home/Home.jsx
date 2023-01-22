import React from 'react'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import "./home.css"
import {uData} from "../../components/userdata"
import Chart from '../../components/chart/Chart'
import Widgetlg from '../../components/widgeetlg/Widgetlg'
import Widgetsm from '../../components/widgetsm/Widgetsm'
export default function Home() {
  return (
    <div className='homee'>
      <FeaturedInfo></FeaturedInfo>
      <Chart data={uData} title="User Analytics" dataKey="Active User"  grid ></Chart>
      <div className="homeWidget">
        <Widgetsm/>
        <Widgetlg/>
      </div>
    </div>
    
  )
}
