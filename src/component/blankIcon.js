//外部リンク用アイコン
import React from 'react'

const BlankIcon = ({addClassName}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" className={'c-blank-icon ' + addClassName}><path d="M12 1v8h-1v1h2V0H3v2h1V1h8"/><path d="M9 4v8H1V4h8m1-1H0v10h10V3z"/></svg>
  )
}

export default BlankIcon