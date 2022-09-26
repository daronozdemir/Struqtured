import Counter from "components/counter/counter";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import { useAppSelector, useAppDispatch } from "../app/reduxHooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../components/counter/counterSlice";
import styles from "../styles/Counter.module.css";

const Home: NextPage = (props) => {
  const count = useAppSelector(selectCount);
  return (
    <div>
      <Counter />
      <Link href="/test">
        <a>test</a>
      </Link>
      <ul>
        <li>{count}</li>
      </ul>
    </div>
  );
};

export default Home;
