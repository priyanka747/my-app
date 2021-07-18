import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        gridStyle: {
            width: '33.33%',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.secondary,
            '& svg': {
                margin: theme.spacing(1.5),
            },
            '& hr': {
                margin: theme.spacing(0, 0.5),
            },
        },
    }),
);

const Menuoptionone = () => {
    const classes = useStyles();
    return (
        <div className="main">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>lorem ipsum</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container alignItems="center" className="gridStyle">
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.</Typography>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Menuoptionone