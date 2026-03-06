"use client";
import { useState   } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
 

export default function SearchBar() {

    const searchParams = useSearchParams()
    const query = searchParams.get("query")
    const [searchTerm, setSearchTerm] = useState(query || "");

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
 
    return (
        <form className="SearchForm">
            <input className="Searchinput" onChange={handleChange} value={searchTerm} type="search" name="query" />
            <button className="Searchbtn" type="submit"><IoSearch  className=" w-8 h-8 text-white" /></button>
        </form>
    )
}
