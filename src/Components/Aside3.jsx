function Aside3() {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">

             {/*Section-5*/}

            <div className="bg-[#DCEDF7] text-black text-center p-8">

                <h1 className="text-5xl font-bold">MacBook Air</h1>
                <p className="text-3xl mt-6">Sky blue colour.</p>
                <p className="text-3xl mt-3">Sky high performance with M4.</p>

                <div className="flex justify-center gap-5 mt-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer"> Learn More</button>
                    <button className="px-6 py-2 bg-[#DCEDF7] text-[#0071e3] border border-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition"> Buy</button>
                </div>

                <div className="flex justify-center mt-6">
                    <img src="./Images/Image-5.png" alt="airpods" className="max-h-72 object-contain" />
                </div>

            </div>

             {/*Section-6*/}

            <div className="bg-[#f5f5f7] text-black text-center p-8">

                <h1 className="text-5xl font-bold">Trade In</h1>
                <p className="text-3xl mt-6">Upgrade and Save.</p>
                <p className="text-3xl mt-3">It's that easy.</p>

                <div className="flex justify-center gap-5 mt-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer">Get Your Estimate</button>
                </div>

                <div className="flex justify-center mt-6">
                    <img src="./Images/Image-6.png" alt="airpods" className="max-h-72 object-contain" />
                </div>

            </div>

        </div>
    )
}

export default Aside3;