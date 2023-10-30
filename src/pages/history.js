import React, { useState, useEffect, useMemo } from "react";
import Banner from "../components/history/banner";
import HistoryList from "../components/history/history";
import HistoryInforDetail from "../components/history/history-infor-detail";
import axios from "axios";
import Cookie from "js-cookie";

function History() {
  const [order, setOrder] = useState(null);
  const [detailOrder, setDetailOrder] = useState(null);
  console.log(order);
  useEffect(() => {
    axios("https://booking-app-agfh.onrender.com/history/get-order", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      method: "GET",
    })
      .then((response) => {
        if (response.data.status === 200) {
          setOrder(response.data.data);
        } else {
          throw new Error(response.data.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <>
      <Banner />
      <HistoryList order={order} setDetailOrder={setDetailOrder} />
      <HistoryInforDetail detailOrder={detailOrder} />
    </>
  );
}
export default History;
