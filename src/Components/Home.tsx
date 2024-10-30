// crear los tipos 
interface Promps {
    endpoint:string
}


const Home = ({endpoint}:Promps):JSX.Element => {
    return ( 
        <p>soy HOME {endpoint} </p>
     );
}
 
export default Home;

