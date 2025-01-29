/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

const ComingSoonBtn = ({ customStyles = {} }) => {
  return (
    <Typography
      component="span"
      sx={{
        fontSize: "0.7rem",
        bgcolor: "rgba(255, 255, 255, 0.2)",
        px: 0.8,
        py: 0.2,
        borderRadius: "10px",
        ml: 0,
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        ...customStyles,
      }}
    >
      Coming Soon
    </Typography>
  );
};

export default ComingSoonBtn;
