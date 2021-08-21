//headタグ
import React from 'react'
import Helmet from 'react-helmet'

const HeadTag = () => {
  return (
    <Helmet>
      <html lang="ja"></html>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta name="description" content="あたらしい「食」を見つけていく。株式会社FOUNDING FOODの公式サイトです。"/>
      <meta name="robots" content="noindex,nofollow"/>
      <meta property="og:title" content="株式会社FOUNDING FOOD　公式サイト"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://images.microcms-assets.io/assets/fa555f14a9bd469f8f80923c600d943e/696fb365f859411792181d7b954f2631/pf_ff_ogp_image.jpg"/>
      <meta property="og:url" content="https://pf-ff-2021.web.app/"/>
      <meta property="og:description" content="あたらしい“食”を見つけていく。株式会社FOUNDING FOODの公式サイトです。"/>
      <meta property="og:local" content="ja_JP"/>
      <meta property="og:site_name" content="株式会社FOUNDING FOOD　公式サイト"/>
      <title>株式会社FOUNDING FOODグループ</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Noto+Serif+JP:wght@900&display=swap&text=あたらしい「食」を見つけてくNEWSCONCEPTBLAD" rel="stylesheet"/>
      <link rel="preload" as="image" href="/main_visual_01.jpg"/>
      <link rel="icon" href="/logo_favicon.svg" type="image/svg+xml"/>
    </Helmet>
  )
}

export default HeadTag