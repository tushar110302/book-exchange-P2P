"use client"
import Navbar from "@/components/Navbar";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <div className="py-4 w-11/12 mx-auto">
        <Navbar/>
        {children}
    </div>
  );
}
















