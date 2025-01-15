import { useLocation } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";

function CharacterDetails() {
  const location = useLocation();
  const { character } = location.state;

  const formato = (texto) => {
    if (!texto) return "Desconocido";
    if (texto.toLowerCase() === "unknown") return "Desconocido";

    const translations = {
      gryffindor: "Gryffindor",
      slytherin: "Slytherin",
      hufflepuff: "Hufflepuff",
      ravenclaw: "Ravenclaw",
      "pure-blood": "Sangre pura",
      "half-blood": "Mestizo",
      "muggle-born": "Nacido de muggles",
      male: "Masculino",
      female: "Femenino",
      human: "Humano",
      stag: "Ciervo",
      otter: "Nutria",
      horse: "Caballo",
      hare: "Liebre",
      phoenix: "Fénix",
      doe: "Ciervo",
      cat: "Gato",
      wolf: "Lobo",
      weasel: "Comadreja",
      lynx: "Lince",
      fox: "Zorro",
      swan: "Cisne", 
      boar: "Jabalí",
      goat: "Cabra",
      "persian cat": "Gato Persa",
      rabbit: "Conejo",
      "non-corporeal": "No Corpóreo",
      corporeal: "Corpóreo"
    };

    const translatedText = translations[texto.toLowerCase()] || texto;

    return translatedText.charAt(0).toUpperCase() + translatedText.slice(1);
  };

  return (
    <Box
      sx={{
        padding: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "16px",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: "300px",
          padding: "16px",
        }}
      >
        <img
          src={character.image || "https://via.placeholder.com/150"}
          alt={character.name}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Paper>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "500px",
          padding: "16px",
          flexGrow: 1,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {character.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Casa:</strong> {formato(character.house)}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Actor:</strong> {formato(character.actor)}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Especie:</strong> {formato(character.species)}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Género:</strong> {formato(character.gender)}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Ascendencia:</strong> {formato(character.ancestry)}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Patronus:</strong> {formato(character.patronus)}
        </Typography>
      </Paper>
    </Box>
  );
}

export default CharacterDetails;
