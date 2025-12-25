import React from "react";

import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

export default function Map() {
  const { searchParams, setSearch } = useSearchParams();
  return <div className={styles.mapContainer}>Map</div>;
}
