import Label from "./Label";

export default function Contact(){
    return(
        <>

            <form className="mt-20 container mx-auto px-100 p-4 mb-5">
                <p className="mb-4 font-semibold tracking-wide p-1 mx-auto  rounded-xl border-dotted w-fit">Form Pertanyaan</p>
                <div className="flex flex-col gap-4">
                <div className="mb-5">
                    <Label label="Name" type="text" placeholder="input your name here"/>
                </div>
                <div className="mb-4">
                    <Label label="Email" type="email" placeholder="example@gmail.com"/>
                </div>
                </div>
            </form>
        </>
    )
}