import React from "react";

export default function About() {
  return (
    <div className="max-w-lg mx-auto mt-20 text-2xl">
      这是一个迷你博客网站，使用DummyJSON API。可供学习使用。源码：
      <a
        href="https://github.com/kkllooll/-clone"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:cursor-pointer underline hover:text-blue-400"
      >
        https://github.com/kkllooll/-clone
      </a>
    </div>
  );
}

