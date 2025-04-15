import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Chip, useTheme } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { motion } from 'framer-motion'
import '../styles/animations.css'

const Events = () => {
  const theme = useTheme()

  const events = [
    {
      title: 'Фестиваль искусств',
      description: 'Ежегодный фестиваль, представляющий лучшие образцы местного искусства',
      date: '15-17 июня 2024',
      location: 'Городской парк',
      image: '/images/arts-festival.svg'
    },
    {
      title: 'День города',
      description: 'Празднование дня основания города с концертами и фейерверком',
      date: '12 июля 2024',
      location: 'Центральная площадь',
      image: '/images/city-day.svg'
    },
    {
      title: 'Ярмарка ремесел',
      description: 'Традиционная ярмарка с изделиями местных мастеров',
      date: '5-7 августа 2024',
      location: 'Исторический центр',
      image: '/images/craft-fair.svg'
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
          Предстоящие события
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {events.map((event, index) => (
          <Grid item key={event.title} xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                  image={event.image}
                  alt={event.title}
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
                    {event.title}
                  </Typography>
                  <Typography
                    paragraph
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3
                    }}
                  >
                    {event.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Chip
                        icon={<CalendarTodayIcon />}
                        label={event.date}
                        color="primary"
                        variant="outlined"
                        sx={{
                          borderRadius: '20px',
                          borderWidth: '2px',
                          '& .MuiChip-icon': {
                            color: 'inherit'
                          }
                        }}
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Chip
                        icon={<LocationOnIcon />}
                        label={event.location}
                        color="secondary"
                        variant="outlined"
                        sx={{
                          borderRadius: '20px',
                          borderWidth: '2px',
                          '& .MuiChip-icon': {
                            color: 'inherit'
                          }
                        }}
                      />
                    </motion.div>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Events 