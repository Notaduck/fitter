import { Chart } from '@components/graph/chart'
import ride from '../../data/file.json'
import Map from '@components/Map'
import { Column, Layout, Row } from '@components/layout/layout';

const GraphPage = () => {

    const km = 1000;


    let dataSetSpeed: Array<{ x: number, y: number }> = ride.records.filter(record => record.position_lat && record.position_long
    ).map(record => ({
        x: record.distance / km,
        y: record.speed,
    }))


    let dataSetCadence: Array<{ x: number, y: number }> = ride.records.filter(record => record.position_lat && record.position_long
    ).map(record => ({
        x: record.distance / km,
        y: record.cadence,
    }))


    let dataSetHeartRate: Array<{ x: number, y: number }> = ride.records.filter(record => record.position_lat && record.position_long
    ).map(record => ({
        x: record.distance / km,
        y: record.heart_rate,
    }))



    return (


        <Layout>

            {/* <Row><Column><Map /></Column></Row> */}

            <Row>
                <Column>

                    <Chart entries={dataSetSpeed} />
                </Column>

            </Row>
            <Row>
                <Column>

                    <Chart entries={dataSetCadence} />
                </Column>

            </Row>

            <Row>
                <Column>

                    <Chart entries={dataSetHeartRate} />
                </Column>
            </Row>


        </Layout>



    )
}
export default GraphPage