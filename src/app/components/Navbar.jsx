"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import questionsData from '../assets/javascript.json'
import Image from "next/image";
import logo from "../../../public/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setIsOpen(!isOpen);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the questions based on the query
    if (query) {
      const filtered = questionsData.filter((item) =>
        item.question.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredQuestions(filtered);
    } else {
      setFilteredQuestions([]);
    }
  };

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50 min-h-[5vh]">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer hover:text-gray-400"
          onClick={() => router.push("/")} >
          <Image src={logo} width={80} height={80} alt="Creck Interview" />
        </div>

        {/* Links (Desktop) */}
        <nav className="hidden lg:flex space-x-8">
          <Link href={"/javascript"}  className="cursor-pointer hover:text-gray-400 transition" >
            JavaScript
          </Link>
          <Link href={"/react"} className="cursor-pointer hover:text-gray-400 transition" >
            React
          </Link>
          <Link href={"/"} className="cursor-pointer hover:text-gray-400 transition" >
            Services
          </Link>
        </nav>

        {/* Search Bar + Call-to-Action Button */}
        <div className="lg:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search..." onChange={handleSearchChange}
            />
            <Search className="absolute top-2.5 right-3 text-gray-400" />
          </div>
          {filteredQuestions.length > 0 && (
            <ul className="absolute bg-gray-700 text-white max-w-[400px] overflow-y-scroll max-h-[40vh] right-10 top-[60px] mt-2 rounded-lg shadow-lg">
              {filteredQuestions.map((item, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-600 cursor-pointer border-b-2 border-gray-600" >
                  {item.question}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden text-white p-4">
          <ul className="space-y-4 text-center">
            <li onClick={() => router.push("/")}>Home</li>
            <li onClick={() => router.push("/about")}>About</li>
            <li onClick={() => router.push("/services")}>Services</li>
            <li onClick={() => router.push("/blog")}>Blog</li>
            <li onClick={() => router.push("/contact")}>Contact</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
