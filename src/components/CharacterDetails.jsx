import { useLocation } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
function CharacterDetails() {
  const location = useLocation();
  const { character } = location.state;

  return (
    <Box sx={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="400"
          image={character.image || 'https://via.placeholder.com/150'}
          alt={character.name}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {character.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>House:</strong> {character.house || 'Unknown'}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Actor:</strong> {character.actor || 'Unknown'}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Ancestry:</strong> {character.ancestry || 'Unknown'}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Patronus:</strong> {character.patronus || 'Unknown'}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CharacterDetails;