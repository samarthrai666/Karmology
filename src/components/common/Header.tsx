import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { LanguageToggle } from './LanguageToggle';

export const Header: React.FC = () => {
  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ✨ Karmalogy
        </Typography>
        <LanguageToggle />
      </Toolbar>
    </AppBar>
  );
};