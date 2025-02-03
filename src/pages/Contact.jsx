import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Card,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2, 4),
  borderRadius: theme.spacing(3),
  background: theme.palette.background.paper,
  position: "relative",
  overflow: "hidden",
  marginTop:'4rem !important'
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="md">
      <Card elevation={3} sx={{ py: 6 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Get in Touch
          </Typography>
          {[
            "Have questions? We'd love to hear from you.",
            "Send us a message and we'll respond as soon as possible.",
          ].map((item) => (
            <Typography
              key={item}
              variant="subtitle1"
              color="text.secondary"
              sx={{
                maxWidth: "600px",
                mx: "auto",
                fontSize: "1rem",
                lineHeight: 1.5,
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Contact Form */}
        <StyledPaper elevation={0}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Stack>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<Send />}
                sx={{
                  py: 1.5,
                  px: 4,
                  background: (theme) =>
                    `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                }}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </StyledPaper>
      </Card>
    </Container>
  );
};

export default Contact;
