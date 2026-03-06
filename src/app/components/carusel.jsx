"use client"
import { useState, useEffect } from "react"
import { IoChevronForwardCircleOutline, IoChevronBackCircleOutline  } from "react-icons/io5";

export default function Carusel() {
    const [testimonials, setTestimonials] = useState([])
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:4000/api/v1/testimonials")
            const data = await response.json()
            setTestimonials(data)
        }

        fetchData()
    }, [])

    function nextSlide() {
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }

    function prevSlide() {
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        )
    }

    if (testimonials.length === 0) return <p>Loading...</p>

    return (
        <div className="carousel">
            <div className="testimonialcard">
                <h1>Det siger vores kunder om os</h1>
                <section className="">
                    <p className="text-center">{testimonials[current].content}</p>
                    <h2 className="text-center">{testimonials[current].name}</h2>
                    <p className="text-center">{testimonials[current].occupation}</p>
                </section>
            </div>
            <div className="flex justify-center">
            <div className="slidebtn" onClick={prevSlide}><IoChevronBackCircleOutline className="w-15 h-15 text-white"/></div>
            <div className="slidebtn" onClick={nextSlide}><IoChevronForwardCircleOutline className="w-15 h-15 text-white"/></div>
            </div>

        </div>
    )
}

