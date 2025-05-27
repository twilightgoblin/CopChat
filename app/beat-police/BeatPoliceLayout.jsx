"use client";

import React, { useState, useMemo } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  Fade
} from '@mui/material';
import { useRouter } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const translations = {
  en: {
    title: "Beat Police Information",
    supervisingOfficers: "Supervising Officers",
    beats: "Beats",
    officerName: "Officer Name",
    designation: "Designation",
    contact: "Contact",
    officers: "Officers",
    villages: "Villages",
    supervisingOfficer: "Supervising Officer",
    searchPlaceholder: "Search by village, officer name, or beat number...",
    talukNotFound: "Taluk not found",
    switchToKannada: "Switch to Kannada",
    switchToEnglish: "Switch to English",
    beat: "Beat",
    phone: "Phone",
    name: "Name",
    back: "Back"
  },
  kn: {
    title: "ಬೀಟ್ ಪೊಲೀಸ್ ಮಾಹಿತಿ",
    supervisingOfficers: "ಮೇಲ್ವಿಚಾರಣಾ ಅಧಿಕಾರಿಗಳು",
    beats: "ಬೀಟ್ಗಳು",
    officerName: "ಅಧಿಕಾರಿಯ ಹೆಸರು",
    designation: "ಹುದ್ದೆ",
    contact: "ಸಂಪರ್ಕ",
    officers: "ಅಧಿಕಾರಿಗಳು",
    villages: "ಗ್ರಾಮಗಳು",
    supervisingOfficer: "ಮೇಲ್ವಿಚಾರಣಾ ಅಧಿಕಾರಿ",
    searchPlaceholder: "ಗ್ರಾಮ, ಅಧಿಕಾರಿಯ ಹೆಸರು, ಅಥವಾ ಬೀಟ್ ಸಂಖ್ಯೆಯಿಂದ ಹುಡುಕಿ...",
    talukNotFound: "ತಾಲೂಕು ಕಂಡುಬಂದಿಲ್ಲ",
    switchToKannada: "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ",
    switchToEnglish: "ಇಂಗ್ಲಿಷ್‌ಗೆ ಬದಲಾಯಿಸಿ",
    beat: "ಬೀಟ್",
    phone: "ದೂರವಾಣಿ",
    name: "ಹೆಸರು",
    back: "ಹಿಂತಿರ"
  }
};

export default function BeatPoliceLayout({ 
  talukName, 
  beatData,
  backLink = '/beat-police'
}) {
  const [isEnglish, setIsEnglish] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const t = translations[isEnglish ? 'en' : 'kn'];
  const lang = isEnglish ? 'en' : 'kn';

  const filteredBeats = useMemo(() => {
    if (!beatData || !beatData.beatDetails) return [];
    if (!searchQuery) return beatData.beatDetails;
    
    const query = searchQuery.toLowerCase();
    return beatData.beatDetails.filter(beat => 
      beat.number.toString().includes(query) ||
      beat.villages.some(village => village[lang].toLowerCase().includes(query)) ||
      beat.officers.some(officer => officer.name[lang].toLowerCase().includes(query))
    );
  }, [searchQuery, lang, beatData?.beatDetails]);

  if (!beatData) {
    return (
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography variant="h5">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #8257eb11 0%, #8257eb05 100%)',
      py: 4 
    }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ 
          mb: 4, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              onClick={() => router.push(backLink)}
              sx={{
                color: '#5E35B1',
                '&:hover': {
                  bgcolor: '#f3e5f5',
                  transform: 'translateX(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#5E35B1',
                fontWeight: 'bold',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              {talukName[lang]} {t.title}
            </Typography>
          </Box>
          <Tooltip 
            title={isEnglish ? t.switchToKannada : t.switchToEnglish}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <IconButton
              onClick={() => setIsEnglish(!isEnglish)}
              sx={{
                bgcolor: isEnglish ? '#5E35B1' : '#1976d2',
                color: 'white',
                '&:hover': {
                  bgcolor: isEnglish ? '#4527A0' : '#1565c0',
                },
                transition: 'all 0.3s ease',
                p: 1.5
              }}
            >
              <TranslateIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#5E35B1' }} />
                </InputAdornment>
              ),
              sx: {
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                },
                transition: 'all 0.3s ease'
              }
            }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ 
            color: '#5E35B1', 
            mb: 2,
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
            fontWeight: 'bold'
          }}>
            {t.supervisingOfficers}
          </Typography>
          <TableContainer 
            component={Paper} 
            sx={{ 
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ 
                  bgcolor: '#5E35B1',
                  '& th': {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }
                }}>
                  <TableCell>{t.beats}</TableCell>
                  <TableCell>{t.officerName}</TableCell>
                  <TableCell>{t.designation}</TableCell>
                  <TableCell>{t.contact}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {beatData.supervisingOfficers.map((officer, idx) => (
                  <TableRow 
                    key={idx}
                    sx={{ 
                      '&:nth-of-type(odd)': { bgcolor: '#f8f5ff' },
                      '&:hover': { bgcolor: '#f3e5f5' },
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <TableCell>{officer.beats}</TableCell>
                    <TableCell>{officer.name?.[lang] || officer.name?.en || '-'}</TableCell>
                    <TableCell>{officer.designation?.[lang] || officer.designation?.en || '-'}</TableCell>
                    <TableCell>{officer.phone || '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
          },
          gap: 3,
          px: { xs: 2, sm: 0 }
        }}>
          {filteredBeats.map((beat, idx) => (
            <Card 
              key={idx} 
              sx={{ 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Typography variant="h6" sx={{ 
                color: '#5E35B1', 
                mb: 2,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                fontWeight: 'bold'
              }}>
                {t.beat} {beat.number}
              </Typography>
              
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>{t.officers}:</Typography>
              {beat.officers?.map((officer, i) => (
                <Typography key={i} variant="body2" sx={{ mb: 0.5 }}>
                  {officer.name?.[lang] || officer.name?.en || '-'} ({officer.designation?.[lang] || officer.designation?.en || '-'}) - {t.phone}: {officer.phone || '-'}
                </Typography>
              ))}

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>{t.villages}:</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {beat.villages?.map((village, i) => (
                  <Typography key={i} variant="body2" sx={{ 
                    bgcolor: '#f3e5f5', 
                    px: 2, 
                    py: 0.5, 
                    borderRadius: 1,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#e1d5f5',
                      transform: 'scale(1.05)'
                    }
                  }}>
                    {village?.[lang] || village?.en || '-'}
                  </Typography>
                ))}
              </Box>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>{t.supervisingOfficer}:</Typography>
              <Typography variant="body2">
                {beat.supervisor?.name?.[lang] || beat.supervisor?.name?.en || '-'} ({beat.supervisor?.designation?.[lang] || beat.supervisor?.designation?.en || '-'}) - {t.phone}: {beat.supervisor?.phone || '-'}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
} 