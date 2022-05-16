import {
  Box,
  Stack,
  Button,
  styled,
  Toolbar,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Navigation from "./Navigation";
import { BackgroundHeader } from "./HomeLayout/Banner";
import { CgPhone } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const ManagerBtn = styled(Button)(({ theme }) => ({
  padding: "5px 20px",
  margin: "0 20px",
  color: "#fff",
  backgroundColor: theme.palette.primary.dark,
  borderRadius: "5px",
  fontSize: "14px",
  fontWeight: 400,
  "&: hover": {
    border: "1px solid black",
    color: theme.palette.primary.dark,
  },
}));

const Header = (props) => {
  const { isHome } = props;
  const navigate = useNavigate();
  return (
    <>
      <>
        <BackgroundHeader>
          <StyledContainer>
            <Toolbar sx={{ height: 200 }}>
              <Stack
                alignItems="flex-start"
                justifyContent="space-between"
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: { xs: "0 0 10px 0", sm: "0 20px" },
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <HomeLogoTitle onClick={() => navigate("/home")}>
                  무송부동산
                </HomeLogoTitle>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    height: 30,
                    margin: "30px 0 0",
                    width: { xs: "100%", sm: "auto" },
                    paddingBottom: { xs: 5, sm: 0 },
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: 600, fontSize: "1.4rem" }}>
                    <CgPhone style={{ verticalAlign: "-2px" }} /> 010
                    <span style={{ fontWeight: 400 }}>-</span>5477
                    <span style={{ fontWeight: 400 }}>-</span>8787
                  </Typography>
                  <ManagerBtn>관리자모드</ManagerBtn>
                </Stack>
              </Stack>
            </Toolbar>
          </StyledContainer>
        </BackgroundHeader>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.primary.lightdark,
          }}
        >
          <StyledContainer>
            <Navigation isHome={true} />
          </StyledContainer>
        </Box>
      </>
    </>
  );
};

export default Header;

const HomeLogoTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3.8rem",
  // fontFamily: "Gowun Batang, serif",
  fontWeight: 700,
  cursor: "pointer",
  padding: "14px 0 0",
  [theme.breakpoints.down("sm")]: {
    padding: "0",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

const LogoTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    fontSize: "2.2rem",
    padding: "10px 0",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  "& .MuiToolbar-root": {
    padding: 0,
  },
  [theme.breakpoints.down("md")]: {
    paddingRight: 0,
    paddingLeft: 0,
    "& .MuiToolbar-root": {
      padding: 0,
    },
  },
}));
