import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as ScrollLink } from 'react-scroll';
import { StyledButton } from '@/components/styled-button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface Exp {
  label: string;
  value: string;
}
interface ExpItemProps {
  item: Exp;
}

const exps: Array<Exp> = [
  {
    label: 'الطلاب',
    value: '10K+',
  },
  {
    label: 'الدورات عالية الجودة',
    value: '20+',
  },
  {
    label: 'مرشدون ذوو خبرة',
    value: '10+',
  },
];

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontFamily: 'Changa, sans-serif' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5" sx={{ fontFamily: 'Changa, sans-serif' }}>
        {label}
      </Typography>
    </Box>
  );
};

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    lineHeight: 1.3,
                    fontFamily: 'Changa, sans-serif',
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    حسّن{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                  </Typography>
                   و طور مهارتك{' '}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                  </Typography>{' '}
                  في أكاديمية ميراي
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, fontFamily: 'Changa, sans-serif' }}>
                  {"لنأخذ دورة عبر الإنترنت لتحسين مهاراتك بطريقة مختلفة، يمكنك تحديد وقت دراستك وفقًا لسرعة تعلمك. لذا يمكنك الدراسة بشكل مريح واستيعاب المادة بسهولة."}
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained">
                    ابدأ الآن
                  </StyledButton>
                </ScrollLink>
                <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="outlined" startIcon={<PlayArrowIcon />}>
                    شاهد الفيديو
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            {/* Certificate badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 30,
                left: { xs: 0, md: -150 },
                boxShadow: 1,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'flex-start',
                width: 280,
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  '& img': { width: '32px !important', height: 'auto' },
                }}
              >
                <Image src="/images/certificate.png" alt="Certificate icon" width={50} height={50} quality={97} />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{ color: 'secondary.main', fontSize: '1.1rem', fontWeight: 700, mb: 0.5, fontFamily: 'Changa, sans-serif' }}
                >
                  شهادة
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.3, fontFamily: 'Changa, sans-serif' }}>
                  هناك شهادات لجميع الدورات.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              <Image src="/images/home-hero.jpg" width={775} height={787} alt="Hero img" />
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;
