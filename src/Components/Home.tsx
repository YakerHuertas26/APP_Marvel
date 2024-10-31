import { Carousel } from "../Elements/Carousel";


const Home = ():JSX.Element => {
    return (
        
        <div className="w-full h-screen flex items-center justify-center ">
            <main className=" h-[95vh]  rounded-lg   w-[90%] table:w-[60%] table:flex">

            <section className="h-1/2 rounded-lg flex justify-center relative bg-gradient-to-tr from-black from-60% to-slate-400 table:w-1/2 table:h-full">
                <Carousel/>
            </section>
            <section className="bg-black h-1/2 table:w-1/2 table:h-full text-white">
                <p>hello</p>
            </section>
            </main>
        </div> 
        
     );
}
 
export default Home;

