'use client';

import Image from "next/image";
import { useState } from "react";

function Heading({ tag, multiplier, fontSize }: { tag: string, multiplier: number, fontSize: number }) {
  const goldenRatio = 1.61803399;
  const Tag = tag;
  const size = fontSize * Math.pow(goldenRatio, multiplier);

  return (
    <Tag style={{ fontSize: `${size}px` }}>
      {`<${tag}> ${size.toFixed(2)}px`}
    </Tag>
  );
}

export default function Home() {
  const [fontSize, setFontSize] = useState(15);

  return (
    <div className="parent">
      <header>
        <Image src="/logo.svg" alt="logo"
            width={50}
            height={50}
            priority={true}/>
      </header>
      <div className="left-side"></div>
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
            onChange={(event) => setFontSize(Number(event.target.value))}/>
      </main>
      <div className="right-side section yellow"></div>
      <footer>
        <div>a project by <a href="https://sonolibero.io" target="_blank">libero</a></div>
        <div>© 2092</div>
      </footer>
    </div>
  );
}
