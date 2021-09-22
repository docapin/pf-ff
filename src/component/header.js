//ヘッダー
import React, { useEffect, useState } from 'react'
import CompanyLogo from './companyLogo'

const Header = () => {
  //ハンバーガーメニューの開閉処理
  const [judgeClick, setClass] = useState(false)
  const toggleclass = () => {
    setClass(!judgeClick)
  }
  
  //スクロール時の背景処理
  const [heightJudge, setHeightJudge] = useState(false)
  useEffect(() => {
    const scrollAction = () => {
      const headerHeight = document.querySelector('.l-header')
      if( headerHeight.clientHeight < window.scrollY ){
        setHeightJudge(true)
      } else {
        setHeightJudge(false)
      }
    }
    
    requestAnimationFrame(() => {
      window.addEventListener('scroll', scrollAction, { passive: true })
    })
    
    scrollAction()
  }, [])
  
  return (
    <header className={'l-header' + (heightJudge ? ' is-scroll' : '') + (judgeClick ? ' is-active' : '')}>
      <ul className={'p-header' + (heightJudge ? ' is-scroll' : '') + (judgeClick ? ' is-active' : '')}>
        <li className="p-header__logo">
          <a href="/"><CompanyLogo/></a>
          <button aria-label="メニュー開閉ボタン" className="p-header__menu-btn" onClick={toggleclass}>
            <span className="p-header__menu-btn-line"></span>
            <span className="p-header__menu-btn-line"></span>
          </button>
        </li>
        <li>
          <ul className="p-header__list">
            <li className="p-header__list-link"><a href="/"><span className="c-arrow is-right u-margin-right--s"></span>私達のこだわり</a></li>
            <li className="p-header__list-link"><a href="/"><span className="c-arrow is-right u-margin-right--s"></span>ブランド情報</a></li>
            <li className="p-header__list-link"><a href="/"><span className="c-arrow is-right u-margin-right--s"></span>求人情報</a></li>
            <li className="p-header__list-link"><a href="/"><span className="c-arrow is-right u-margin-right--s"></span>会社概要</a></li>
          </ul>
        </li>
      </ul>
      
    </header>
  )
}

export default Header