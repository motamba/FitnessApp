import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#86b562" fontWeight="700" fontSize="50px" textAlign='center'>Welcome To The Fitness Club</Typography>
    <Typography fontWeight={600} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="5px" mt="5px" textAlign='center'>
      Sweat, Smile
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" textAlign='center'>
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack alignItems="center" mt="15px" justifyContent="center" p="20px">
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#86b562', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px'}}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#86b562" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px'}}>
      Exercise
    </Typography>
    
  </Box>
);

export default HeroBanner;

//<img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />

