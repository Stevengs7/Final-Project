import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <>
      <Container>
        <Typography variant="h2" sx={{ mt: 10 }} fontWeight={500} gutterBottom>
          About Us - TeachMe: Your Path to Learning
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          At TeachMe, we're more than just an online learning platform. We're
          your partners in education, dedicated to helping you unlock your full
          potential and achieve your goals. With a community of passionate
          tutors and a commitment to excellence, we're here to guide you every
          step of the way.
          <Box>
            <div className="footer"></div>
          </Box>
          <Typography variant="h6" gutterBottom>
            1. Expert Guidance:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our handpicked team of experienced tutors brings a wealth of
            knowledge to your fingertips. From academic subjects to practical
            skills, our experts are here to provide you with personalized
            guidance and support, ensuring that you receive top-notch education.
          </Typography>
          <Typography variant="h6" gutterBottom>
            2. Interactive Learning:
          </Typography>
          <Typography variant="body1" gutterBottom>
            We believe in active and engaging learning experiences. Our platform
            is designed to foster interactive sessions that promote discussion,
            collaboration, and critical thinking. Dive into live sessions, group
            discussions, and practical exercises that make learning a dynamic
            adventure.
          </Typography>
          <Typography variant="h6" gutterBottom>
            3.Flexible Learning Paths:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your learning journey should be as unique as you are. With TeachMe,
            you have the flexibility to choose courses that align with your
            interests and aspirations. Customize your learning path, set your
            own pace, and access resources that cater to your individual needs.
          </Typography>
          <Typography variant="h6" gutterBottom>
            4. Community Connection:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Learning thrives in a supportive community. Connect with fellow
            learners, share insights, and collaborate on projects. Our platform
            not only facilitates learning from tutors but also encourages
            peer-to-peer interaction, creating a vibrant and enriching
            environment.
          </Typography>
          <Typography variant="h6" gutterBottom>
            5. Empowerment for Life:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Education is an ongoing journey. Beyond acquiring knowledge, we
            empower you with skills that last a lifetime. From enhancing your
            career prospects to personal growth, TeachMe equips you with the
            tools to navigate an ever-evolving world.
          </Typography>
        </Typography>
        <Box>
          <div className="cabecera"></div>
        </Box>
        <Typography variant="h5" gutterBottom sx={{ mb: 10 }}>
          Join us at TeachMe and embark on an educational adventure that goes
          beyond the ordinary. Let's learn, grow, and thrive together.
        </Typography>
      </Container>
    </>
  );
}
