import { XCircleIcon } from '@heroicons/react/24/solid';

import { useContext } from "react";
import { ShoppingCardContext } from "../../context";

import './SideMenu.css';

function SideMenu({ children, sideMenuTitle }) {
  const { isSideMenuOpen, closeSideMenu, sideMenuComponentSelected } = useContext(ShoppingCardContext);
  console.log("🚀 ~ SideMenu ~ sideMenuComponentSelected:", sideMenuComponentSelected)

  return (
    <aside className={`${isSideMenuOpen ? 'flex' : 'hidden'} product-detail flex-col gap-3 fixed right-0 border border-black rounded-lg bg-white p-6`}>
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">{sideMenuComponentSelected?.title}</h2>
        <XCircleIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={() => closeSideMenu(false)}
        />
      </div>
      
      {sideMenuComponentSelected?.component}
    </aside>
  )
}

export { SideMenu }
