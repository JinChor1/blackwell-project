"use client"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { useEffect, useState } from "react"

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if(window.scrollY > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        if(isVisible){
            window.scrollTo({
                top: 0,
                behavior: "auto",
            })
        }
    }

  const scrollButtonClass = clsx(
    'fixed shadow-lg cursor-pointer bottom-4 right-4 rounded-full hover:scale-110 p-2 outline-none transition-all duration-300 bg-(--secondary-background) w-[50px] h-[50px]',
    {
       "opacity-100": isVisible,
       "opacity-0": !isVisible
    }
  );

  return (
    <button
      className={scrollButtonClass}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faChevronUp} color="white"/>
    </button>
  )
}

export default ScrollToTopButton