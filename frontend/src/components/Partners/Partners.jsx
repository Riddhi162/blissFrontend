import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import partnersData from '../../data/partnersData' // Adjust the import path as needed

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
  >
    <FaChevronRight className="w-6 h-6 text-white/70 group-hover:text-white" />
  </button>
)

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
  >
    <FaChevronLeft className="w-6 h-6 text-white/70 group-hover:text-white" />
  </button>
)

const Partners = () => {
  const [scrollY, setScrollY] = useState(0);

  // Combine all partners from different columns
  const allPartners = [
    ...partnersData.firstColumnPartners,
    ...partnersData.secondColumnPartners,
    ...partnersData.thirdColumnPartners
  ];

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.pageYOffset);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="relative py-20 overflow-hidden bg-[#1c2d37]">
      {/* Parallax Container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 w-full h-[200%]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: `translate3d(0, ${-scrollY * 0.5}px, 0)`,
            willChange: 'transform',
          }}
        />
        
        {/* Overlay Gradient */}
        <div 
          className="absolute inset-0"
        />

        {/* Additional Texture */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 10%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 20%)
            `,
            backgroundSize: '40px 40px, 80px 80px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl text-[#e5cb6b] text-center mb-12 relative">
          <span className="relative">
            Our Partners
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary-accent to-transparent"></div>
          </span>
        </h2>

        {/* Partners Slider */}
        <div className="mb-20">
          <Slider {...settings}>
            {allPartners.map((partner) => (
               <Link to={`/partner/${partner.id}`}
                className="px-4 block"
              >
                <div className="h-24 backdrop-blur-sm rounded-lg flex items-center justify-center p-4 
                  transition-all duration-300 group
                  hover:bg-white/10 
                  border border-white/10 hover:border-white/20
                  transform hover:scale-105 hover:shadow-lg hover:shadow-primary-accent/10"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter invert brightness-0"
                  />
                </div>
              </Link>
            ))}
          </Slider>
        </div>

        {/* Message Section */}
        <div className="text-center max-w-3xl mx-auto relative">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent to-primary-accent/50"></div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-[2px] bg-gradient-to-l from-transparent to-primary-accent/50"></div>
          <p className="text-2xl font-light text-white/90 italic">
            "Partnering with industry leaders to create
            <span className="block mt-2 font-normal text-[#e5cb6b]">
              exceptional digital experiences"
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Partners