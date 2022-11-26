import { Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import { ButtonContained } from "../OthersButton/ButtonContained";
import theme from "../../theme";
import "./styles.css";

function Card({ title, description, buttonText, image, tooltipText }) {
  return (
    <Stack
      alignItems="flex-start"
      spacing={3}
      sx={{
        width: "350px",
        padding: "20px",
        boxShadow: "1px 6px 12px rgba(0,0,0,0.1)",
        borderRadius: "30px",
        position: "relative",
        zIndex: "7",
        "&:hover": { scale: "1.02" },
        transition: "0.5s scale",
        cursor: "pointer",
        backgroundColor: "#FFF",
      }}
    >
      <img
        style={{
          width: "350px",
          height: "280px",
          borderRadius: "10px",
          objectPosition: "center",
          objectFit: "cover",
        }}
        src={image}
        alt=""
      />
      <Stack spacing={1}>
        <Typography
          width={"100%"}
          variant="h2"
          align="left"
          fontWeight={700}
          fontSize={22}
          color="rgba(55,130,163)"
          sx={{ display: "flex", alignItems: "center" }}
        >
          {title}
        </Typography>
        {tooltipText && <Typography
          width={"100%"}
          variant="h3"
          align="left"
          fontWeight={400}
          fontSize={18}
          color="#616161"
          lineHeight="25px"
        >
          <Tooltip
            placement="bottom-end"
            sx={{ width: "340px" }}
            title={
              <Typography
                component={"div"}
                variant="body1"
                sx={{ width: "340px", padding: "5px" }}
              >
                {tooltipText}
              </Typography>
            }
          >
            <span>{description}</span>
          </Tooltip>
        </Typography>}
        {!tooltipText && <Typography
          width={"100%"}
          variant="h3"
          align="left"
          fontWeight={400}
          fontSize={18}
          color="#616161"
          lineHeight="25px"
        >
          {description}
        </Typography>}

      </Stack>
    </Stack>
  );
}

export default Card;
