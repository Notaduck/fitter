import { Chart } from '@components/graph/chart'
import ride from '../../data/file.json'
import Map from '@components/Map'

const GraphPage = () => {

    const km = 1000;

    let points: Array<{ x: number, y: number }> = ride.records.filter(record => record.position_lat && record.position_long
    ).map(record => ({
        x: record.distance / km,
        y: record.speed,
        // heartRate: record.heart_rate
    }))



    return (



        <div className='grid grid-cols-1'>
            {/* <Head> */}
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
            {/* </Head> */}

            <Map />
            <Chart entries={points} />

        </div>

        // <ResponsiveContainer width="100%" height={200}>
        //     <LineChart
        //         width={500}
        //         height={200}
        //         data={points}
        //         syncId="anyId"
        //         margin={{
        //             top: 10,
        //             right: 30,
        //             left: 0,
        //             bottom: 0,
        //         }}
        //     >
        //         <CartesianGrid strokeDasharray="3 3" />
        //         <ReferenceLine />
        //         <XAxis dataKey="distance" tick={<CustomizedAxisTick />} />
        //         <YAxis />
        //         <Tooltip />
        //         <Line type='natural' dataKey="speed" stroke="#8884d8" fill="#8884d8" />
        //     </LineChart>
        // </ResponsiveContainer>

    )
}
export default GraphPage