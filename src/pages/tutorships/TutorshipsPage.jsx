import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import subjectService from "../../services/subjectService";

// =============================================================================

export default function TutorshipsPage() {
  const [subject, setSubject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userInfo.id);
  const navigate = useNavigate();

  useEffect(() => {
    getSubjects();
  }, []);

  const getSubjects = async () => {
    setIsLoading(true);
    try {
      const data = await subjectService.getAllSubjects(token);
      setSubject(data.results.subjects);
      console.log(data.results.subjects);
      console.log(userId);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubject = async (id) => {
    try {
      console.log(id);
      navigate(`/subject/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
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
            {subject.map((sub) => (
              <Card
                key={sub.id}
                sx={{
                  minWidth: 200,
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`/images/subjects/subject_${sub.id}.jpg`}
                  alt="english"
                />
                <CardContent value={sub.id}>
                  <Typography gutterBottom variant="h5" component="div">
                    {sub.subject_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore inside the subject and find your ideal tutor.
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 2, backgroundColor: "#3d3ed6" }}
                    onClick={() => handleSubject(sub.id)}
                  >
                    Find your ideal tutor
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Container>
    </>
  );
}
