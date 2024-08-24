import { RxHamburgerMenu } from "react-icons/rx";;

const Navigation = () => {
    return (
        <nav className="flex justify-between ">
            <ul className="flex items-center">
                <li><a className=" text-gray-500  py-2 px-7 border-[1px]" href="/">About</a></li>
                <li><a className=" text-gray-500  py-2 px-7 border-y-[1px] " href="/">Skills</a></li>
                <li><a className=" text-gray-500  py-2 px-7 border-[1px]" href="/">Contacts</a></li>
            </ul>
            <div className=" border-[1px] p-2 cursor-pointer hover:rotate-45 transition-all duration-500">
                <RxHamburgerMenu color='gray' size={25} />
            </div>
        </nav>
    )
}

export default Navigation;