"use client"
import HeaderComponent from "@/components/header.component";
import React, {ReactNode} from "react";
import FooterComponent from "@/components/footer.component";

interface Props {
    children: ReactNode
}
export default function Skeleton({children}: Props) {

    return (
        <div className="min-h-screen mx-auto text-gray-700" style={{backgroundColor: '#FEFEFF'}}>
            <HeaderComponent/>
            <main className="px-64 ">
                {children}
            </main>
            <FooterComponent/>
        </div>
    );
}
