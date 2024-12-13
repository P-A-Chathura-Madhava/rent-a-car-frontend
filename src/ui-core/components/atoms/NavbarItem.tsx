import Link from "next/link"

function NavbarItem({...props}) {
  return (
    <div className="font-bold hover:text-blue-600 cursor-pointer">
        <a href={`#${props?.target}`}>{props.title}</a>
    </div>
  )
}

export default NavbarItem