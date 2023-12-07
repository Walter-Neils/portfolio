import { Backdrop, Box, Button, Card, CardContent, CardHeader, CardProps, Collapse, Fab, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Masonry } from "@mui/lab";
import React from "react";
import { TransitionGroup } from "react-transition-group";


function HorizontalDivider() {
  return (
    <Box sx={{
      // Center the divider 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      <Box sx={{
        // Divider
        width: '50%',
        height: '1px',
        backgroundColor: 'GrayText',
        marginTop: '10%',
        marginBottom: '10%'
      }} />
    </Box>
  )
}

type FlipperProps = {
  flipped?: boolean,
  cardProps?: CardProps,
  children: [React.ReactElement, React.ReactElement]
}

function Flipper(props: FlipperProps) {
  const controlled = props.flipped !== undefined;
  const [flipped, setFlipped] = React.useState(props.flipped ?? false);
  const flip = () => setFlipped(!flipped);

  return (
    <Card {...props.cardProps} onClick={controlled ? undefined : flip}>
      <TransitionGroup>
        {
          props.children.map((child, i) => (
            <Collapse key={i} in={flipped}>
              {child}
            </Collapse>
          ))
        }
      </TransitionGroup>
    </Card>
  )
}

export function Experience() {
  return (
    <>
      <Masonry columns={2} spacing={2}>
        <Card variant='outlined'>
          <CardHeader title="xCraft Enterprises" subheader="Full-stack developer" />
          <Typography variant="body1" sx={{
            padding: '10px'
          }}>
            Built, deployed, and maintained a full-stack application designed to control drones over the internet.
          </Typography>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Undergraduate Researcher" subheader="University of Idaho" />
          <Typography variant="body1" sx={{
            padding: '10px'
          }}>
            Designed, built, and deployed an agricultural data collection and analytics website.
          </Typography>
        </Card>
      </Masonry>
    </>
  );
}

function ScarecroProjectCard() {
  const [detailsOpen, setDetailsOpen] = React.useState(false);

  return (
    <>
      <Card variant='outlined'>
        <Button onClick={() => setDetailsOpen(true)}>
        Testing
        </Button>
      </Card>
      <Backdrop open={detailsOpen}>
        <Card variant='outlined' sx={{
          padding: '20px',
          maxWidth: {
            xs: '100%',
            sm: '80%',
            md: '60%',
            lg: '40%',
            xl: '20%'
          },
          width: {
            xs: '100%',
            sm: '80%',
            md: '60%',
            lg: '40%',
            xl: '20%'
          },
          height: {
            xs: '100%',
            sm: 'auto'
          },
          maxHeight: '100vh',
          overflowY: 'auto'
        }}>
          <CardHeader title="Scarecro" subheader="Agricultural data collection and analytics" />
          <CardContent>
            <Typography variant="body1">
              Scarecro is a project I worked on as an undergraduate researcher at the University of Idaho. It is a web application designed to collect and analyze agricultural data.
            </Typography>
            <HorizontalDivider />
          </CardContent>
          <Fab onClick={() => setDetailsOpen(false)} sx={{
            position: 'absolute', 
            top: '10px',
            right: '10px'
          }}>
            X
          </Fab>
        </Card>
      </Backdrop>
    </>
  )
}

export default function HomePage() {
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1" sx={{
          marginTop: '35vh'
        }}>Hi, I'm <Typography variant="h1" display="inline" color="primary">Walter</Typography></Typography>
        <Typography variant="h4" color='GrayText'>I'm a full-stack developer</Typography>
        <ArrowDownwardIcon sx={{
          marginTop: '10%'
        }} />
      </Box>
      <Box sx={{
        textAlign: 'center',
        marginTop: '20%'
      }}>
        <Typography variant="h2">About Me</Typography>
        <Typography variant="body1">
          I'm a full-stack developer with a passion for building things.
        </Typography>
      </Box>
      <Box sx={{
        textAlign: 'center',
        marginTop: '20%'
      }}>
        <Typography variant="h2">Experience</Typography>
        <Experience />
        <ScarecroProjectCard />
      </Box>
    </>
  )
}
