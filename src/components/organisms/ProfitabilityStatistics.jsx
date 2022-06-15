import React, {useEffect} from "react"

// Chart
import "https://unpkg.com/echarts/dist/echarts.min.js"
import "https://unpkg.com/@chartisan/echarts/dist/chartisan_echarts.js"

function ProfitabilityStatistics() {

  useEffect(() => {
    const chart = new window.Chartisan({
      el: "#chart",
      url: "/api/chart/sample_chart",
      hooks: new window.ChartisanHooks()
        .colors(["#ff5824"])
        .legend({ position: "bottom" })
        .datasets(["line"])
        .tooltip(),
    })

    return () => {
      chart.destroy()
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex space-x-3">
        <div className="text-2xl uppercase font-bold">Profitability statistics</div>
        <div className="flex-grow text-left"></div>
        <div className="flex space-x-2">
          <div className="flex-grow text-right space-x-4 text-sm pt-4"></div>
        </div>
      </div>

      <div className="bg-white p-5 rounded">
        <div id="chart" style={{height: "300px"}}></div>
      </div>
    </div>
  )
}

export default ProfitabilityStatistics
