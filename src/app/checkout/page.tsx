"use client";

import Container from "@/components/ui/container";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-24 min-h-screen">
      <Container>
        <h1>Checkout page is under development</h1>

        <div>{data.title}</div>
      </Container>
    </div>
  );
}
