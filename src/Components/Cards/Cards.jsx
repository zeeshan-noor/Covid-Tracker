import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Countup from 'react-countup';
import stytles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div className={stytles.container}>
  <Grid container spacing={3} justify="center">
       <Grid item component={Card} xs={12} md={4} className={stytles.infected}>
          <CardContent>
             <Typography color="textSecondary" gutterBottom>Infected</Typography>
             <Typography variant="h5">
                 <Countup start={0} end={confirmed.value} duration={2.5} separator="," />
             </Typography>
             <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
             <Typography variant="body2">Number of Active cases of COVID-19</Typography>
          </CardContent>
       </Grid>

 <Grid item component={Card} xs={12} md={4} className={stytles.Recovered}>
       <CardContent>
           <Typography color="textSecondary" gutterBottom>Recovered</Typography>
           <Typography variant="h5">
               <Countup start={0} end={recovered.value} duration={2.5} separator="," />
           </Typography>
           <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
           <Typography variant="body2">Number of Recover cases of COVID-19</Typography>
    </CardContent>
                </Grid>
     <Grid item component={Card} xs={12} md={4} className={stytles.Deaths}>
         <CardContent>
         <Typography color="textSecondary" gutterBottom>Deaths</Typography>
         <Typography variant="h5">
         <Countup start={0} end={deaths.value} duration={2.5} separator="," />
        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of Deaths cases of COVID-19</Typography>
    </CardContent>
 </Grid>
            </Grid>
        </div>
    )
}

export default Cards