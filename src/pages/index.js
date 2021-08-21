import React from 'react'
import HeadTag from '../component/head'
import Header from "../component/header"
import MainVisual from '../component/mainVisual'
import News from '../component/news'
import ContentMain from '../component/contentMain'
import ContentSub from '../component/contentSub'
import PageTop from '../component/pagetop'
import Footer from '../component/footer'
import Cursor from '../component/cursor'
import '../styles/style.scss'

const Index = () => {
  return(
    <div className="l-wrapper">
      <HeadTag/>
      <Header/>
      <main className="l-main">
        <MainVisual/>
        <News/>
        <ContentMain/>
        <ContentSub/>
      </main>
      <PageTop/>
      <Footer/>
      <Cursor/>
    </div>
  )
}

export default Index