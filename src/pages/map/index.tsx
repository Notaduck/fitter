import Head from 'next/head'
import Map from '@components/Map'
import ride from '../../data/file.json'
import { Chart } from '@components/graph/chart'


const MapPage = () => {

  const km = 1000;

  let DataSetSpeed: Array<{ x: number, y: number }> = ride.records.filter(record => record.position_lat && record.position_long
  ).map(record => ({
    x: record.distance / km,
    y: record.speed,
  }))


  let DataSetCadence: Array<{ x: number, y: number }> = ride.records.filter(record => record.position_lat && record.position_long
  ).map(record => ({
    x: record.distance / km,
    y: record.cadence,
  }))


  let DataSetHeartRate: Array<{ x: number, y: number }> = ride.records.filter(record => record.position_lat && record.position_long
  ).map(record => ({
    x: record.distance / km,
    y: record.heart_rate,
  }))

  return (
    <div>
      <Head>
        <title>Map Example | Jumpstart your new leaflet mapping Project with next.js and typescript 🤩</title>
        <meta
          property="og:title"
          content="Map Example | Jumpstart your new leaflet mapping Project with next.js and typescript 🤩"
          key="title"
        />
        <meta
          name="description"
          content="next-leaflet-starter-typescript is an extensible next.js starter template for the leaflet-maps-react plugin. Written in typescript,
      visually enhanced by tailwind and lucide-react icons."
        />
      </Head>
      <div className=''>

        <Map />
      </div>

      <Chart entries={DataSetSpeed} />
    </div>
  )
}

export default MapPage
