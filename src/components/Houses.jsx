import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    Box,
  } from "@mui/material";
  
  const houses = [
    {
      name: "Gryffindor",
      image: "https://wallpapers.com/images/hd/harry-potter-gryffindor-wallpaper-sf79op3es7lwzz70.jpg",
      description:
        "Gryffindor es una de las cuatro casas de Hogwarts, fundada por Godric Gryffindor. Los valores de la casa son el coraje, la valentía y la determinación. Los colores de esta casa son el dorado y el escarlata y su símbolo es un león.",
    },
    {
      name: "Slytherin",
      image: "https://lacicatrizmagica.com/cdn/shop/collections/Slytherin.jpg?v=1723366767",
      description:
        "Slytherin es una de las cuatro casas de Hogwarts, fundada por Salazar Slytherin. Los valores de la casa son la ambición, la astucia y la determinación. El animal representativo es la serpiente, sus colores son verde y plateado y el elemento es el agua, asociada con la astucia y la frialdad.",
    },
    {
      name: "Hufflepuff",
      image: "https://media.minalima.com/2023/09/option-1-gallery-02-hpp17-1300x1300.jpg",
      description:
        "Hufflepuff es una de las cuatro casas de Hogwarts, fundada por Helga Hufflepuff. Los valores de la casa son la lealtad, la paciencia y el trabajo duro. El símbolo de la casa es un tejón negro y sus colores representativos son el amarillo y el negro carbón.",
    },
    {
      name: "Ravenclaw",
      image: "https://i.pinimg.com/originals/3f/35/83/3f35833f6aeb1ce0524722d4421d39fb.png",
      description:
        "Ravenclaw es una de las cuatro casas de Hogwarts, fundada por Rowena Ravenclaw. Los valores de la casa son la inteligencia, la sabiduría y la creatividad. El símbolo de la casa es el águila, aunque en alguna versión del escudo es un cuervo y sus colores son el azul y el bronce.",
    },
  ];
  
  const Houses = () => (
    <Box sx={{ padding: '24px' }}>
      <Typography variant="h4" align="center" gutterBottom >
        CASAS DE HOGWARTS 
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2}}>
        <CardMedia
          component="img"
          sx={{ width: 120, height: 120 }}
          image="https://i.pinimg.com/originals/00/46/dc/0046dcc1a2ed5f8c15900eef132c9b5b.gif"
          alt="sombrero mágico"
        />
      </Box>
      <Typography variant="h6" sx={{ lineHeight: 1.5 }} align="center">
        Cada casa tiene su propia noble historia y cada una ha producido notables
        brujas y magos. 
      </Typography>
      <br />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {houses.map((house) => (
          <Card key={house.name} sx={{ maxWidth: 275 }}>
            <CardMedia
              component="img"
              height="200"
              image={house.image}
              alt={house.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {house.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {house.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
  
  export default Houses;
  