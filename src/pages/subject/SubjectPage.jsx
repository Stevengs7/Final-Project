import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import subjectService from "../../services/subjectService";

export default function SubjectPage() {
  const [subject, setSubject] = useState({});
  const [tutor, setTutor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userInfo.id);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getTutors();
  }, []);

  const getTutors = async () => {
    setIsLoading(true);
    try {
      const data = await subjectService.getSubjectByID(token, id);
      setTutor(data.tutor);
      setSubject(data);
      console.log(data.tutor);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // ===========================================================================
  const handleTutor = async (id) => {
    try {
      console.log(id);
      /* navigate(`/subject/${id}`); */
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
          {subject.subject_name}
        </Typography>
        <Container>
          <Box></Box>
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
            {tutor.map((tut) => (
              <Card
                key={tut.id}
                sx={{
                  minWidth: 200,
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`/assets/avatars/avatar_${tut.id}.jpg`}
                />
                <CardContent value={tut.id}>
                  <Typography gutterBottom variant="h5" component="div">
                    {tut.user.user_name} {tut.user.user_last_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>email:</strong> {tut.user.email} <br />
                    <strong>verified:</strong> {tut.verificated}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 2, backgroundColor: "#3d3ed6" }}
                    onClick={() => handleTutor(tut.id)}
                  >
                    Create Tutorship
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
