import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import { Pagination, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function CharacterList({ category }) {
  const { houseName } = useParams();
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://hp-api.herokuapp.com/api/characters');
        const data = await response.json();
        console.log(data[0]);
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    if (category === 'all') {
      setFilteredCharacters(characters);
    } else if (category === 'staff') {
      setFilteredCharacters(characters.filter((char) => char.hogwartsStaff));
    } else if (category === 'students') {
      setFilteredCharacters(characters.filter((char) => char.hogwartsStudent));
    } else if (category === 'house') {
      setFilteredCharacters(characters.filter((char) => char.house === houseName));
    }
  }, [category, characters, houseName]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calcular los personajes para la página actual
  const startIndex = (currentPage - 1) * charactersPerPage;
  const currentCharacters = filteredCharacters.slice(startIndex, startIndex + charactersPerPage);

  return (
    <Box sx={{ padding: '24px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Personajes
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {currentCharacters.map((character, index) => (
          <Link
          to={`/character/${index}`}
          state={{ character }}
          key={character.name}
          style={{ textDecoration: 'none' }}
        >
          <CharacterCard character={character}/>
          </Link>
        ))}
      </Box>
      {filteredCharacters.length > charactersPerPage && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '18px' }}>
        <Pagination
          count={Math.ceil(filteredCharacters.length / charactersPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#FFFFFF', //cambia el color del texto de los números
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // fondo semitransparente
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)', // color de fondo al pasar el mouse
              },
              '&.Mui-selected': {
                backgroundColor: '#2196F3',
                color: '#FFFFFF',
              },
            },
          }}
        />
      </Box>
      
      )}
    </Box>
  );
}

CharacterList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CharacterList;