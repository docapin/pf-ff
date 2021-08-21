//最新情報セクション
import * as React from 'react'

const News = () => {
  return (
    <section className="l-news">
      <div className="p-news">
        <h2 className="p-news__title">NEWS</h2>
        <div className="p-news__title-sub">最新情報</div>
        <ul className="p-news__list">
          <li>
            <a href="/" className="p-news__list-link">
              <div className="p-news__list-info">
                2021年07月10日
                <span className="p-news__list-info-label is-important">重要なお知らせ</span>
              </div>
              <p className="p-news__list-title"><span className="p-news__list-title-line">緊急事態宣言に伴う各店舗の営業状況に関するお知らせ</span></p>
            </a>
          </li>
          <li>
            <a href="/" className="p-news__list-link">
              <div className="p-news__list-info">
                2021年07月05日
                <span className="p-news__list-info-label is-news">お知らせ</span>
              </div>
              <p className="p-news__list-title"><span className="p-news__list-title-line">Cafe SHIKI 池袋東口店オープン！</span></p>
            </a>
          </li>
          <li>
            <a href="/" className="p-news__list-link">
              <div className="p-news__list-info">
                2021年06月25日
                <span className="p-news__list-info-label is-news">お知らせ</span>
              </div>
              <p className="p-news__list-title"><span className="p-news__list-title-line">宝鳥社「TOKYO GOURMET WALK」8月号に「Cafe SHIKI」が掲載されました！</span></p>
            </a>
          </li>
        </ul>
        <div className="p-news__archive"><a href="/" className="p-news__archive-link"><span className="c-arrow is-right is-main u-margin-right--s"></span>記事一覧へ</a></div>
      </div>
    </section>
  )
}

export default News