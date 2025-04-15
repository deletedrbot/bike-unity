import { Container, Typography, Box, Paper } from '@mui/material'

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          О нашем проекте
        </Typography>
        <Typography variant="body1" paragraph>
          Добро пожаловать в наше приложение для местного туризма! Мы создали эту платформу, чтобы помочь 
          жителям и гостям города открыть для себя все самое интересное в нашем регионе.
        </Typography>
        <Typography variant="body1" paragraph>
          Наша миссия - сделать туризм доступным и увлекательным для всех. Мы стремимся показать 
          уникальность нашего города через его достопримечательности, культурные события и местные традиции.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Что мы предлагаем:
        </Typography>
        <Box component="ul">
          <Typography component="li" paragraph>
            Подробную информацию о достопримечательностях города
          </Typography>
          <Typography component="li" paragraph>
            Актуальный календарь культурных и развлекательных мероприятий
          </Typography>
          <Typography component="li" paragraph>
            Интерактивную карту с отмеченными местами для посещения
          </Typography>
          <Typography component="li" paragraph>
            Возможность делиться впечатлениями и оставлять отзывы
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 4 }}>
          Присоединяйтесь к нашему сообществу и откройте для себя город с новой стороны!
        </Typography>
      </Paper>
    </Container>
  )
}

export default About 