'use client';

import Image from "next/image";
import { useState } from "react";

interface HeadingProps {
  tag: keyof JSX.IntrinsicElements; // Ensures tag is a valid JSX element string
  multiplier: number;
  fontSize: number;
  children?: React.ReactNode; // Allows any valid React node(s)
}

function Heading({ tag, multiplier, fontSize, children }: HeadingProps) {
  const goldenRatio = 1.61803399;
  const Tag = tag as keyof JSX.IntrinsicElements; // Ensure tag is treated as a JSX element
  const size = fontSize * Math.pow(goldenRatio, multiplier);

  return (
    <Tag style={{ fontSize: `${size}px` }}>
      {children}
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
        {['h1', 'h2', 'h3'].map((tag: string, index) => (
            <Heading
              key={tag}
              tag={tag as keyof JSX.IntrinsicElements}
              multiplier={3 - index}
              fontSize={fontSize}
            >
              {`<${tag}> ${Number(fontSize * Math.pow(1.61803399, 3 - index)).toFixed(2)}px`}
            </Heading>
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
