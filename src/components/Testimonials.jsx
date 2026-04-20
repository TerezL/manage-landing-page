import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Anisha Li",
    text: "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    img: "/assets/avatar-anisha.png",
  },
  {
    id: 2,
    name: "Ali Bravo",
    text: "We have been able to cancel so many other subscribtions since using Mange. There is no more cross-channel confusion and everyone is much more focused.",
    img: "/assets/avatar-ali.png",
  },
  {
    id: 3,
    name: "Richard Watts",
    text: "Manage allows us to provide structure and process. It keeps us organised and focused. i can't stop recommending them to everyone I talk to.",
    img: "/assets/avatar-richard.png",
  },
  {
    id: 4,
    name: "Shanai Gough",
    text: "Their software allows us to track, manage and collaborate on our projects from anywhere. it keeps the whole team in-sync without being intrusive.",
    img: "/assets/avatar-shanai.png",
  },
];

  function Testimonials() {
    const [index, setIndex] = useState(0)
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [page, setPage] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(true);

const extended = [...testimonials, ...testimonials];
const itemsPerPage = 3;
const total = extended.length;

useEffect(() => {
  const interval = setInterval(() => {
    setPage((prev) => prev + 1);
  }, 3000);

  return () => clearInterval(interval);
}, []);


  const totalPages = Math.ceil(testimonials.length / 3);


  // 👉 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
        setPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);


  const nextSlide = () => {
    setIndex((prev) => (prev + 1 ) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  // 👉 SWIPE
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) nextSlide();     // swipe left
    if (diff < -50) prevSlide();    // swipe right
  };

  return (
    <section className="my-2 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">
        What they've said
      </h2>

   
      {/* MOBILE */}
<div
  className="md:hidden overflow-hidden w-full pt-10"
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
  <div
    className="flex transition-transform duration-500"
    style={{
      transform: `translateX(-${index * 100}%)`,
    }}
  >
    {testimonials.map((t) => (
      <div key={t.id} className="w-full flex-shrink-0 px-6">
        <div className="bg-gray-100 p-6 pt-12 rounded-lg relative">
          <img
            src={t.img}
            alt={t.name}
            className="w-16 h-16 rounded-full absolute -top-8 left-1/2 -translate-x-1/2"
          />
          <h3 className="font-bold mt-4">{t.name}</h3>
          <p className="text-gray-500 text-sm mt-3">{t.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* DESKTOP */}
<div className="hidden md:block overflow-hidden w-full group marquee">
  <div className="flex w-max animate-scroll">
    {[...testimonials, ...testimonials].map((t, i) => (
      <div key={i} className="w-[500px] flex-shrink-0 p-10">
        <div className="bg-gray-100 pt-12 p-10 rounded-lg relative">
          <img
            src={t.img}
            alt={t.name}
            className="w-16 h-16 rounded-full absolute -top-8 left-1/2 -translate-x-1/2"
          />
          <h3 className="font-bold mt-4">{t.name}</h3>
          <p className="text-gray-500 text-md mt-3">
            "{t.text}"
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
              
            

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full border border-orange-400 ${
              index === i ? "bg-orange-400" : ""
            }`}
          />
        ))}
      </div>

      {/* BUTTON */}
      <button className="bg-orange-400 px-6 py-3 my-5 rounded-full text-white shadow-lg shadow-orange-400/50 cursor-pointer hover:bg-orange-300">
        Get Started
      </button>
     
    </section>
  );
}

export default Testimonials;