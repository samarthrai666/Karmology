import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { 
  CssBaseline, 
  Container, 
  Box, 
  Typography, 
  Card, 
  CardContent,
  Grid,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { TranslationProvider, useTranslation } from './contexts/TranslationContext';
import { Header } from './components/common/Header';
import { theme } from './styles/theme';

// Demo component with responsive design
const DemoContent: React.FC = () => {
  const { t, isVedic } = useTranslation();
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const terms = [
    'kundali',
    'mahadasha',
    'antardasha',
    'nakshatra',
    'gochar',
    'sade_sati',
    'rashi',
    'lagna'
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        mt: { xs: 2, sm: 3, md: 4 }, 
        mb: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 3 }
      }}>
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          gutterBottom 
          align="center" 
          color="primary"
          sx={{ fontWeight: 'bold' }}
        >
          Welcome to Karmalogy
        </Typography>
        
        <Typography 
          variant={isMobile ? "body1" : "h6"} 
          gutterBottom 
          align="center" 
          color="text.secondary"
          sx={{ mb: { xs: 3, md: 4 } }}
        >
          Toggle the language switch above to see translations
        </Typography>
        
        <Card sx={{ 
          mt: { xs: 2, md: 4 },
          boxShadow: { xs: 1, md: 3 }
        }}>
          <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Typography 
              variant={isMobile ? "body1" : "h6"} 
              gutterBottom
              sx={{ fontWeight: 'medium' }}
            >
              Current Mode: {isVedic ? 'Vedic Sanskrit (वैदिक संस्कृत)' : 'English'}
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
              {terms.map((term) => (
                <Box 
                  key={term}
                  sx={{ 
                    flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)', md: '1 1 calc(33.333% - 12px)' },
                    p: { xs: 1.5, sm: 2 }, 
                    bgcolor: 'grey.50', 
                    borderRadius: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'primary.50',
                      transform: 'translateY(-2px)',
                      boxShadow: 1
                    }
                  }}
                >
                  <Typography 
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ wordBreak: 'break-word' }}
                  >
                    <strong>{term.replace(/_/g, ' ')}</strong>
                    <br />
                    <span style={{ color: theme.palette.primary.main }}>
                      → {t(term)}
                    </span>
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Mobile App CTA */}
        <Box 
          sx={{ 
            mt: 4, 
            p: 3, 
            bgcolor: 'primary.50', 
            borderRadius: 2,
            textAlign: 'center'
          }}
        >
          <Typography variant={isMobile ? "body2" : "body1"}>
            📱 This web app is fully responsive and will soon be available as native iOS and Android apps!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TranslationProvider>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          <Header />
          <DemoContent />
        </Box>
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;