import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { Card } from "../../components/Card/Card";
import { ShoppingCardContext } from "../../context";

function Home() {

  const { items } = useContext(ShoppingCardContext);
  const { category } = useParams();
  const [searchByTitle, setSearchByTitle] = useState("");

  const filteredItems = (item) => {
    let title = item.title.toLowerCase();
    let itemValidateCategory = category ? item.category === category : true;

    if (title.includes(searchByTitle.toLowerCase()) && itemValidateCategory) return true
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <input
        className="w-96 outline-none border border-black rounded-lg p-2"
        type="text" 
        placeholder="Search product"
        onChange={(e) => setSearchByTitle(e.target.value)}
      />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 w-full max-w-screen-lg place-content-center">
        {items.length > 0 ?
          items.filter((item) => filteredItems(item)).length > 0 ?
            items.filter((item) => filteredItems(item)).map((item) => <Card key={item.id} data={item} />)
          : <p>We don't have coincidences</p>
        : null}
      </div>
    </div>
  );
}

export { Home };
