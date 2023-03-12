import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

/**
 * Credit: https://flutter.dev/
 */
export default function Home() {
  const [color, setColor] = React.useState('primary');
  return (
    <Paper
      variant="solid"
      color={color}
      invertedColors
      sx={{
        flexGrow: 1,
        display: 'flex',
        bgcolor: color === 'primary' ? '#f5f5f5' : undefined,
        p: { xs: '36px', md: '70px' },
        pt: { xs: '24px', md: '60px' },
        borderRadius: '40px',
        mt: 10,
        overflow: 'hidden',
        '& button': { borderRadius: 'xl' },
      }}
    >
      <Box sx={{ zIndex: 1, position: 'relative' }}>
        <Typography fontSize={30} level="display2">
          Welcome!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            maxWidth: 'max-content',
            '& > *': { flexGrow: 1, fontWeight: 'lg' },
          }}
        >
          <Button component={Link} to="/login" sx={{ minWidth: 120 }}>
            LOG IN
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="plain"
            endDecorator={<ArrowForwardIcon fontSize="md" />}
            sx={{
              '&:hover': { '--Button-gap': '0.75rem' },
              '& span': { transition: '0.3s' },
            }}
          >
            SIGN UP
          </Button>
        </Box>
      </Box>
      <Box
        component="img"
        alt=""
        src="https://storage.googleapis.com/cms-storage-bucket/72521e62275b24d3c37d.png"
        sx={{ position: 'absolute', height: '100%', top: 0, right: 0 }}
      />
    </Paper>
  );
}
