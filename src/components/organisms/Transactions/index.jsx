import { useState } from "react";
import { useEffect } from "react";

import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

import styles from "./styles.module.scss";

const Element = ({ deposit, el, prefix }) => (
  <td className={styles.td}>
    <section className={styles.tSectioinsUnity}>
      <i
        className={
          deposit ? "fa-solid fa-arrow-up-long" : "fa-solid fa-arrow-down-long"
        }
      ></i>
      <Badge className={styles.bg}>ID {el.id}</Badge>{" "}
      <span>{prefix ? "+" : "-"}</span>
      <section className={styles.tValue}>
        <span>{el.summa}</span>
        <span>
          <b>{el.coin}</b>
        </span>
      </section>
    </section>
    <section>
      <span>{el.time} minute</span>
    </section>
  </td>
);

function TransactionsList({ deposit, usersList, prefix }) {
  return (
    <Table variant="dark" className={styles.transactionsTable}>
      <tbody>
        {usersList.length &&
          usersList.map((el) => (
            <Element el={el} prefix={prefix} deposit={deposit} />
          ))}
      </tbody>
    </Table>
  );
}
const GenerateUser = () => {
  const coins = [
    "BTC",
    "AVAX",
    "ETHEREUM",
    "MATIC",
    "USDT",
    "DAI",
    "BUSD",
    "USDC",
  ];
  const random = Math.floor(Math.random() * coins.length);
  const isBitcoin = coins[random] === coins[0];
  const isEth = coins[random] === coins[2];

  let min = isBitcoin ? 0.1 : isEth ? Math.ceil(1) : Math.ceil(200);
  let max = isBitcoin ? 0.5 : isEth ? Math.ceil(10) : Math.ceil(500);
  const bitocoinSumma = Math.random() * (max - min) + min;
  return {
    id: Date.now(),
    coin: isBitcoin ? coins[0] : coins[random],
    summa: isBitcoin
      ? bitocoinSumma.toFixed(1)
      : Math.round(Math.random() * (max - min) + min),
    time: Math.round(Math.random() * (15 - 1) + 1),
  };
};

const Transactions = () => {
  const [usersList, setUsersList] = useState(
    [
      GenerateUser(),
      GenerateUser(),
      GenerateUser(),
      GenerateUser(),
      GenerateUser(),
      GenerateUser(),
      GenerateUser(),
    ].sort((a, b) => a.time - b.time)
  );
  const [depositUsersList, setDepositUsersList] = useState(
    [
      GenerateUser(),
      GenerateUser(),
      GenerateUser(),
      GenerateUser(),
      GenerateUser(),
      GenerateUser(),
      GenerateUser(),
    ].sort((a, b) => a.time - b.time)
  );
  const delay = 600000;
  const minute = 10;

  useEffect(() => {
    const INTERVAL = setInterval(() => {
      setUsersList((users) => {
        const newUser = GenerateUser();
        const deleteLastUserArray = users.slice(0, -1);
        deleteLastUserArray.unshift(newUser);
        deleteLastUserArray.forEach((el, idx, arr) => {
          if (idx > 0) {
            el.time = el.time < 60 ? arr[idx].time + minute : 60;
          }
        });
        return deleteLastUserArray.sort((a, b) => a.time - b.time);
      });

      setDepositUsersList((users) => {
        const newUser = GenerateUser();
        const deleteLastUserArray = users.slice(0, -1);
        deleteLastUserArray.unshift(newUser);
        deleteLastUserArray.forEach((element, idx, arr) => {
          if (idx > 0) {
            element.time = arr[idx].time + minute;
          }
        });
        return deleteLastUserArray.sort((a, b) => a.time - b.time);
      });
    }, delay);

    return () => clearInterval(INTERVAL);
  }, []);
  return (
    <section className={styles.transactions}>
      <img src="img/Ellipse1.svg" className="absolute top-0 left-4 z-30" />
      <div className={styles.content}>
        <div className={styles.block}>
          <div className="font-md sm:text-3xl md:text-6xl title-font nonePadding">
            <div className="z-30 nonePadding">Deposit</div>
          </div>
          <TransactionsList
            deposit={true}
            prefix={true}
            usersList={depositUsersList}
          />
        </div>
        <div className={styles.block}>
          <div className="font-md sm:text-3xl md:text-6xl title-font nonePadding">
            <div className="z-30 nonePadding">Withdrawal</div>
          </div>
          <TransactionsList
            deposit={false}
            prefix={false}
            usersList={usersList}
          />
        </div>
      </div>
    </section>
  );
};
export default Transactions;
