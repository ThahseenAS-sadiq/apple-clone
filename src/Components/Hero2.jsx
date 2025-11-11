function Hero2() {

    return (

        <section className="bg-[#F5F5F7] text-black flex flex-col items-center justify-center overflow-hidden pt-12 mt-3 cursor-pointer">

            <div className="mt-1 text-center">
                <h1 className="font-apple text-6xl font-semibold">iPhone Air</h1>
                <h3 className="text-2xl md:text-3xl mt-2 font-normal">The thinnest phone ever.</h3>
                <h3 className="text-2xl md:text-3xl font-normal">With the power of pro inside.</h3>
            </div>

            <div className="flex justify-center gap-6 mt-5"> {/* Reduced mt-4 to mt-3 */}
                <button className="px-5 py-1.5 bg-[#0071e3] text-white text-lg rounded-full hover:bg-[#0071e3]/80 transition">
                    Learn more
                </button>
                <button className="px-5 py-1.5 bg-white/80 text-[#0071e3] border border-[#0071e3] text-lg rounded-full hover:bg-[#0071e3] hover:text-white transition-all duration-300">
                    Buy
                </button>
            </div>

            <div className="w-full h-[400px] bg-[#F5F5F7] flex justify-end items-center -mb-16">
                <img
                    src="/Images/Header 2.png"
                    alt="iPhone 17"
                    className="w-auto object-cover h-[580px]"
                />
            </div>
            
        </section>

    );
}

export default Hero2;