"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
 
//navn
//dag
export default function SearchBar() {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()
    const query = searchParams.get("query")
 
    console.log(query);
 
 
    const handleChange = (e) => {
        router.push(`${pathName}?query=${e.target.value}`)
 
    }
 
    return (
        <form className="SearchForm">
            <input className="Searchinput" onChange={handleChange} type="search" name="query" />
            <button className="Searchbtn" type="submit"><IoSearch  className=" w-8 h-8 text-white" /></button>
        </form>
    )
}
