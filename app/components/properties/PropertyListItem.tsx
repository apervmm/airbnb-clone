
import Image from "next/image";

function PropertyListItem(){
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image 
                    fill
                    src="/house_1.avif"
                    alt="beach house"
                    sizes="(max-width: 768px) 768px , (max-width: 1200px) 768px, 760px"
                    className="hover:scale-110 object cover transition h-full w-full"
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">
                    Property Name
                </p>
            </div>


            <div className="mt-2">
                <p className="text-sm text-gray-700"><strong>$200 </strong> per night</p>
            </div>
        </div>
    );
}

export default PropertyListItem;