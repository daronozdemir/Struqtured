import { NextPage } from "next";
import styles from "/styles/Home.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useState } from "react";
import Link from "next/link";
import Counter from "components/counter/counter";
import Profile from "components/profile/profile";
import Progress from "components/progress/progress";
import { redirect } from "next/dist/server/api-utils";
import Planner from "components/planner/planner";

const Home: NextPage = (props) => {
  const [value, setValue] = React.useState(0);
  const [page, setPage] = useState("/");

  const changePageContent = () => {
    switch (value) {
      case 0: {
        return <Planner />;
      }
      case 1: {
        return <Progress />;
      }
      case 2: {
        return <Profile />;
      }
    }
  };

  return (
    <>
      <div className={styles.root}>
        {changePageContent()}
        <Box className={styles.bottomNavRoot}>
          <BottomNavigation
            className={styles.bottomNavigation}
            sx={{
              "& .Mui-selected, .Mui-selected > svg": {
                color: "#967e76",
              },
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              sx={{
                "& .Mui-selected, .Mui-selected > svg": {
                  color: "#967e76",
                },
              }}
              label="Home"
              icon={<DashboardRoundedIcon />}
            />
            <BottomNavigationAction
              sx={{
                "& .Mui-selected, .Mui-selected > svg": {
                  color: "#967e76",
                },
              }}
              label="Progress"
              icon={<DonutLargeRoundedIcon />}
            />
            <BottomNavigationAction
              sx={{
                "& .Mui-selected, .Mui-selected > svg": {
                  color: "#967e76",
                },
              }}
              label="Profile"
              icon={<PersonRoundedIcon />}
            />
          </BottomNavigation>
        </Box>
      </div>
    </>
  );
};

export default Home;
