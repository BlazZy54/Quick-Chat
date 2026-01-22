import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2">

      <div className="flex items-center px-4 h-11 w-80 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none placeholder-gray-300 text-sm"
        />
      </div>

  
      <button className="h-11 w-11 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition border border-black"
      >
        <FaSearch />
      </button>
    </div>
  )
}

export default SearchInput