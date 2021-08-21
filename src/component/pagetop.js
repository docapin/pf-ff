//トップに戻るボタン
import React, {useEffect} from 'react'
import smoothScroll from 'smoothscroll-polyfill'


if(typeof window !== `undefined`){
  smoothScroll.polyfill()
}
const returnTop = () => window.scrollTo({
  top: 0,
  behavior: 'smooth'
})

const PageTop = () => {
  useEffect(() => { //トップに戻るボタンの表示処理
    const targetHeight = window.innerHeight * 0.3
    const targetElement = document.querySelector('.p-pagetop')
    requestAnimationFrame(() => {
      document.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset
        if(scrollPosition > targetHeight){
          targetElement.classList.add('is-active')
        } else {
          targetElement.classList.remove('is-active')
        }
      })
    })
  }, [])
  
  return(
    <button aria-label="トップに戻る" className="p-pagetop" onClick={typeof window !== `undefined` ? returnTop : null}>
      <span className="c-arrow is-up p-pagetop__btn"/>
    </button>
  )
}

export default PageTop