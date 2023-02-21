import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Logo from '../assest/logo.svg'
import Grid from '@mui/material/Grid';



export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mystyle = {
    fontWeight: 'bold'
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={14}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            aria-label="secondary tabs example"
            
          >

            <Tab value="zero" icon={<HomeRoundedIcon />} />
            <Tab value="one" label="blog" />
            <Tab value="two" label="about" />
            <Tab value="three" label="work" />
            <Tab value="four" label="side Project" />
            <Tab value="five" label="store" />

          </Tabs>
        </Grid>
        <Grid item xs={2}>
        
            <img src={Logo} style={{marginTop: 5}} />

        </Grid>
      </Grid>
    </Box>
  );
}