/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    html,
    body,
    #theme-nobelium {
      background: #fbfaf7;
    }

    #theme-nobelium {
      color: #2f3437;
      font-family: "SF Pro Display", "PingFang SC", "Helvetica Neue", Arial, sans-serif;
      letter-spacing: -0.005em;
    }

    #theme-nobelium h1,
    #theme-nobelium h2,
    #theme-nobelium h3,
    #theme-nobelium .notion-h-title {
      font-family: "Iowan Old Style", "Songti SC", "Noto Serif SC", serif;
      letter-spacing: -0.025em;
      text-wrap: balance;
    }

    #theme-nobelium #notion-article {
      color: #34312d;
      font-size: 1.04rem;
      line-height: 1.82;
    }

    #theme-nobelium ::selection {
      color: #26231f;
      background: #e8dfcf;
    }

    .dark body,
    .dark #theme-nobelium {
      background: #151513;
    }

    .dark #theme-nobelium #notion-article {
      color: #dedbd5;
    }

    @media (prefers-reduced-motion: reduce) {
      #theme-nobelium *,
      #theme-nobelium *::before,
      #theme-nobelium *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }

      ${themeConsoleStyle('nobelium', CONFIG)}
  `}</style>
}

export { Style }
