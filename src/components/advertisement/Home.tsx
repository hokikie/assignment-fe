import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import Advertisement from "../../models/advertisement/advertisement";
import dummyAdvertisement from "../../data/advertisement-dummy";
import Noitem from "./Noitem";

const Home = () => {
  const [adIndex, setAdIndex] = useState<number>(0);
  const [adData, setAdData] = useState(dummyAdvertisement[0] ?? {});
  const [initTime, setInitialTime] = useState<string>(
    new Date().toTimeString().slice(0, 5)
  );
  const [filteredAd, setFilteredAd] = useState<Advertisement[]>(
    dummyAdvertisement.filter((el) => {
      return (
        (el.startAt ?? "") <= initTime &&
        initTime < (el.endAt ?? "") &&
        (el.limitPerDay ?? 0) > 0
      );
    })
  );

  let cycledIndex = (adIndex + filteredAd.length) % filteredAd.length;

  useEffect(() => {
    localStorage.setItem("advertisementId", filteredAd[cycledIndex]?.id ?? "");

    let AdChange = setInterval(() => {
      if ((adData?.limitPerDay ?? 0) < 1) {
        return () => clearInterval(AdChange);
      }
      setAdIndex((prev) => prev + 1);
    }, 3_000);
    return () => clearInterval(AdChange);
  }, []);

  useEffect(() => {
    if ((adData?.limitPerDay ?? 0) < 1) {
      return;
    }
    localStorage.setItem("advertisementId", filteredAd[cycledIndex]?.id ?? "");

    setFilteredAd(
      filteredAd
        .map((el, idx) => {
          return idx === cycledIndex
            ? { ...el, limitPerDay: (el.limitPerDay ?? 0) - 1 }
            : el;
        })
        .filter((el) => {
          return (el.limitPerDay ?? 0) > 0;
        })
    );
    setAdData(filteredAd[cycledIndex]);
  }, [adIndex]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "4rem",
        alignItems: "center",
      }}
    >
      {Object.keys(adData ?? {})?.length > 0 ? (
        <>
          <p>{adData.types}</p>
          <p>게재일: {adData.displayDate}</p>
          <p>{adData.contents}</p>
          <Link to="/qr" state={adData.id}>
            <QRCode size={100} value="localhost:3000/qr" />
          </Link>
        </>
      ) : (
        <Noitem />
      )}
    </div>
  );
};

export default Home;
