//フッター
import React from 'react'
import BlankIcon from '../component/blankIcon'

const Footer = () => {
  return(
    <footer className="l-footer">
      <div className="p-footer">
        <ul className="p-footer__link">
          <li>
            <ul className="p-footer__link-list">
              <li><a href="/"><span className="c-arrow is-right"></span>店舗情報</a></li>
              <li><a href="/">ステーキハウス MOO<BlankIcon addClassName="u-margin-left--xs"/></a></li>
              <li><a href="/">Cafe SHIKI<BlankIcon addClassName="u-margin-left--xs"/></a></li>
              <li><a href="/">和らぁめん 柊木<BlankIcon addClassName="u-margin-left--xs"/></a></li>
            </ul>
          </li>
          <li>
            <ul className="p-footer__link-list">
              <li className=" is-first"><a href="/"><span className="c-arrow is-right"></span>私達のこだわり</a></li>
            </ul>
          </li>
          <li>
            <ul className="p-footer__link-list">
              <li className=" is-first"><a href="/"><span className="c-arrow is-right"></span>採用情報</a></li>
              <li><a href="/">新卒・中途採用</a></li>
              <li><a href="/">アルバイト採用</a></li>
            </ul>
          </li>
          <li>
            <ul className="p-footer__link-list">
              <li className=" is-first"><a href="/"><span className="c-arrow is-right"></span>会社情報</a></li>
              <li><a href="/">トップメッセージ</a></li>
              <li><a href="/">企業理念</a></li>
              <li><a href="/">会社概要</a></li>
            </ul>
          </li>
          <li>
            <ul className="p-footer__link-list">
              <li className=" is-first"><a href="/"><span className="c-arrow is-right"></span>お問い合わせ</a></li>
            </ul>
          </li>
        </ul>
        <div className="p-footer__bottom">
          <div className="p-footer__bottom-container">
            <div className="p-footer__bottom-link"><a href="/"><span className="c-arrow is-right is-white"></span><span className="u-margin-left--s">サイトマップ</span></a></div>
            <div className="p-footer__bottom-link"><a href="/"><span className="c-arrow is-right is-white"></span><span className="u-margin-left--s">プライバシーポリシー</span></a></div>
            <div className="p-footer__bottom-copy">&copy; Founding Food Group All rights resived.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer