'use client';

import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Container,
  TextField,
  Box,
  InputAdornment,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';

const policeStations = [
  { name: 'Chelur Police Station', type: 'Rural', area: 'North' },
  { name: 'Bagepalli Police Station', type: 'Rural', area: 'North' },
  { name: 'Pathapalya Police Station', type: 'Rural', area: 'North' },
  { name: 'Chikkaballapura Town Police Station', type: 'Town', area: 'Central' },
  { name: 'Chikkaballapura Rural Police Station', type: 'Rural', area: 'Central' },
  { name: 'Nandi Hills Police Station', type: 'Rural', area: 'Central' },
  { name: 'Gauribidanuru Town Police Station', type: 'Town', area: 'South' },
  { name: 'Gauribidanuru Rural Police Station', type: 'Rural', area: 'South' },
  { name: 'Gudibande Police Station', type: 'Rural', area: 'East' },
  { name: 'Manchenahalli Police Station', type: 'Rural', area: 'East' },
  { name: 'Chintamani Town Police Station', type: 'Town', area: 'South' },
  { name: 'Chintamani Rural Police Station', type: 'Rural', area: 'South' },
  { name: 'Batlahalli Police Station', type: 'Rural', area: 'East' },
  { name: 'Kencharalahalli Police Station', type: 'Rural', area: 'East' },
  { name: 'Shidlaghatta Town Police Station', type: 'Town', area: 'North' },
  { name: 'Shidlaghatta Rural Police Station', type: 'Rural', area: 'North' },
  { name: 'Dibburahalli Police Station', type: 'Rural', area: 'East' }
];

const areas = ['All', 'North', 'Central', 'South', 'East'];
const types = ['All', 'Town', 'Rural'];

const BeatPolice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const router = useRouter();

  const filteredStations = policeStations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArea = selectedArea === 'All' || station.area === selectedArea;
    const matchesType = selectedType === 'All' || station.type === selectedType;
    return matchesSearch && matchesArea && matchesType;
  });

  const handleStationClick = (station) => {
    const stationPath = station.name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace('-police-station', '');
    router.push(`/beat-police/${stationPath}`);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)',
      py: 4,
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
        pointerEvents: 'none'
      }
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6,
          position: 'relative',
          zIndex: 1
        }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ 
              color: 'white',
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient 3s ease infinite',
              '@keyframes gradient': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' }
              }
            }}
          >
            Chikkaballapura Beat Police
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255,255,255,0.9)',
              mb: 4,
              fontWeight: 'normal',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              textShadow: '0 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            Select a police station to view beat police information
          </Typography>
          
          {/* Search and Filters */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: 2,
            mb: 4,
            px: { xs: 2, sm: 0 }
          }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search police stations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ 
                maxWidth: '600px',
                mx: 'auto',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255,255,255,0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgba(255,255,255,0.8)',
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#4a148c',
                  '&::placeholder': {
                    color: 'rgba(74,20,140,0.6)',
                  }
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#4a148c' }} />
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {areas.map((area) => (
                <Chip
                  key={area}
                  label={area}
                  onClick={() => setSelectedArea(area)}
                  sx={{
                    backgroundColor: selectedArea === area ? 'white' : 'rgba(255,255,255,0.2)',
                    color: selectedArea === area ? '#4a148c' : 'white',
                    '&:hover': {
                      backgroundColor: selectedArea === area ? 'white' : 'rgba(255,255,255,0.3)'
                    }
                  }}
                />
              ))}
            </Box>

            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {types.map((type) => (
                <Chip
                  key={type}
                  label={type}
                  onClick={() => setSelectedType(type)}
                  sx={{
                    backgroundColor: selectedType === type ? 'white' : 'rgba(255,255,255,0.2)',
                    color: selectedType === type ? '#4a148c' : 'white',
                    '&:hover': {
                      backgroundColor: selectedType === type ? 'white' : 'rgba(255,255,255,0.3)'
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Stations Grid */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 3,
          px: { xs: 2, sm: 0 },
          position: 'relative',
          zIndex: 1
        }}>
          {filteredStations.map((station, index) => (
            <Card 
              key={index}
              onClick={() => handleStationClick(station)}
              sx={{ 
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                  background: 'rgba(255,255,255,1)',
                  '& .arrow-icon': {
                    transform: 'translateX(8px)'
                  }
                }
              }}
            >
              <CardContent sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                p: 3,
                '&:last-child': { pb: 3 }
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  mb: 1
                }}>
                  <Typography 
                    variant="h6" 
                    component="h2"
                    sx={{ 
                      color: '#4a148c',
                      fontWeight: '600',
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      background: 'linear-gradient(45deg, #4a148c, #7b1fa2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {station.name}
                  </Typography>
                  <ArrowForwardIcon 
                    className="arrow-icon"
                    sx={{ 
                      color: '#4a148c',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Chip 
                    label={station.type} 
                    size="small" 
                    sx={{ 
                      backgroundColor: station.type === 'Town' ? '#4a148c' : '#7b1fa2',
                      color: 'white'
                    }} 
                  />
                  <Chip 
                    label={station.area} 
                    size="small" 
                    sx={{ 
                      backgroundColor: 'rgba(74,20,140,0.1)',
                      color: '#4a148c'
                    }} 
                  />
                </Box>
                <Typography 
                  variant="body2"
                  sx={{ 
                    color: '#7b1fa2',
                    fontWeight: '500',
                    opacity: 0.8
                  }}
                >
                  View Beat Information
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BeatPolice; 