import LogoImage from "../atoms/LogoImage"
import NavbarItems from "../molecules/NavbarItems"

function Navbar() {
  return (
    <div className="h-[60px] bg-slate-100 w-full flex items-center justify-between px-20">
        <LogoImage />
        <NavbarItems />
    </div>
  )
}

export default Navbar