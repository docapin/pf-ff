//メインビジュアル
import React from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import smoothScroll from 'smoothscroll-polyfill'

const mvScrollNext = () => { //メインビジュアル下要素へのスムーズスクロール
  if(typeof window !== `undefined`){
    smoothScroll.polyfill()
    const mvScrollTarget = document.querySelector('.l-main-visual').nextElementSibling.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.l-header').offsetHeight
    window.scrollTo({
      top: mvScrollTarget,
      behavior: 'smooth'
    })
  }
}

const MainVisual = () => {
  const slideImages = [ //背景画像
    '/main_visual_01.jpg',
    '/main_visual_02.jpg',
    '/main_visual_03.jpg',
  ]
  const slideProp = { //背景スライドショー設定
    duration: 5000,
    arrows: false
  }
  
  return (
    <section className="l-main-visual">
      <div className="p-main-visual">
        <Fade {...slideProp} className="p-main-visual__bg-slide">
          {slideImages.map((value) => (
            <div className="p-main-visual__bg-slide-img" style={{'backgroundImage': `url(${value})`}}>
            </div>
          ))}
        </Fade>
        <div className="c-text-serif--noto p-main-visual__text">あたらしい「食」を<br/>
        見つけていく</div>
        <button className="p-main-visual__scroll-btn" onClick={mvScrollNext}>Scroll<span className="c-arrow is-down"></span></button>
      </div>
    </section>
  )
}

export default MainVisual