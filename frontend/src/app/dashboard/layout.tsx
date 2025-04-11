"use client"
import Navbar from "@/components/Navbar";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <div className="w-full py-4 max-w-10/12 mx-auto">
        <Navbar/>
        {children}
    </div>
  );
}
















