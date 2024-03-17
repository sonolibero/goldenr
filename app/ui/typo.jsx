'use client'

import { useState } from 'react'

function Heading({ tag, multiplier, fontSize }) {
  const goldenRatio = 1.61803399;
  const Tag = tag;
  const size = fontSize * Math.pow(goldenRatio, multiplier);

  return (
    <Tag style={{ fontSize: `${size}px`, lineHeight: `${size}px` }}>
      {`<${tag}> ${size.toFixed(2)}px`}
    </Tag>
  );
}

function Typo() {
  const [fontSize, setFontSize] = useState(15);

  return (
    <>
      <main>
        {['h1', 'h2', 'h3'].map((tag, index) => (
          <Heading
            key={tag}
            tag={tag}
            multiplier={3 - index}
            fontSize={fontSize}
          />
        ))}
        <p style={{ fontSize: `${fontSize}px` }}>
        {`<p> ${fontSize}px`}</p>
        <input
          type='range'
          min='5'
          max='30'
          value={fontSize}
          onChange={(event) => setFontSize(event.target.value)}/>
      </main>
    </>
  )
}

export default Typo