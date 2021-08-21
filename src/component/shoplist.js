//ブランド情報セクションのスライダー
import React from 'react'
import BlankIcon from '../component/blankIcon'
import { Slide } from 'react-slideshow-image'

const ShopList = () => {
  const slideData = {
    'ステーキハウス MOO' : {
      thumbnail: '/brand_moo.jpg',
      link: '/'
    },
    'Cafe SHIKI' : {
      thumbnail: '/brand_shiki.jpg',
      link: '/'
    },
    '和らぁめん 柊木' : {
      thumbnail: '/brand_hiiragi.jpg',
      link: '/'
    },
  }
  
  const slideProps = {
    autoplay: false,
    indicators: true,
    transitionDuration: 400,
    slidesToShow: 1,
    prevArrow: <button className="p-shoplist__slider-arrow is-prev" aria-label="前のスライド"><span className="c-arrow is-left"></span></button>,
    nextArrow: <button className="p-shoplist__slider-arrow is-next" aria-label="次のスライド"><span className="c-arrow is-right"></span></button>
  }

  return (
    <div className="p-shoplist">
      <Slide {...slideProps} className="p-shoplist__slider">
        {Object.keys(slideData).map((key) => (
          <div className="p-shoplist__slider-list">
            <a href={slideData[key].link}>
              <div className="p-shoplist__slider-thumbnail">
                <img src={slideData[key].thumbnail} alt={key}/>
              </div>
              <div className="p-shoplist__slider-name"><span className="p-shoplist__slider-hoverline">{key}<BlankIcon addClassName="u-margin-left--s"/></span></div>
            </a>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default ShopList