import { useState, useEffect } from 'react';

import { Card } from '../../components/Card/Card';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log('🚀 ~ file: Home.jsx:13 ~ fetchData ~ data:', data);
        setItems(data);
      } catch (error) {
        console.log(`Hubo un error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.length > 0
          ? items.map((item) => (
            <Card
              key={item.id}
              data={item}
            />
          ))
          : null}
      </div>

      <ProductDetail />
    </div>
  );
}

export { Home };
