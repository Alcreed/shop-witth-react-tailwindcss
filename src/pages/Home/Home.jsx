import { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "../../components/Card/Card";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://fakestoreapi.com/products');
        // const data = await response.json();
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setItems(data);
      } catch (error) {
        throw new Error(`Hubo un error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.length > 0
          ? items.map((item) => <Card key={item.id} data={item} />)
          : null}
      </div>

      <ProductDetail />
    </div>
  );
}

export { Home };
