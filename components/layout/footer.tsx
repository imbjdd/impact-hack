import { Mail, MapPin, Twitter, Linkedin, Github, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-2 bg-gradient-to-b from-white to-[#FFFCE8]/30">
      <div className="container flex h-12 items-center justify-between">
        <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#DD403A] to-[#FF7A45]">
          Impact Hackathon
        </h3>

        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-400 hover:text-[#DD403A] transition-all duration-300">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#DD403A] transition-all duration-300">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#DD403A] transition-all duration-300">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#DD403A] transition-all duration-300">
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-400">
          <a href="#" className="hover:text-[#DD403A] transition-colors">Privacy</a>
          <span className="text-gray-200">•</span>
          <a href="#" className="hover:text-[#DD403A] transition-colors">Terms</a>
          <span className="text-gray-200">•</span>
          <a href="#" className="hover:text-[#DD403A] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
} 