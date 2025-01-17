import "./App.css"
import DashboardWrapper from "./components/DashboardWrapper"
import Summaries from "./components/Summaries"
import Revenue from "./components/Revenue"
import BestCrops from "./components/BestCrops"
import Farmers from "./components/Farmers"
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
      <DashboardWrapper contentClassName={`dashboard__content`}>
        <div className="components__row r-1">
        <Summaries/>
        <Revenue/>
        </div>

        

        <div className="components__row r-2">
        <BestCrops/>
        <Farmers/>
        </div>
      </DashboardWrapper>
  )
}

export default App