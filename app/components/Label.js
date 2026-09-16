export default function Label({label,type,placeholder,...props}){
    return(
        <>
            <label htmlFor="" className="text-sm text-gray-400 block font-medium">{label}</label>
            <input {...props} type={type} className="p-2 border border-gray-300 rounded-xl w-full" placeholder={placeholder} />
        </>
    )
}