import { Carousel } from "../Elements/Carousel";


const Home = ():JSX.Element => {
    return (
        
        <div className="font-poppins w-full h-screen flex items-center" >
            <main className="movil:w-[90%] bg-slate-400 h-[94vh] mx-auto rounded-lg p-3 md:w-1/3 tablet:m-1/2" >

            <section className="h-1/2 bg-slate-100 rounded-lg">
                <Carousel/>
            </section>
            <section>
                <p>hello</p>
            </section>
            </main>
        </div> 
        
     );
}
 
export default Home;

