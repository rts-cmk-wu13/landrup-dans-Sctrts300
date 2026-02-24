


export default async function Carusel() {
    const response = await fetch("http://localhost:4000/api/v1/testimonials")
    const testimonials = await response.json()

    console.log(testimonials)

    return (
        <>
            <h1>Det siger vores kunder om os</h1>
            <ul>
                {testimonials.map((testimonial) => (
                    <li 
                        className="testimonialcard"
                        key={testimonial.id}>
                            <section className="testimonialcard__content">
                                <p>{testimonial.content}</p>
                                <h2>{testimonial.name}</h2>
                                <p>{testimonial.occupation}</p>
                            </section>
                    </li>
                ))}
            </ul>
        </>
    )
}
