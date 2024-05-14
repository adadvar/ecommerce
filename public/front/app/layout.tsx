import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
    title: "فروشگاه طلا و جواهرات",
    description: "فروشگاه طلا و جواهرات",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="rtl" data-theme="light">
            <body className="h-screen">
                <main className="">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
