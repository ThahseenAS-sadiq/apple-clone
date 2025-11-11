function Hero1() {
    return (

        <section className="bg-black text-white flex flex-col items-center justify-center overflow-hidden p-0 cursor-pointer">

            <div className="mt-10 text-center">
                <h1 className="font-apple text-6xl font-semibold">iPhone 17 Pro</h1>
                <h3 className="text-2xl md:text-3xl mt-2 font-normal">All out Pro.</h3>
            </div>

            <div className="flex justify-center gap-6 mt-6">
                <button className="px-6 py-2 bg-[#015fbc] text-white rounded-full hover:bg-[#0071e3] transition">
                    Learn more
                </button>
                <button className="px-6 py-2 bg-black/80 text-[#0071e3] border border-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-all duration-300">
                    Buy
                </button>
            </div>

            <div className="flex justify-center bg-black overflow-hidden h-[350px]">
                <img
                    src="/Images/Header 1.jpg"
                    alt="iphone17pro"
                    className="w-full max-w-[900px] h-[550px] object-cover object-top scale-110"
                />
            </div>

        </section>

    );
}

export default Hero1;