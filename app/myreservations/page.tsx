import Image from "next/image";

function MyReservationsPage(){
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 mb-6 text-2xl">
                My Reservations
            </h1>

            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden rounded-xl aspect-square">
                            <Image
                                fill
                                src="/house_1.avif"
                                alt="Reservation Property Image"
                                className="object-cover transition hover:scale-110 h-full w-full"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">
                            Property Name
                        </h2>

                        <p className="mb-2"><strong>Check in:</strong> 2/14/2025</p>
                        <p className="mb-2"><strong>Check out:</strong> 2/18/2025</p>

                        <p className="mb-2"><strong>Number of Nights:</strong> 4</p>
                        <p className="mb-2"><strong>Total:</strong> $800</p>

                        <div className="mt-6 cursor-pointer inline-block py-4 px-6 bg-rose-400 text-white rounded-xl">
                            Go To Property
                        </div>
                    </div>
                </div>



                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden rounded-xl aspect-square">
                            <Image
                                fill
                                src="/house_1.avif"
                                alt="Reservation Property Image"
                                className="object-cover transition hover:scale-110 h-full w-full"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">
                            Property Name
                        </h2>

                        <p className="mb-2"><strong>Check in:</strong> 2/14/2025</p>
                        <p className="mb-2"><strong>Check out:</strong> 2/18/2025</p>

                        <p className="mb-2"><strong>Number of Nights:</strong> 4</p>
                        <p className="mb-2"><strong>Total:</strong> $800</p>

                        <div className="mt-6 cursor-pointer inline-block py-4 px-6 bg-rose-400 text-white rounded-xl">
                            Go To Property
                        </div>
                    </div>
                </div>


            </div>
        </main>
    );
}
export default MyReservationsPage;