import React from 'react';
import { styled } from '@mui/material/styles';
import { Switch, FormControlLabel, Tooltip, Box, Typography } from '@mui/material';
import { useTranslation } from '../../contexts/TranslationContext';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        content: '"अ"',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '14px',
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.main,
    width: 32,
    height: 32,
    position: 'relative',
    '&:before': {
      content: '"A"',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#fff',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export const LanguageToggle: React.FC = () => {
  const { isVedic, toggleLanguage } = useTranslation();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography 
        variant="body2" 
        sx={{ 
          color: !isVedic ? 'primary.main' : 'text.secondary',
          fontWeight: !isVedic ? 'bold' : 'normal'
        }}
      >
        English
      </Typography>
      <Tooltip title="Toggle between Vedic Sanskrit and English terms">
        <FormControlLabel
          control={
            <StyledSwitch
              checked={isVedic}
              onChange={toggleLanguage}
              inputProps={{ 'aria-label': 'language toggle' }}
            />
          }
          label=""
        />
      </Tooltip>
      <Typography 
        variant="body2" 
        sx={{ 
          color: isVedic ? 'primary.main' : 'text.secondary',
          fontWeight: isVedic ? 'bold' : 'normal'
        }}
      >
        संस्कृत
      </Typography>
    </Box>
  );
};