import { FIT } from "@src/data/fit";
import { LatLng } from "leaflet";

const centroid = (records: FIT['records']) {

    let acc = {
        lng: 0,
        lat: 0
    }
    return records.reduce((prev, curr) => {

        if (curr.position_lat && curr.position_long) {
            acc.lat += curr.position_lat
            acc.lng += curr.position_long


        }



        return acc
    }, acc)
}