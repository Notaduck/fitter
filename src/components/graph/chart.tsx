import * as d3 from "d3";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { line, curveCardinal } from "d3-shape";

type Point = {
    x: number,
    y: number
}

type Props = {
    entries: Point[]
}

export const Chart = ({ entries }: Props) => {
    let [ref, bounds] = useMeasure();

    return (
        <div className="relative h-full w-full" ref={ref}>
            {bounds.width > 0 && (
                <ChartInner data={entries} width={bounds.width} height={bounds.height} />
            )}
        </div>
    );
}

type ChartInnerProps = {
    data: Point[],
    width: number,
    height: number,
}

function ChartInner({ data, width, height }: ChartInnerProps) {

    let margin = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 24,
    };

    const maxX = d3.max(data, (d) => d.x);
    console.log(maxX)
    const [minY, maxY] = d3.extent(data.map((d) => d.y));
    let xScale = d3
        .scaleLinear()
        .domain([0, maxX])
        .range([margin.left, width - margin.right]);

    let yScale = d3
        .scaleLinear()
        .domain([minY, maxY])
        .range([height - margin.bottom, margin.top]);

    let line = d3
        .line()
        .x((d, i) => xScale(i))
        .y((d) => yScale(d.y));


    let d = line(data);

    // const xInterval = data.map(point : Point) => x)
    console.log(`xScale`, xScale.ticks(10))
    console.log(`ySCale`, yScale.ticks(10))

    return (
        <>

            {/* X axis */}
            <svg className="" viewBox={`0 0 ${width} ${height}`}>
                {
                    xScale.ticks().map((x) => (
                        <g
                            key={x}
                            className="text-gray-400"
                            transform={`translate(${xScale(x)},0)`}
                        >
                            <text
                                x={0}
                                y={height - 5}
                                textAnchor="middle"
                                fill="currentColor"
                                className="text-[18px]"
                            >
                                {x.toFixed(1)}
                            </text>
                        </g>
                    ))}

                {/* Y axis */}
                {
                    yScale.ticks(10).map((y) => (
                        <g
                            transform={`translate(0, ${yScale(y)})`}
                            className="text-gray-400"
                            key={y}
                        >
                            <line
                                x1={margin.left}
                                x2={width - margin.right}
                                stroke="currentColor"
                                strokeDasharray="1,3"
                            />
                            <text
                                alignmentBaseline="middle"
                                className="text-[10px]"
                                fill="currentColor"
                            >
                                {y.toFixed(1)}
                            </text>
                        </g>
                    ))}

                {/* Line */}
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, type: "spring" }}
                    d={d}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>
        </>
    );
}
