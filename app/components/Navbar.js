export default function Navbar(){
    const link = [
        {label:'Home',link:'#home'},
        {label:'Keseruan Program',link:'#keseruanprogram'},
        {label:'Portofolio',link:'#portofolio'},
        {label: 'Contact', link:'#contact'}
    ]
    return(
        <> 
            <header className="mt-5 py-2 mx-auto backdrop-blur-xl border-cyan-400 bg-linear-to-br from-cyan-500 via-sky-600 to-white mb-2 rounded-3xl text-black  flex items-center w-full justify-between container px-8 overflow-x-auto text-nowrap flex-nowrap [&::-webkit-scrollbar]:hidden sticky top-0 z-40">
                <div className="">
                    <h1 className="text-2xl font-extrabold text-white">Koding<span className="text-cyan-400">Medwin</span></h1>
                </div>
                <nav>
                    <ul className="flex gap-10 items-center justify-center">
                        {link.map((nav,index)=>(
                            <li className="hover:text-cyan-800 transition font-semibold text-gray-100 font-sans tracking-wide" key={index}><a href={nav.link}>{nav.label}</a></li>
                        ))}
                    </ul> 
                </nav>
                <div>
                    <button className="h-10 p-4 flex hover:bg-cyan-600 transition hover:cursor-pointer items-center text-center bg-cyan-500/80 font-semibold tracking-wide text-gray-200 text-sm rounded-full">Hire Me</button>
                </div>
            </header>
        </>
    )
}