import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const NewsBlog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // smooth animation
      once: true,     // animate only once
    });
  }, []);
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "FINANCE",
      title: "Competently parallel task fully researched data and",
      date: "20 Oct, 2021",
      comments: 2
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "BUSINESS",
      title: "Strategic planning and execution for growth",
      date: "18 Oct, 2021",
      comments: 5
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "STRATEGY",
      title: "Innovation and digital transformation insights",
      date: "15 Oct, 2021",
      comments: 3
    }
    ,{
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "STRATEGY",
      title: "Innovation and digital transformation insights",
      date: "15 Oct, 2021",
      comments: 3
    }
  ];

  return (
    <section className="py-20 bg-[#a4b5ba]">
      <div className=" mx-16 sm:px-6 lg:pl-8 ">
        <div className="text-start mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(28,45,55)] mb-4">
            News & Articles
          </h2>
          <p className="text-xl text-[rgb(28,45,55)] max-w-2xl ">
            Stay updated with the latest insights and industry trends
          </p>
          <p className="text-xl text-[rgb(28,45,55)] max-w-2xl">
            latest insights and industry trends
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 " data-aos="fade-up">
          {blogPosts.map((post, index) => (
            <div key={index} className=" rounded-3xl overflow-hidden group transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-3xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-3xl"
                />
                {/* Plus Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <span className="text-white text-4xl font-light">+</span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-6 pb-6">
                {/* Category */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-[#e5cb6b]/20 text-[rgb(28,45,55)] rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[rgb(28,45,55)] mb-4  transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-300 mb-4"></div>

                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-700 space-x-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    {post.comments} Comments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsBlog 