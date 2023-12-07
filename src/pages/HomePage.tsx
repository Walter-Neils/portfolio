import { Backdrop, Box, Button, Card, CardActions, CardContent, CardHeader, CardProps, Collapse, Fab, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Masonry } from "@mui/lab";
import React from "react";
import { TransitionGroup } from "react-transition-group";
import LaunchIcon from '@mui/icons-material/Launch';
import WebIcon from '@mui/icons-material/Web';
import DatasetIcon from '@mui/icons-material/Dataset';
import InventoryIcon from '@mui/icons-material/Inventory';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import ArchiveIcon from '@mui/icons-material/Archive';
import SpeedIcon from '@mui/icons-material/Speed';
import ShieldIcon from '@mui/icons-material/Shield';
// Import toast
import { toast } from 'react-toastify';

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
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  return (
    <>
      <Card variant='outlined' sx={{
        marginBottom: '10px'
      }}>
        <CardHeader title="Full-Stack Developer" subheader="xCraft Enterprises, Inc." />
        <Typography variant="body1" sx={{
          padding: '10px'
        }}>
          Built, deployed, and maintained a full-stack application designed to control drones over the internet.
        </Typography>
      </Card>
      <Card variant="outlined" sx={{
        marginBottom: '10px'
      }}>
        <CardHeader title="Undergraduate Researcher" subheader="University of Idaho" />
        <CardContent>
          <Typography variant="body1" sx={{
            padding: '10px'
          }}>
            Designed, built, and deployed an agricultural data collection and analytics website.
          </Typography>
          <Collapse in={detailsOpen}>
            <ScarecroProjectCard />
          </Collapse>
        </CardContent>
        <CardActions>
          <Button onClick={() => setDetailsOpen(!detailsOpen)} startIcon={<LaunchIcon />}>Show Projects</Button>
        </CardActions>
      </Card>
      <PersonalExperienceCard />
    </>
  );
}

function NodeWebAppBaseProjectCard() {
  return (
    <Card variant='outlined'>
      <CardHeader title="Node Web App Base" subheader="A template for building Node.js web apps with microservice architecture" />
      <CardContent>
        <Typography variant="body1">
          Node Web App Base is a template for building Node.js web apps with microservice architecture. It's designed to be a starting point for building Node.js web apps with a modern, scalable architecture.
        </Typography>
        <List>
          {
            [
              {
                primary: 'React',
                secondary: 'For a responsive, modern frontend'
              },
              {
                primary: 'Node.js',
                secondary: 'For a fast, scalable backend with maximum code reuse'
              },
              {
                primary: 'TypeScript',
                secondary: 'For a type-safe, modern codebase'
              },
              {
                primary: 'MongoDB',
                secondary: 'Scalable, flexible, and capable of supporting new data shapes as they are added'
              },
              {
                primary: 'Docker',
                secondary: 'For easy, consistent deployment'
              },
              {
                primary: 'AWS S3',
                secondary: 'For storing large amounts of static data'
              },
              {
                primary: 'NGINX',
                secondary: 'For serving static files and load balancing'
              }
            ].map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <WebIcon />
                </ListItemIcon>
                <ListItemText primary={item.primary} secondary={item.secondary} />
              </ListItem>
            ))
          }
        </List>
      </CardContent>
      <CardActions>
        <Button variant='contained' startIcon={<LaunchIcon />} onClick={() => window.open("https://github.com/Walter-Neils/node-webapp-base")}>GitHub</Button>
      </CardActions>
    </Card>
  )
}

function ScarecroProjectCard() {
  const [detailsOpen, setDetailsOpen] = React.useState(false);

  return (
    <>
      <Card variant='outlined'>
        <CardHeader title="Scarecro" subheader="Agricultural data collection and analytics" />
        <CardContent>
          <Typography variant="body1">
            Scarecro is a system designed to allow agricultural operations to collect, analyze, and visualize data about their crops. It's designed around a microservice architecture, with a React frontend, a language agnostic backend (primarily written in TypeScript), and a MongoDB database. It's currently in use on multiple sites over the country.
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setDetailsOpen(true)} startIcon={<LaunchIcon />}>Learn More</Button>
          <Button onClick={() => {
            // Show promise toast for 5 seconds, then fail 
            toast.promise(new Promise((resolve, reject) => {
              setTimeout(() => {
                reject();
              }, 5000);
            }), {
              pending: 'Checking availability...',
              success: 'Available!',
              error: 'Demo currently unavailable.'
            });
          }} startIcon={<WebIcon />}>Demo</Button>
        </CardActions>
      </Card>
      <Backdrop open={detailsOpen} sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}>
        <Card variant='outlined' sx={{
          padding: '20px',
          maxWidth: {
            xs: '100%',
            sm: '80%',
            md: '60%',
            lg: '50%',
            xl: '40%'
          },
          width: {
            xs: '100%',
            sm: '80%',
            md: '60%',
            lg: '40%',
            xl: '30%'
          },
          height: {
            xs: '100%',
            sm: 'auto'
          },
          maxHeight: '100vh',
          overflowY: 'auto',
        }}>
          <CardHeader title="Scarecro" subheader="Agricultural data collection and analytics" />
          <CardContent>
            <Typography variant="h6">Technologies</Typography>
            <List>
              <TransitionGroup>
                {
                  [
                    {
                      icon: WebIcon,
                      primary: 'React',
                      secondary: 'For a responsive, modern frontend'
                    },
                    {
                      icon: SpeedIcon,
                      primary: 'Node.js',
                      secondary: 'For a fast, scalable backend with maximum code reuse'
                    },
                    {
                      icon: ShieldIcon,
                      primary: 'TypeScript',
                      secondary: 'For a type-safe, modern codebase'
                    },
                    {
                      icon: DatasetIcon,
                      primary: 'MongoDB',
                      secondary: 'Scalable, flexible, and capable of supporting new data shapes as they are added'
                    },
                    {
                      icon: InventoryIcon,
                      primary: 'Docker',
                      secondary: 'For easy, consistent deployment'
                    },
                    {
                      icon: ArchiveIcon,
                      primary: 'AWS S3',
                      secondary: 'For storing large amounts of static geospatial data'
                    },
                    {
                      icon: OpenInBrowserIcon,
                      primary: 'NGINX',
                      secondary: 'For serving static files and load balancing'
                    }
                  ].map((item, i) => (
                    <Collapse key={i} in={detailsOpen}>
                      <ListItem>
                        <ListItemIcon>
                          <item.icon />
                        </ListItemIcon>
                        <ListItemText primary={item.primary} secondary={item.secondary} />
                      </ListItem>
                    </Collapse>
                  ))
                }
              </TransitionGroup>
            </List>
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

function CatalystProjectCard() {
  const [maximumFeaturesOpen, setMaximumFeaturesOpen] = React.useState(false);
  return (
    <Card variant='outlined' sx={{
      minWidth: '50vw',
      marginBottom: '10px'
    }}>
      <CardHeader title="Catalyst" subheader="A C# library with extensions for pretty much everything" />
      <CardContent>
        <Typography variant="body1">
          Catalyst is a C# library with extensions for pretty much everything. It's designed to be a one-stop-shop for all of your C# needs, and it's designed to be as easy to use as possible.
        </Typography>
        <List sx={{
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
        }}>
          <TransitionGroup>
            {
              [
                {
                  primary: 'Code Generation',
                  secondary: 'Language-agnostic code generation library'
                },
                {
                  primary: 'Runtime Adapters',
                  secondary: 'Dynamically loaded adapters for different strategies with the same interface'
                },
                {
                  primary: 'Persistent Storage',
                  secondary: 'A simple, database-agnostic ORM compatible with Catalyst Adapters'
                },
                {
                  primary: 'Cecil Extensions',
                  secondary: 'Extensions for the Mono.Cecil library'
                },
                {
                  primary: 'Boilerplate Patcher',
                  secondary: 'Standalone executable for adding compile time code modifications to a project based on code attributes'
                },
                {
                  primary: 'Caching System',
                  secondary: 'A simple, thread-safe caching system compatible with Catalyst Adapters'
                },
                {
                  primary: 'DOT / GraphViz Library',
                  secondary: 'A library for generating GraphViz DOT files'
                },
                {
                  primary: 'Composition Library',
                  secondary: 'Runtime assembly generation for creating composite types on the fly'
                },
                {
                  primary: 'Instance Streams',
                  secondary: 'A library for creating streams which when read from or written to, create instances of a given type'
                },
                {
                  primary: 'Console UI',
                  secondary: 'A library for creating console UIs'
                },
                {
                  primary: 'File Extensions',
                  secondary: 'Extensions for the System.IO library, including NTFS alternate data streams & more'
                },
                {
                  primary: 'Hardware Information',
                  secondary: 'A library for getting information about the hardware the program is running on'
                },
                {
                  primary: 'LINQ Extensions',
                  secondary: 'Extensions for the System.Linq library'
                },
                {
                  primary: 'Mathmatical Expression Parser',
                  secondary: 'A library for parsing and evaluating mathematical expressions'
                },
                {
                  primary: 'MAVLink',
                  secondary: 'A library for parsing and serializing MAVLink messages'
                },
                {
                  primary: 'Catalyst Python Interop',
                  secondary: 'A library for using Python objects as if they were C# objects'
                },
                {
                  primary: 'Object State Observer',
                  secondary: 'A library for observing changes to objects'
                },
                {
                  primary: 'VT100',
                  secondary: 'A library for creating VT100 escape sequences'
                },
                {
                  primary: 'MotionJPEG',
                  secondary: 'A library for creating MotionJPEG streams'
                },
                {
                  primary: 'Synology API',
                  secondary: 'A library for interacting with Synology NAS devices'
                },
                {
                  primary: 'BITS Wrapper',
                  secondary: 'A wrapper for the Background Intelligent Transfer Service'
                },
                {
                  primary: 'Timing Library',
                  secondary: 'A library for timing code execution'
                },
                {
                  primary: 'Diagnostics',
                  secondary: 'A library for logging and debugging'
                }
              ].map((item, i) => {
                if (!maximumFeaturesOpen && i > 4) {
                  if(i === 5) {
                    return (
                      <Collapse key={`${i}-placeholder`} in={true}>
                        <ListItem>
                          <ListItemIcon>
                            <WebIcon />
                          </ListItemIcon>
                          <ListItemText primary="And More" secondary="Show full details to see the entire feature set" />
                        </ListItem>
                      </Collapse>
                    )
                  }
                  return null;
                }
                return (<Collapse key={i} in={true}>
                  <ListItem>
                    <ListItemIcon>]
                      <WebIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.primary} secondary={item.secondary} />
                  </ListItem>
                </Collapse>
                );
              })
            }
          </TransitionGroup>
        </List>
      </CardContent>
      <CardActions>
        <Button variant='contained' startIcon={<LaunchIcon />} onClick={
          () => {
            setMaximumFeaturesOpen(x => !x);
          }
        }>Show{
            maximumFeaturesOpen ? ' Less' : ' More'
          }</Button>
        <Button variant='contained' startIcon={<LaunchIcon />} onClick={
          () => {
            // Show promise toast for 5 seconds, then fail 
            toast.promise(new Promise((resolve, reject) => {
              setTimeout(() => {
                reject();
              }, 5000);
            }), {
              pending: 'Checking availability...',
              success: 'Available!',
              error: 'Repository currently unavailable.'
            });
          }
        }>GitHub</Button>
      </CardActions>
    </Card>
  )
}

function EVProjectCard() {
  return (
    <Card variant='outlined' sx={{
      marginBottom: '10px'
    }}>
      <CardHeader title="EV Project" subheader="Building a custom electric vehicle" />
      <CardContent>
        <Typography variant="body1">
          I'm working on converting a 1970 Camero into an electric vehicle. This project is still in the early stages, but I'm documenting the process.
        </Typography>
        <List>
          {
            [
              {
                primary: 'Custom Drive Train',
                secondary: 'A custom drive train designed to fit in the existing transmission tunnel'
              },
              {
                primary: 'Custom Battery Pack',
                secondary: 'A custom battery pack built with the LG SuperCell battery'
              },
              {
                primary: 'Custom Battery Management System',
                secondary: 'A custom battery management system designed to balance, monitor, and charge the battery pack'
              },
              {
                primary: 'Custom Body Control System',
                secondary: 'A custom body control system designed to provide driver assistance features (ABS, traction control, etc.)'
              },
            ].map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <WebIcon />
                </ListItemIcon>
                <ListItemText primary={item.primary} secondary={item.secondary} />
              </ListItem>
            ))
          }
        </List>
      </CardContent>
      <CardActions>
        <Button variant='contained' startIcon={<LaunchIcon />}>Learn More</Button>
      </CardActions>
    </Card>
  )
}

function PersonalExperienceCard() {
  return (
    <Card variant='outlined'>
      <CardHeader title="Personal Projects" />
      <CardContent>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <CatalystProjectCard />
          <EVProjectCard />
          <NodeWebAppBaseProjectCard />
        </Box>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1" sx={{
          // Roughly halfway from the top of the screen
          marginTop: {
            xs: '20vh',
            sm: '30vh',
            md: '35vh',
            lg: '40vh',
          }
        }}>Hi, I'm <Typography variant="h1" display="inline" color="primary">Walter</Typography></Typography>
        <Typography variant="h4" color='GrayText'>I'm a full-stack developer</Typography>
        <ArrowDownwardIcon sx={{
          marginTop: '10%'
        }} />
      </Box>
      <Box sx={{
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '20%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography variant="h2">About Me</Typography>
        <Box sx={{
          maxWidth: {
            xs: '100%',
            sm: '80%',
            md: '60%',
            lg: '40%',
            xl: '20%'
          }
        }}>
          <Typography variant="body1">
            I'm a full-stack developer with a passion for building things. I'm currently attending North Idaho College, and I plan to transfer to the University of Idaho to finish my bachelor's (and maybe master's) degree in computer science.
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        textAlign: 'center',
        marginTop: '20%'
      }}>
        <Typography variant="h2">Experience</Typography>
        <Experience />
      </Box>
    </>
  )
}
