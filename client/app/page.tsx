"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

type HealthResponse = {
  ok: boolean;
};

export default function Home() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/health")
      .then((res) => res.json())
      .then((json: HealthResponse) => setData(json))
      .catch(() => {
        setError("Failed to connect to backend");
      });
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Backend Test</h1>

          {error && <p className={styles.error}>{error}</p>}

          {data && (
            <pre className={styles.response}>
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </div>
      </main>
    </div>
  );
}
