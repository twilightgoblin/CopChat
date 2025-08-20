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
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/translations';
import { getSafeTranslations } from '@/utils/helpers';

const policeStations = [
  { key: 'chelur', name: 'Chelur Police Station', type: 'Rural', area: 'North' },
  { key: 'bagepalli', name: 'Bagepalli Police Station', type: 'Rural', area: 'North' },
  { key: 'pathapalya', name: 'Pathapalya Police Station', type: 'Rural', area: 'North' },
  { key: 'chikkaballapuraTown', name: 'Chikkaballapura Town Police Station', type: 'Town', area: 'Central' },
  { key: 'chikkaballapuraRural', name: 'Chikkaballapura Rural Police Station', type: 'Rural', area: 'Central' },
  { key: 'nandiHills', name: 'Nandi Hills Police Station', type: 'Rural', area: 'Central' },
  { key: 'gauribidanuruTown', name: 'Gauribidanuru Town Police Station', type: 'Town', area: 'South' },
  { key: 'gauribidanuruRural', name: 'Gauribidanuru Rural Police Station', type: 'Rural', area: 'South' },
  { key: 'gudibande', name: 'Gudibande Police Station', type: 'Rural', area: 'East' },
  { key: 'manchenahalli', name: 'Manchenahalli Police Station', type: 'Rural', area: 'East' },
  { key: 'chintamaniTown', name: 'Chintamani Town Police Station', type: 'Town', area: 'South' },
  { key: 'chintamaniRural', name: 'Chintamani Rural Police Station', type: 'Rural', area: 'South' },
  { key: 'batlahalli', name: 'Batlahalli Police Station', type: 'Rural', area: 'East' },
  { key: 'kencharalahalli', name: 'Kencharalahalli Police Station', type: 'Rural', area: 'East' },
  { key: 'shidlaghattaTown', name: 'Shidlaghatta Town Police Station', type: 'Town', area: 'North' },
  { key: 'shidlaghattaRural', name: 'Shidlaghatta Rural Police Station', type: 'Rural', area: 'North' },
  { key: 'dibburahalli', name: 'Dibburahalli Police Station', type: 'Rural', area: 'East' },
  { key: 'peresandra', name: 'Peresandra Police Station', type: 'Rural', area: 'Central' }
];

const BeatPolice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const router = useRouter();
  const { language } = useLanguage();
  
  // Use safe translation access
  const t = getSafeTranslations(translations, language, 'beatPolice');

  // Create area and type arrays based on translations
  const areas = [
    { key: 'All', label: t.filters.areas.all },
    { key: 'North', label: t.filters.areas.north },
    { key: 'Central', label: t.filters.areas.central },
    { key: 'South', label: t.filters.areas.south },
    { key: 'East', label: t.filters.areas.east }
  ];
  
  const types = [
    { key: 'All', label: t.filters.types.all },
    { key: 'Town', label: t.filters.types.town },
    { key: 'Rural', label: t.filters.types.rural }
  ];

  const filteredStations = policeStations.filter(station => {
    const translatedName = t.stations[station.key] || station.name;
    const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         translatedName.toLowerCase().includes(searchQuery.toLowerCase());
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
            {t.title}
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
            {t.subtitle}
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
              placeholder={t.searchPlaceholder}
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
                  key={area.key}
                  label={area.label}
                  onClick={() => setSelectedArea(area.key)}
                  sx={{
                    backgroundColor: selectedArea === area.key ? 'white' : 'rgba(255,255,255,0.2)',
                    color: selectedArea === area.key ? '#4a148c' : 'white',
                    '&:hover': {
                      backgroundColor: selectedArea === area.key ? 'white' : 'rgba(255,255,255,0.3)'
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
                  key={type.key}
                  label={type.label}
                  onClick={() => setSelectedType(type.key)}
                  sx={{
                    backgroundColor: selectedType === type.key ? 'white' : 'rgba(255,255,255,0.2)',
                    color: selectedType === type.key ? '#4a148c' : 'white',
                    '&:hover': {
                      backgroundColor: selectedType === type.key ? 'white' : 'rgba(255,255,255,0.3)'
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
                    {t.stations[station.key] || station.name}
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
                  {t.viewBeatInfo}
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