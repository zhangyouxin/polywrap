import { Parallax } from 'react-scroll-parallax';
import { Box, Container, Grid, makeStyles, Typography, useTheme, Button } from '@material-ui/core';
import { useState } from 'react';
import { IDE } from './IDE';
import { WRAPPER_INTEGRATIONS }from '../constants';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';
import { polywrapPalette } from '../theme';
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      marginTop: 150,
      minHeight: '60vh',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw',
    },
  },
  grid: {
    justifyContent: 'center',
    marginTop: theme.spacing(6),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      '& .MuiGrid-item': {
        padding: 20,
      },
    },
  },
  title: {
    fontWeight: 900,
    marginBottom: 20,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 28,
    },
  },
  description: {
    marginTop: 20,
  },
  wrapperSelection: {
    backgroundColor: polywrapPalette.secondary[900],
    border: `1px solid ${polywrapPalette.secondary[800]}`,
    borderRadius: 16,
    cursor: "pointer",
    display: "flex",
    fontWeight: 700,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
    //paddingX: theme.spacing(2),
    padding: 10,
    textAlign: "center",
    transition: "all 0.25s ease-in-out",
    height: 120,
    width: 120,
    "&:hover": {
      opacity: 1,
      boxShadow: theme.shadows[16],
    },
    "&.is-active": {
      borderColor: polywrapPalette.secondary[300],
      boxShadow: theme.shadows[16],
      opacity: 1,
      ".wrapperIcon": {
        color: polywrapPalette.secondary[300],
      }
    }
  },
  wrapperSelectionIcon: {
    marginBottom: theme.spacing(1),
    height: theme.spacing(5),
    width: theme.spacing(5),
    filter: `invert(75%) sepia(67%) saturate(430%) hue-rotate(153deg) brightness(96%) contrast(94%)`,
    "& img": {
      filter: `saturate(0%) brightness(0%)`,
      objectFit: 'contain',
      height: '100%',
      width: '100%',
    }
  },
  wrapperCTAButton: {
    marginTop: theme.spacing(2),
  },
  IDEWrapper: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(8),
    },
  },
  polywrapIllustration: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxHeight: '60vh',
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '30vh',
    },
  },
  demoFunctionWrapper: {
    bottom: -theme.spacing(2),
    position: "absolute",
    right: -theme.spacing(2),
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      bottom: -theme.spacing(8),
    },
  }
}));

export const FeaturedWrappersSection = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [activeWrapper, setActiveWrapper] = useState<number>(0);

  const handleWrapperSelection = (wrapper: number) => {
    setActiveWrapper(wrapper)
  }

  return (
    <Box position='relative' className={classes.root}>

      <Container maxWidth="md">
        <Typography variant='h3' color='textPrimary' align='center'>
          Easy Integration
        </Typography>
        <Typography
          variant='body1'
          align="center"
          color='textSecondary'
          className={classes.description}
        >
          Integrate wrappers into your favorate programming languages in minutes. Simply install a Polywrap Client, and invoke any wrappers methods given its URI.
        </Typography>
      </Container>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={WRAPPER_INTEGRATIONS.length >= 5 ? "space-between" : "center"}
        mt={6}
      >
        {WRAPPER_INTEGRATIONS.map((wrapper, index) => {
          return (
            <Box
              key={index}
              ml={index !== 0 ? 2 : 0} mr={index !== WRAPPER_INTEGRATIONS.length - 1 ? 2 : 0}
              onClick={() => handleWrapperSelection(index)}
            >
              <Box className={classnames(classes.wrapperSelection, activeWrapper === index && "is-active")}>
                <Box className={classes.wrapperSelectionIcon} >
                  <img src={wrapper.logo} alt={wrapper.wrapperName}/>
                </Box>
                {wrapper.wrapperName}
              </Box>
            </Box>
          )
        })}
      </Box>
      {/* The lines below are used to check
          1. that wrappersData exists
          2. maps all the data to render the component*/}
        {WRAPPER_INTEGRATIONS.map((wrapper, index) =>
          <Box
            key={index}
            mb={24}
            style={{
              display: activeWrapper === index ? "block" : "none",
            }}
          >
            <Grid
              container
              spacing={6}
              alignItems='flex-start'
              className={classes.grid}
            >
              {/* This section is used to display the name of the wrapper, a description of the wrapper,
                  additional copy to generate engagement, and a CTA button that takes users to docs of the
                  specified wrappert
              */}
              <Grid item xs={12} md={6}>

                {/* The name of the wrapper currently displayed */}
                <Typography
                  variant='h4'
                  color='textPrimary'
                  className={classes.title}
                >
                  {wrapper.wrapperName}
                </Typography>

                {/* Description of the wrapper being displayed */}
                <Typography
                  variant='body1'
                  color='textSecondary'
                  className={classes.description}
                >
                  {wrapper.description } 
                </Typography>

                {/* CTA to get people to use the specific wrapper */}
                <Button
                  // still dunno what to calll this
                  className={classes.wrapperCTAButton}
                  color='primary'
                  href={wrapper.link}
                  target="_blank"
                  rel="noredirect"
                  endIcon={<KeyboardArrowRightOutlined />}
                  type='submit'
                  variant='contained'
                  >
                  wrap with it
                </Button>
              </Grid>

              {/* // this grid is used to showcase the IDE and the CMS card */}
              <Grid item xs={12} md={6}>
                <Box className={classes.IDEWrapper}>

                  {/* Card section for listing names of new functions */}
                  <Box className={classes.demoFunctionWrapper}>
                    <Parallax
                      y={[140, -13]}
                      disabled={window.innerWidth < theme.breakpoints.values.md}
                    >
                    </Parallax>
                  </Box>
                  {/* This is the section that displays the entire IDE window.
                      it includes both the code snippet and the tabs on top of the window
                  */}
                  <IDE snippets={wrapper.snippets} />
                </Box>

              </Grid>
            </Grid>
          </Box>
        )}
    </Box>
  );
};
