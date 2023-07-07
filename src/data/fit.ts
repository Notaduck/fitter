type Record = {
    timestamp: string
    elapsed_time: number
    speed: number
    distance: number
    heart_rate: number
    cadence: number
    altitude: number
    temperature: number
    position_lat: number
    position_long: number
}

export type FIT = {
    records: Record[]
}