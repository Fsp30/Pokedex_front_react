import type { ReactNode } from "react";
import { Footer } from "../../components/global/Footer";
import { Header } from "../../components/global/Header";
import { Sidebar } from "../../components/global/sidebar/Sidebar";


interface DefaultLayoutProps {
        children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
        return (
                <>
                        <Header />
                        <Sidebar />
                        <main>
                                {children}
                        </main>
                        <Footer />
                </>
        );
}