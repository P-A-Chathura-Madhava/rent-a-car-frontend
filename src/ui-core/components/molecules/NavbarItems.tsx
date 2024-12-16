import NavbarItem from "../atoms/NavbarItem"

function NavbarItems() {
  return (
    <div className="flex gap-8">
        <NavbarItem {...{title: "Home", target: "home"}} />            
        <NavbarItem {...{title: "Steps", target: "steps"}} />           
        <NavbarItem {...{title: "About Us", target: "aboutus"}} />           
        <NavbarItem {...{title: "Cars", target: "cars"}} />            
        <NavbarItem {...{title: "Services", }} />            
        <NavbarItem {...{title: "Contact us"}} />            
    </div>
  )
}

export default NavbarItems