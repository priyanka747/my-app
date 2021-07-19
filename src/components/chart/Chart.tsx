import "./chart.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Grid from '@material-ui/core/Grid';
interface chartData {
    title: string;
    data: any;
    dataKey: any;
    grid: any;
}
interface tooltipProps {
    active?: any;
    payload?: any;
    label?: any;
}
const CustomTooltip = (props: tooltipProps) => {
    if (props.active && props.payload && props.payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${props.label} : ${props.payload[0].value}`}</p>
                {/* <p className="intro">{getIntroOfPage(props.label)}</p> */}
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
};
export default function Chart(props: chartData) {

    return (
        <div className="chart">

            <div className="ChartHeadings">
                <h3 className="chartTitle">{props.title}</h3>
                <div className="headRight">
                    <div className="headingItem">

                        <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                            <Grid item xs={12} spacing={7}>
                                <ToggleButtonGroup size="small" exclusive className='tab' >
                                    <ToggleButton value="tab1"> 
                                    <h3>Heading1</h3>
                                    <div className="headAmount">24,350</div>
                                    </ToggleButton>
                                    <ToggleButton value="tab2">
                                    <h3>Heading2</h3>
                                    <div className="headAmount">24,350</div>
                                    </ToggleButton>
                                    <ToggleButton value="tab2">
                                    <h3>Heading3</h3>
                                    <div className="headAmount">24,350</div>
                                    </ToggleButton>
                                    <ToggleButton value="tab2">
                                    <h3>Heading4</h3>
                                    <div className="headAmount">24,350</div>
                                    </ToggleButton>
                                    <ToggleButton value="tab2"> 
                                    <h3>Heading5</h3>
                                    <div className="headAmount">24,350</div>
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={props.data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis />
                    <Line type="monotone" dataKey="Type 1" stroke="#0000ff" />
                    <Line type="monotone" dataKey="Type 2" stroke="#00ff00" />
                    <Line type="monotone" dataKey="Type 3" stroke="#ff0000" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    {props.grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}