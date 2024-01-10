import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { ShoppingCardContext } from "../../context";

const menuLinks1 = [
  { id: 1, name: 'Shopi', to: '/', className: 'font-semibold text-lg'},
  { id: 2, name: 'All', to: '/'},
  { id: 3, name: 'Clothes', to: '/clothes'},
  { id: 4, name: 'Electronics', to: '/electronics'},
  { id: 5, name: 'Furnitures', to: '/furnitures'},
  { id: 6, name: 'Toys', to: '/toys'},
  { id: 7, name: 'Other', to: '/other'},
];

const menuLinks2 = [
  { id: 1, name: 'My Orders', to: '/my-orders'},
  { id: 2, name: 'My Account', to: '/my-account'},
  { id: 3, name: 'Sign In', to: '/sign-in'},
];

function Navbar() {
  const { count } = useContext(ShoppingCardContext);
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        {menuLinks1.map((link, index) => {
          return (
            <li 
              key={link.id}
              className={link.className}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) => 
                  (isActive && index !== 0) ? activeStyle : undefined
                }
              >
                {link.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
      
      <ul className="flex items-center gap-3">
        {menuLinks2.map(link => {
          return (
            <li 
              key={link.id}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) => 
                  isActive ? activeStyle : undefined
                }
              >
                {link.name}
              </NavLink>
            </li>
          )
        })}
        <li className="flex gap-3 items-center"><ShoppingCartIcon className="w-6 h-6" /> {count}</li>
      </ul>
    </nav>
  );
}

export { Navbar };