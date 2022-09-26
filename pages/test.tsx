import { NextPage } from "next";
import { useState } from "react";

import { useAppSelector, useAppDispatch } from "../app/reduxHooks";
import { selectCount } from "../components/counter/counterSlice";

const Test: NextPage = (props) => {
  const count = useAppSelector(selectCount);
  return (
    <div>
      <ul>
        this is the test page
        <li>{count}</li>
      </ul>
    </div>
  );
};

export default Test;
