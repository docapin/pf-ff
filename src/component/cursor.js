//リンクにポインターを合わせた時に出てくるマウスストーカー
import React, { useEffect } from 'react'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.p-cursor')
    const target = document.querySelectorAll('a, button')
    const deviceJudge = navigator.userAgent
    if(!deviceJudge.match(/iPhone|iPad|Macintosh|Android/) && 'ontouchend' in document === false) {
      requestAnimationFrame(() => {
        document.onmousemove = (e) => {
          cursor.style.top = e.clientY + 'px'
          cursor.style.left = e.clientX + 'px'
        }
        target.forEach((e) => {
          e.onmouseover = () => {
            cursor.classList.add('is-hover')
          }
          e.onmouseout = () => {
            cursor.classList.remove('is-hover')
          }
        })
      })
    }
  }, [])
  return (
    <div className="p-cursor"/>
  )
}

export default Cursor