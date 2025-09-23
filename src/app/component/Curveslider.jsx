"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaChevronLeft,
  FaChevronRight,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

const Curveslider = ({ images }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const videoRefs = useRef([]);

  const toggleMute = () => setIsMuted(!isMuted);

  const handleVolumeChange = (e, idx) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRefs.current[idx]) {
      videoRefs.current[idx].volume = newVol;
      videoRefs.current[idx].muted = newVol === 0;
    }
    if (newVol > 0) setIsMuted(false);
  };

  const handleSlideChange = (swiper) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === swiper.realIndex) {
        video.play();
      } else {
        video.pause();
      }
    });
  };

  return (
    <>
      <h2 className="text-center py-10 text-3xl italic ">The Reputation I’ve <span className="font-bold">Built</span> Told Through Their Voices</h2>
      <div className="relative flex justify-center items-center ">

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={"auto"}
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: { slidesPerView: 1 }, // small phones
            640: { slidesPerView: 1.3 }, // big phones
            768: { slidesPerView: 2 }, // tablets
            1024: { slidesPerView: 3 }, // laptops
          }}
          className="mySwiper max-w-[1200px]"
        >
          {images.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="flex justify-center items-center relative transition-all duration-500"
            >
              {/* Frame 9:16 ratio */}
              <div className="w-[180px] h-[320px] sm:w-[220px] sm:h-[390px] md:w-[260px] md:h-[460px] lg:w-[300px] lg:h-[533px] flex justify-center items-center rounded-xl overflow-hidden shadow-xl bg-black">
                {item.type === "video" ? (
                  <div className="relative w-full h-full flex justify-center items-center">
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      muted={isMuted}
                      volume={volume}
                      loop
                      playsInline
                      className="max-h-[95%] max-w-[95%] object-contain"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>

                    {/* Controls */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-3 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <button
                        onClick={toggleMute}
                        className="text-white hover:scale-110 transition"
                      >
                        {isMuted || volume === 0 ? (
                          <FaVolumeMute size={18} />
                        ) : (
                          <FaVolumeUp size={18} />
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        onChange={(e) => handleVolumeChange(e, idx)}
                        className="w-16 md:w-20 accent-white cursor-pointer"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={`slide-${idx}`}
                    className="max-h-[95%] max-w-[95%] object-contain"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="swiper-button-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white text-black rounded-full shadow-lg hover:bg-black hover:text-white transition">
          <FaChevronLeft size={18} />
        </button>
        <button className="swiper-button-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white text-black rounded-full shadow-lg hover:bg-black hover:text-white transition">
          <FaChevronRight size={18} />
        </button>

        {/* Blur + Scale Effect */}
        <style jsx global>{`
        .swiper-slide {
          filter: blur(6px) brightness(0.7);
          transform: scale(0.85);
          transition: all 0.4s ease-in-out;
        }
        .swiper-slide-active {
          filter: blur(0px) brightness(1);
          transform: scale(1);
          z-index: 20;
        }
      `}</style>
      </div>
    </>

  );
};

export default Curveslider;
