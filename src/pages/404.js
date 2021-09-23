import React from 'react'
import HeadTag from '../component/head'
import Header from '../component/header'
import Cursor from '../component/cursor'
import '../styles/style.scss'

// 404notfound
const NotFoundPage = () => {
  return (
    <main className="l-notfound">
      <HeadTag/>
      <Header noneScrollEvent={true}/>
      <section className="p-notfound">
        <h2 className="p-notfound__title">ページが見つかりません</h2>
        <p className="p-notfound__text">
          ご指定のページが見つかりませんでした。<br/>
          トップページにお戻りください。
        </p>
        <div className="p-notfound__link"><a href="/"><span className="c-arrow is-right is-main u-margin-right--s"></span>トップに戻る</a></div>
      </section>
      <Cursor/>
    </main>
  )
}

export default NotFoundPage
