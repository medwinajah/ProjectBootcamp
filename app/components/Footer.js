export default function Footer(){
     const link = [
        {label:'Home',link:'#home'},
        {label:'Keseruan Program',link:'#keseruanprogram'},
        {label:'Portofolio',link:'#portofolio'},
        {label: 'Contact', link:'#contact'}
    ]
    return(
        <>
        <div className="grid grid-cols-2 gap-10 px-25  mt-5 bg-linear-to-br from-cyan-500 via-sky-600 to-white justify-items-center pt-8">
            <div className="flex flex-col gap-2 flex-wrap justify-center">
                <h1 className="text-3xl font-extrabold"><span className="text-white">Koding</span><span className="text-cyan-400">Medwin</span></h1>
                <p className="font-semibold text-gray-200 tracking-wide">Menyalurkan keseruan dalam program yang membangun dan mengarhakan masa depan pertemuan 5 hari Event Online - DSF 54.0 FWD, FE, BE{" "}
              <span className="font-bold p-1 border border-gray-300 rounded-xl">
                Dibimbing
              </span></p>
            </div>
            <div>
            <ul className="flex flex-col gap-2 font-medium text-gray-800">
                {link.map((links,index)=>(
                    <li className="text-white" key={index}>
                        <a href={links.link}>{links.label}</a>
                    </li>
                ))}
            </ul>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}