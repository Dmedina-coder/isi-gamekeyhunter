import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: '"A terrific piece of praise"',
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2c1e5ac97f67dbdb00c8cefb6e5a407743c143c5271613002e8e86a71d0a78ae?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      name: "Name",
      description: "Description",
    },
    {
      quote: '"A fantastic bit of feedback"',
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/103e662c9586973b3ca785a28b4f2bcd0aa4a70edb49f687d0b3d318a554dd1d?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      name: "Name",
      description: "Description",
    },
    {
      quote: '"A genuinely glowing review"',
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cb4d0d8b8bc294305d7f9e3708cd136cd11aef5ecd1ee50309c2c0a4c6ef4443?placeholderIfAbsent=true&apiKey=f682e8de3cb14cc19333c5fafcca59c5",
      name: "Name",
      description: "Description",
    },
  ];

  return (
    <section className="flex flex-wrap gap-8 self-center mt-8 w-full max-w-screen-xl font-medium max-md:max-w-full">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          quote={testimonial.quote}
          avatarSrc={testimonial.avatarSrc}
          name={testimonial.name}
          description={testimonial.description}
        />
      ))}
    </section>
  );
};

export default TestimonialSection;
