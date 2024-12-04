import Link from "next/link"

function NavbarItem({...props}) {
  return (
    <div className="font-bold hover:text-blue-600 transition-all duration-300">
        <Link href={"/"}>{props.title}</Link>
    </div>
  )
}

export default NavbarItem