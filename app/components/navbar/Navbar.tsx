import Link from "next/link";
import Image from "next/image";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";

function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 py-2 border-b bg-white z-10 text-stone-900">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image 
                            src="/logo.svg"
                            alt="Logo"
                            width={55}
                            height={55}
                        />
                    </Link>


                    <div className="flex space-x-6">
                        <SearchFilters />
                    </div>

                    <div className="flex items-center space-x-6">
                        <AddPropertyButton />

                        <UserNav />
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;