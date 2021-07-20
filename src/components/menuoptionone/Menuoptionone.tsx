import React ,  {useState} from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import './menuoptionone.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import FeaturedInfo from '../featuredinfo/FeaturedInfo';
import Chart from '../chart/Chart';
import { userData } from '../../dummyData';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: '25px/38px',
            fontWeight: theme.typography.fontWeightMedium,
            fontFamily: 'Roboto',
            color: '#000000',
            padding: '5px'
        },
        gridStyle: {
            padding: '15px',
            font: 'normal normal normal 14px/17px Roboto',
          
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '18px',
        },
        icon: {
            color: '#2569E6',

        },
        tab: {
            padding: '20px'

        },
    }),
);

const Menuoptionone = () => {
    const classes = useStyles();
    const [name, setName] =useState("Jason Statham");
    return (
        <div className="home">
            <div className="mainWrapper">
                <Accordion elevation={3}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"

                    >
                        <Typography className={classes.heading}>Lorem Ipsum</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordinDetails">
                        <Grid item xs={12} md={4} >
                            <Typography variant="h6" className={classes.title}>
                                <SettingsIcon className={classes.icon} fontSize="large" /> Lorem Ipsum is simply dummy text
                            </Typography>
                            <div className={classes.demo}>
                                <List dense>
                                    {[0, 1, 2, 3, 4].map((value) => (
                                        <ListItem>
                                            <ListItemIcon>
                                                0{value + 1}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Lorem Ipsum is simply dummy text"
                                                secondary='Lorem Ipsum is simply dummy text of the printing...'
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </Grid>
                        <Divider orientation="vertical" flexItem light variant='middle' />
                        <Grid item xs={12} md={4} >
                            <Typography variant="h6" className={classes.title}>
                                <LanguageOutlinedIcon className={classes.icon} fontSize="large" /> Lorem Ipsum is simply dummy text
                            </Typography>
                            <div className={classes.demo}>
                                <List dense>
                                    {[0, 1, 2, 3, 4].map((value) => (
                                        <ListItem>
                                            <ListItemIcon>
                                                0{value + 1}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Lorem Ipsum is simply dummy text"
                                                secondary='Lorem Ipsum is simply dummy text of the printing...'
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </Grid>
                        <Divider orientation="vertical" flexItem light variant='middle' />
                        <Grid item xs={12} md={4} >
                            <Typography variant="h6" className={classes.title}>
                                <DescriptionOutlinedIcon className={classes.icon} fontSize="large" /> Lorem Ipsum is simply dummy text
                            </Typography>
                            <div className={classes.demo}>
                                <List dense>
                                    {[0, 1, 2, 3, 4].map((value) => (
                                        <ListItem>
                                            <ListItemIcon>
                                                0{value + 1}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Lorem Ipsum is simply dummy text"
                                                secondary='Lorem Ipsum is simply dummy text of the printing...'
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <FeaturedInfo  />
                <Chart title='Analytics' dataKey='name' grid data={userData} />
            </div>
        </div>
    )
}
export default Menuoptionone