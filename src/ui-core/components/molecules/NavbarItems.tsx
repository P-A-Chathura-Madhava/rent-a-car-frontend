import Link from "next/link"
import NavbarItem from "../atoms/NavbarItem"

function NavbarItems() {
  return (
    <div className="flex gap-8">
        <NavbarItem {...{title: "Home"}} />            
        <NavbarItem {...{title: "Cars"}} />            
        <NavbarItem {...{title: "Services"}} />            
        <NavbarItem {...{title: "Contact us"}} />            
    </div>
  )
}

export default NavbarItems