//メインコンテンツ
import React from 'react'
import ShopList from './shoplist'

const ContentMain = () => {
  return (
    <section className="l-content">
      <ul className="p-content">
        <li className="p-content__list">
          <div className="p-content__title is-bg-concept">
            <h3 className="p-content__title-main">
              CONCEPT
            </h3>
          </div>
          <div className="c-row p-content__info">
            <div className="c-column__3--s p-content__title-sub">
              私達のこだわり
            </div>
            <div className="c-column__9--s">
              <p className="p-content__text">
              私達FOUNDING FOODグループのテーマは、「あたらしい『食』を見つけていく」。<br/>
              しかし単なる物珍しさだけを追求するわけではありません。<br/>
              常に守らなければならない「こだわり」がある。<br/>
              私達はその言葉を胸に、日々新しい「食」を追求しています。 
              </p>
              <button className="p-content__btn"><a href="/" className="p-content__btn-link">私達のこだわり<span className="c-arrow is-right u-margin-left--s"></span></a></button>
            </div>
          </div>
        </li>
        <li className="p-content__list">
          <div className="p-content__title is-bg-bland">
            <h3 className="p-content__title-main">
              BLANDS
            </h3>
          </div>
          <div className="c-row p-content__info">
            <div className="c-column__3--s p-content__title-sub">
              ブランド情報
            </div>
            <div className="c-column__9--s">
              <p className="p-content__text">
              FOUNDING FOODグループでは、料理のジャンルにとらわれず、様々なコンセプトを基に展開しています。<br/>
              けれども、食に対する「熱意」と「こだわり」は全て同じ。<br/>
              グループ各店舗で、自慢の「食」をお客様に提供いたします。 
              </p>
              <ShopList/>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default ContentMain