import { Footer } from '../components/global/Footer';
import { Header } from '../components/global/Header';
import { Intro } from '../components/global/Intro';
import { Sidebar } from '../components/global/sidebar/Sidebar';
export function HomePage(){
        return(
                <>
                        <Header/>
                        <Sidebar/>
                        <Intro/>
                        <Footer/>
                </>
        )
}