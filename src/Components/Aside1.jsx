function Aside1() {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">

            {/*Section-1*/}

            <div className="bg-[#f5f5f7] text-black text-center p-8">

                <h1 className="text-5xl font-bold">Using them together sets them apart.</h1>
                <p className="text-3xl mt-6">Apple devices work together so seamlessly, it almost feels like magic.</p>

                <div className="flex justify-center gap-5 mt-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer"> Learn More</button>
                </div>

                <div className="flex justify-center mt-6">
                    <img src="/Images/Image-1.png" alt="airpods" className="max-h-72 object-contain" />
                </div>

            </div>

            {/*Section-2*/}

            <div className="bg-black text-white text-center p-8">

                <h1 className="text-5xl font-bold">iPad Pro</h1>
                <p className="text-3xl mt-6">Advanced AI performance and game-changing capabilities.</p>
                
                <div className="flex justify-center gap-5 mt-6">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer"> Learn More</button>
                    <button className="px-6 py-2 bg-black/80 text-[#0071e3] border border-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-all duration-300"> Buy</button>
                </div>

                <div className="flex justify-center mt-6">
                    <img src="/Images/Image-2.png" alt="Apple Watch" className="max-h-72 object-contain" />
                </div>

            </div>

        </div>

    )
}

export default Aside1;