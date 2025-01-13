import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';

function CharacterDetails() {
  const location = useLocation();
  const { character } = location.state;

  return (
    <Box
      sx={{
        padding: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      <Paper 
        elevation={5} 
        sx={{
          width: '300px',
          padding: '16px',
        }}
      >
        <img
          src={character.image || 'https://via.placeholder.com/150'}
          alt={character.name}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Paper>
      <Paper
        elevation={3}
        sx={{
          maxWidth: '500px',
          padding: '16px',
          flexGrow: 1,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {character.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Casa:</strong> {character.house || 'Unknown'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Actor:</strong> {character.actor || 'Unknown'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Especie:</strong> {character.species || 'Unknown'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Género:</strong> {character.gender || 'Unknown'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Patronus:</strong> {character.patronus || 'Unknown'}
        </Typography>
      </Paper>
    </Box>
  );
}

export default CharacterDetails;

