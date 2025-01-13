import { Container, Typography, Box } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import GroupIcon from '@mui/icons-material/Group';

function About() {
  return (
    <Container
      className="about-page"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "#ffffff",
        borderRadius: "8px",
        padding: "24px",
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" gutterBottom>
          <InfoIcon fontSize="large" sx={{ color: "#FFD700", mr: 1 }} />
          Acerca de la aplicación
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ mb: 4, lineHeight: 1.8 }}>
        Esta aplicación interactiva te permite explorar el universo de Harry Potter con información detallada sobre los personajes. <br />
        Fue desarrollada con <strong>React</strong> y <strong>MUI Material</strong>, utilizando datos de la API pública de Harry Potter.
      </Typography>
      <Box sx={{ textAlign: "left", width: "100%", maxWidth: "600px", marginBottom: "24px" }}>
        <Typography variant="h5" gutterBottom>
          Funcionalidades principales:
        </Typography>
        <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <BookIcon sx={{ mr: 1, color: "#4CAF50" }} /> Información detallada de los personajes.
        </Typography>
        <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <GroupIcon sx={{ mr: 1, color: "#FF5722" }} /> Clasificación por personal de Hogwarts y estudiantes.
        </Typography>
        <Typography variant="body1" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <InfoIcon sx={{ mr: 1, color: "#2196F3" }} /> Exploración de casas como Gryffindor y Slytherin.
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ fontStyle: "italic" }}>
        ¡Sumérgete en el mundo mágico y descubre más!
      </Typography>
    </Container>
  );
}

export default About;
