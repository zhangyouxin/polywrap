import { Parallax } from 'react-scroll-parallax';
import { Box, Button, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { polywrapPalette } from '../theme';
import {useState, useEffect} from 'react';
import { KeyboardArrowRightOutlined } from '@material-ui/icons';
import { WrittenCopy, POLYWRAP_APPLICATIONS } from '../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight:  '90vh',
    position: 'relative',
    zIndex: 2,
    marginTop: 140,
    [theme.breakpoints.down('md')]: {
      marginTop: 80,
      marginBottom: 80,
    },
  },
  heroTitle: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
    position: 'relative',
    zIndex: 2,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      marginBottom: 30,
    },
  },
  heroSubtitle: {
    color: polywrapPalette.secondary.end,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    paddingLeft: 2, // Optical alignment with 'A' below
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 12,
    },
  },
  cell: {
    margin: 'auto',
    maxWidth: '90vw'
  },
  blurredGraphicContainer: {
    position: 'absolute',
    bottom: '-30%',
    left: '-7%',
    opacity: 0.6,
    width: '50vw',
    zIndex: 0,
  },
  container: {
    backgroundColor: polywrapPalette.secondary[1000],
    borderRadius: 8,
    boxShadow: `0 64px 96px -24px rgba(0,0,0,0.5)`,
    padding: 72,
    paddingBottom: 230,
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      height: '65vh',
      minHeight: '500px'
    },
    [theme.breakpoints.down('md')]: {
      padding: 32,
      height: '80vh',
      minHeight: 500,
      maxHeight: 800,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 32,
      height: '75vh',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100vh',
    },
  },
  hubWireframeImg: {
    //TODO: This used to look very good with green colored shadow,
    // but when trying other images, the outline looks broken in the UI
    // boxShadow: `0 4px 64px ${polywrapPalette.primary.mid}85`,
    borderRadius: 4,
    transformOrigin: 'top left',
    transform: `translateY(-8px)`,
    maxHeight: '400px',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      //TODO: This used to look very good with green colored shadow,
      // but when trying other images, the outline looks broken in the UI
      //boxShadow: `0 4px 32px ${polywrapPalette.primary.mid}85`,
      width: '100%',
      transform: 'none',
    },
  },
  descriptionText: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12
    },
  },
}));

const thirdHeroContent: WrittenCopy = {
  title: "Extend the functionality of you applications",
  subtitle: "a more composable web3",
  description: "Polywrap allows more application functionality with a lower development overhead, fewer requirements for protocol-specific knowledge, and a long list of perks that come along with WebAssembly. "
};

export const FeaturedApps = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });
  const [appsTransitionID, setAppsTransitionID] = useState<number>(0);

  // Setting UI transition effects for the component
  useEffect(() => {
    let rotationInterval = setInterval(() => {
      if (appsTransitionID === POLYWRAP_APPLICATIONS.length - 1 ) {
        setAppsTransitionID(0)
      }
      else {
        setAppsTransitionID(appsTransitionID => appsTransitionID + 1)
      }
    }, 10000) // Timer for switching between wrappers (10000 -> 10 seconds)
    
    return () => {
      clearInterval(rotationInterval);
    }
  }, [appsTransitionID, POLYWRAP_APPLICATIONS])

  return (
    <Box position='relative' className={classes.root}
    paddingBottom = {isMobile ? 20 : 50}
    >
      <Box className={classes.cell}>
        <Box className={classes.blurredGraphicContainer}>
          <Parallax y={[-15, 10]} disabled={isMobile}>
            <img src={process.env.PUBLIC_URL + '/imgs/polywrapper-callout-spot.png'} alt='polywrap blurred'/>
          </Parallax>
        </Box>
        <Box className={classes.container}
          >
          <Grid
            className={classes.heroTitle}
            justify='center'
            alignItems='center'
            spacing={1}
          >
            <Typography variant="h3">
                  {thirdHeroContent.title}
            </Typography>
            <Box marginTop={2}>
                <Typography 
                  variant="subtitle2"
                  color='secondary'
                  className={classes.heroSubtitle}
                >
                  {thirdHeroContent.subtitle}
                </Typography>
            </Box>
            
          </Grid>

          {POLYWRAP_APPLICATIONS.map((PolywrapApp: any, index: number) =>
            <Grid container spacing={isMobile ? 6 : 10}
            alignItems='stretch' 
            style={{
              opacity: appsTransitionID === index ? '100%': '0%',
              // visibility: wrappersTransitionID === index ? 'initial': 'hidden',
              zIndex : appsTransitionID === index ? 99: -1,
              transition: "all 1s ease-in",
              position: 'absolute'
            }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4">
                  {PolywrapApp.writtenCopy.title}
                </Typography>
                <Box marginTop={2}
                      width={isMobile ? '80%' : '100%'}
                                    >
                  <Typography variant="body1"
                              className={classes.descriptionText}

                      >
                    {PolywrapApp.writtenCopy.description}
                  </Typography>
                </Box>
                <Box marginTop={2}>
                  <Button
                    component="button"
                    color='primary'
                    href={PolywrapApp.callToAction.url}
                    endIcon={<KeyboardArrowRightOutlined />}
                    type='submit'
                    variant='contained'
                  >
                    {PolywrapApp.callToAction.cta}
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Parallax y={[24, -24]} disabled={isMobile}>
                  <Box>
                    <img className={classes.hubWireframeImg} src={PolywrapApp.uiScreenshot.url} alt='Polywrap Hub'/>
                  </Box>
                </Parallax>
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};
