// crear los tipos 
interface Promps {
    endpoint:string
}


const Home = ({}:Promps):JSX.Element => {
    return (
        <div className="font-poppins w-full h-screen flex items-center" >
            <main className="movil:w-[90%] bg-slate-400 h-[94vh] mx-auto rounded-lg p-3 md:w-1/2" >
            <section>
                <p>hola</p>
            </section>
            <section>
                <p>hello</p>
            </section>
            </main>
        </div> 
     );
}
 
export default Home;

