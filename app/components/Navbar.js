export default function Navbar(){
    const link = [
        {label:'Home',link:'#home'},
        {label:'About',link:'#about'},
        {label:'Portofolio',link:'#portofolio'},
        {label: 'Contact', link:'#contact'}
    ]
    return(
        <> 
            <header className="mt-4 border mx-auto bg-white border-gray-200 shadow-sm py-2 rounded-xl z-20  text-black  flex items-center w-full justify-between container px-8 overflow-x-auto text-nowrap flex-nowrap [&::-webkit-scrollbar]:hidden sticky top-0 z-40">
                <div className="">
                    <h1 className="text-xl font-bold">Koding<span className="text-cyan-400">Medwin</span></h1>
                </div>
                <nav>
                    <ul className="flex gap-10 items-center justify-center">
                        {link.map((nav,index)=>(
                            <li className="hover:text-cyan-600 transition font-semibold font-sans" key={index}><a href={nav.link}>{nav.label}</a></li>
                        ))}
                    </ul> 
                </nav>
                <div>
                    <button className="h-10 p-4 flex hover:bg-cyan-600 transition hover:cursor-pointer items-center text-center bg-cyan-600/80 font-medium text-sm  text-white rounded-xl">Hire Me</button>
                </div>
            </header>
        </>
    )
}