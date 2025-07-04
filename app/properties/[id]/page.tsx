
import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";

function PropertyDetailPage(){
    return(
        <main className="max-w-[1500px] mx-auto px-6">
            <div className="w-full h-[64vh] overflow-hidden mb-4 rounded-xl relative pb-6">
                <Image
                    fill
                    src="/house_1.avif"
                    alt="Property Image"
                    className="object-cover transition hover:scale-110"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">
                        Property Name
                    </h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 Guests -2 Bedrooms - 1 Bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/pug.png"
                            alt="Profile"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />

                        <p><strong>Landord </strong>bla bla</p>
                    </div>


                    <hr />

                    <p className="mt-6 text-lg">
                        sjhdahskdjalsdb a dsaj diasjld hajkshd ajkhsks hjkahD JKHASjkd asASDKJ asdhiaHSJH as
                    </p>

                </div>

                <ReservationSideBar />
            </div>
        </main>
    )
}

export default PropertyDetailPage;