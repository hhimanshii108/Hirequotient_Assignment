import React, { useState, useEffect } from 'react';
// import './TestimonialSlider.css'; // Add your CSS for styling here

const testimonialsData = [
  { id: 1, name: 'John Doe', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'Jane Smith', content: 'Vestibulum at eros.' },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (testimonialsData.length - 2)); // Slide every 3 testimonials
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider">
      {testimonialsData.slice(index, index + 3).map((testimonial) => (
        <div key={testimonial.id} className="testimonial">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
