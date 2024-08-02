"use client";

import { useEffect, useState } from "react";

const HomePage = () => {
  const [params, setParams] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/sheets");
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data in component:", data);
          setParams(data);
        } else {
          console.error("Failed to fetch data:", response.statusText);
          setError(`Failed to fetch data: ${response.statusText}`);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        if (err instanceof Error) {
          setError(`Fetch error: ${err.message}`);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center">
      {error ? (
        <p>{error}</p>
      ) : params.length === 0 ? (
        <p>No data available</p>
      ) : (
        <ul>
          {params.map((param, index) => (
            <li key={index}>{param}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
