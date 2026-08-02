import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export default function DrawComparison({driver1, driver2}) {
    return (
        <LineChart
            width={700}
            height={400}
            //style={ { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 } }
            responsive
            margin={ { top: 15, right: 0, left: 0, bottom: 5 } }        
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Distance" stroke= "var(--color-text-3)" />
                {/* <YAxis yAxisId="left" width="auto" stroke="var(--color-text-3)" />
                <YAxis yAxisId="right" width="auto" stroke="var(--color-text-3)" /> */}
                <Tooltip
                    cursor={{stroke: 'var(--color-border-2)' }}
                    contentStyle={ { backgroundColor: 'var(--color-surface-base)', borderColor: 'var(--color-border-2)' } }
                />
                <Legend />
                <Line 
                    // yAxisId="left"
                    type="monotone"
                    dataKey="Speed"
                    data={driver1}
                    stroke="#e8a921"
                    dot={false}
                    activeDot={{ r:8, stroke: 'var(--color-surface-base)' }}
                />
                <Line 
                    // yAxisId="right" 
                    type="monotone"
                    dataKey="Speed"
                    data={driver2}
                    stroke="#e8027d"
                    dot={false}
                    activeDot={{ r:8, stroke: 'var(--color-surfaece-base)' }}
                />
                
                {/* <RechartsDevtools /> */}
            </LineChart>
    )
}