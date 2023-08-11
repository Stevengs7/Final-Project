import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// =============================================================================

export default function TutorshipsPage() {
  return (
    <>
      <Container
        sx={{
          mt: 5,
          pb: 4,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          fontSize={35}
          align="center"
          fontWeight={400}
          gutterBottom
        >
          Subjects
        </Typography>
        <Container>
          <Box>
            <Typography variant="h2" fontSize={25} gutterBottom>
              Welcome to TeachMe Tutorships, we're your partners in education,
              dedicated to helping you unlock your full potential and achieve
              your goals. With a community of passionate tutors and a commitment
              to excellence, we're here to guide you every step of the way.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: "3em",
            }}
          >
            <Card
              sx={{
                minWidth: 200,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/subjects/subject_2.jpg"
                alt="english"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  English
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find your ideal tutor.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 200,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/subjects/subject_3.jpg"
                alt="spanish"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spanish
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find your ideal tutor.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 200,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/subjects/subject_4.jpg"
                alt="Math"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Matemathics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find your ideal tutor.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 200,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/subjects/subject_5.jpg"
                alt="Science"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Science
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find your ideal tutor.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 200,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/subjects/subject_6.jpg"
                alt="History"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  History
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find your ideal tutor.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 200,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/subjects/subject_7.jpg"
                alt="Art"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Art
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find your ideal tutor.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 200,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/subjects/subject_8.jpg"
                alt="Music"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Music
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find your ideal tutor.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 200,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="/images/subjects/subject_9.jpg"
                alt="Computer Science"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Computer Science
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find your ideal tutor.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Container>
    </>
  );
}
