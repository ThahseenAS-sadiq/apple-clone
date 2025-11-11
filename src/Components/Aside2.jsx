function Aside2() {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">

            {/*Section-3*/}

            <div className="bg-[#f5f5f7] text-black text-center p-8">

                <h1 className="text-5xl font-bold">WATCH SERIES 11</h1>
                <p className="text-3xl mt-6">The ultimate watch for a healthy life.</p>

                <div className="flex justify-center gap-5 mt-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer"> Learn More</button>
                    <button className="px-6 py-2 text-[#0071e3] border border-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition"> Buy</button>
                </div>

                <div className="flex justify-center mt-6">
                    <img src="/Images/Image-3.png" alt="airpods" className="max-h-72 object-contain" />
                </div>

            </div>

            {/*Section-4*/}

            <div className="bg-[#f5f5f7] text-black text-center p-8">

                <h1 className="text-5xl font-bold">AirPods Pro 3</h1>
                <p className="text-3xl mt-6">The world's best in-ear Active Noise Cancellation.</p>

                <div className="flex justify-center gap-5 mt-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer"> Learn More</button>
                    <button className="px-6 py-2 text-[#0071e3] border border-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition"> Buy</button>
                </div>

                <div className="flex justify-center mt-6">
                    <img src="./Images/Image-4.png" alt="airpods" className="max-h-72 object-contain" />
                </div>

            </div>

        </div>

    )
}

export default Aside2;