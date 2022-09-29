import { useAppSelector } from "app/reduxHooks";
import { NextPage } from "next";
import { useState } from "react";
import styles from "./Planner.module.scss";
import { selectHoursPlanned } from "./plannerSlice";
const Planner = () => {
  const hours = useAppSelector(selectHoursPlanned);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hourContainer}>
          {hours.map((hour) => {
            return (
              <>
                {hour === 24 || hour === 0 ? (
                  <div key={hour}> 00.00 </div>
                ) : hour > 10 ? (
                  <div key={hour}> {hour.toFixed(2)} </div>
                ) : (
                  <div key={hour}> {("0" + hour.toFixed(2)).slice(-5)} </div>
                )}
              </>
            );
          })}
        </div>
        <div className={styles.tasksContainer}>t</div>
      </div>
    </>
  );
};

export default Planner;
