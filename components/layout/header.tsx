import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 z-50 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <span className="font-bold text-xl text-white">IH</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            Impact Hackathons
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="hover:bg-gray-50 transition-colors"
          >
            Login
          </Button>
          <Button 
            className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:opacity-90 transition-opacity"
          >
            Join
          </Button>
        </div>
      </div>
    </header>
  );
} 