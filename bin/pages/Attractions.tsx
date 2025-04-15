import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import '../styles/animations.css'

const Attractions = () => {
  const theme = useTheme()

  const attractions = [
    {
      id: 1,
      title: 'Парк Победы',
      description: 'Крупнейший мемориальный комплекс, посвященный победе в Великой Отечественной войне.',
      image: '/images/attractions/park-pobedy.svg',
      link: '/attractions/park-pobedy'
    },
    {
      id: 2,
      title: 'Исторический центр',
      description: 'Исследуйте богатую историю нашего города',
      image: '/images/historic-center.svg',
      link: '/attractions/historic-center'
    },
    {
      id: 3,
      title: 'Городской парк',
      description: 'Насладитесь природой в сердце города',
      image: '/images/park.svg',
      link: '/attractions/city-park'
    },
    {
      id: 4,
      title: 'Музей',
      description: 'Откройте для себя местное искусство и культуру',
      image: '/images/museum.svg',
      link: '/attractions/museum'
    },
    {
      id: 5,
      title: 'Собор',
      description: 'Посетите главный храм города',
      image: '/images/cathedral.svg',
      link: '/attractions/cathedral'
    },
    {
      id: 6,
      title: 'Набережная',
      description: 'Прогуляйтесь вдоль реки',
      image: '/images/embankment.svg',
      link: '/attractions/embankment'
    },
    {
      id: 7,
      title: 'Театр',
      description: 'Познакомьтесь с театральной жизнью города',
      image: '/images/theater.svg',
      link: '/attractions/theater'
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              backgroundColor: theme.palette.primary.main,
              borderRadius: '2px'
            }
          }}
        >
          Достопримечательности
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {attractions.map((attraction, index) => (
          <Grid item key={attraction.title} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="card-hover"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    zIndex: 1
                  }
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 200,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                  image={attraction.image}
                  alt={attraction.title}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 2
                    }}
                  >
                    {attraction.title}
                  </Typography>
                  <Typography
                    paragraph
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3
                    }}
                  >
                    {attraction.description}
                  </Typography>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className="button-hover"
                      sx={{
                        borderRadius: '25px',
                        py: 1,
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 'bold'
                      }}
                    >
                      Подробнее
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Attractions 