//フッター上のリンク
import React from 'react'

const ContentSub = () => {
  return(
    <section className="l-content-sub">
      <div className="c-row p-content-sub">
        <div className="c-column__12 p-content-sub__list">
          <a href="/" className="p-content-sub__link is-l is-recruit">
            <div className="p-content-sub__title-main">RECRUIT</div>
            <div className="p-content-sub__title-sub">採用情報</div>
          </a>
        </div>
        <div className="c-column__6--xs p-content-sub__list">
        <a href="/" className="p-content-sub__link is-company">
            <div className="p-content-sub__title-main">COMPANY</div>
            <div className="p-content-sub__title-sub">会社情報</div>
          </a>
        </div>
        <div className="c-column__6--xs p-content-sub__list">
        <a href="/" className="p-content-sub__link is-contact">
            <div className="p-content-sub__title-main">CONTACT</div>
            <div className="p-content-sub__title-sub">お問い合わせ</div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContentSub