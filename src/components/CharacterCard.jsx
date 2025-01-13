import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function CharacterCard({ character }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image={character.image || 'https://via.placeholder.com/150'}
        alt={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          House: {character.house || 'Unknown'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Actor: {character.actor || 'Unknown'}
        </Typography>
      </CardContent>
    </Card>
  );
}

// Validación de las props con prop-types
CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    house: PropTypes.string,
    actor: PropTypes.string,
  }).isRequired,
};

export default CharacterCard;
