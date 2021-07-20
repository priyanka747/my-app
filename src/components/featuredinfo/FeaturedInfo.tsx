import "./featuredInfo.css";
import Button from '@material-ui/core/Button';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState } from "react";

import Grid from '@material-ui/core/Grid';
export default function FeaturedInfo() {
  const [tab, setTab] = useState(2);
  
  return (
    <div className="featuredWrapper">
        <Grid container spacing={3} direction="row" alignItems="center">
        <Grid item xs={12} sm={2}>

      <Button variant="outlined" size="large" name=" Tab 1" color="primary" onClick={()=> setTab(1) } className={(tab == 1) ? 'activeTab': ''} fullWidth> Tab 1</Button>
      </Grid>
        <Grid item xs={12} sm={2}>
      <Button variant="outlined" size="large" name=" Tab 2" color="primary" onClick={() => setTab(2) } className={(tab == 1) ? '': 'activeTab'} fullWidth> Tab 2</Button>

      </Grid>
      </Grid>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
              -11.4 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">
              -1.4 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className={(tab == 1) ? 'featuredItem': 'featuredItem hide'} >
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">
              +2.4 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className={(tab == 1) ? 'featuredItem': 'featuredItem hide'}>
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">
              +2.4 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
    </div>
  );
}


