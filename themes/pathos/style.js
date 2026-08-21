/* eslint-disable react/no-unknown-property */
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
import CONFIG from './config'

const Style = () => (
  <style jsx global>{`
    html,
    body,
    #theme-pathos {
      background: #eceff4;
    }

    #theme-pathos {
      --pathos-canvas: #eceff4;
      --pathos-header: rgba(229, 233, 240, 0.94);
      --pathos-panel: #e5e9f0;
      --pathos-panel-soft: #f4f6f8;
      --pathos-text: #2e3440;
      --pathos-muted: #5e6878;
      --pathos-border: #cbd2dc;
      --pathos-red: #a24f5a;
      --pathos-gold: #85651f;
      --pathos-blue: #39798d;
      min-height: 100vh;
      color: var(--pathos-text);
      background: var(--pathos-canvas);
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
      font-size: 16px;
      line-height: 1.65;
      letter-spacing: 0.005em;
    }

    .dark body,
    .dark #theme-pathos {
      background: #2e3440;
    }

    .dark #theme-pathos {
      --pathos-canvas: #2e3440;
      --pathos-header: rgba(59, 66, 82, 0.95);
      --pathos-panel: #3b4252;
      --pathos-panel-soft: #343b49;
      --pathos-text: #eceff4;
      --pathos-muted: #b6bfce;
      --pathos-border: #4c566a;
      --pathos-red: #bf616a;
      --pathos-gold: #ebcb8b;
      --pathos-blue: #88c0d0;
    }

    #theme-pathos a {
      color: inherit;
    }

    #theme-pathos ::selection {
      color: #2e3440;
      background: #ebcb8b;
    }

    #theme-pathos .pathos-header {
      background: var(--pathos-header);
      border-bottom: 1px solid
        color-mix(in srgb, var(--pathos-border) 65%, transparent);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
    }

    #theme-pathos .pathos-brand,
    #theme-pathos .pathos-accent-red {
      color: var(--pathos-red);
    }

    #theme-pathos .pathos-accent-gold {
      color: var(--pathos-gold);
    }

    #theme-pathos .pathos-accent-blue {
      color: var(--pathos-blue);
    }

    #theme-pathos .pathos-muted {
      color: var(--pathos-muted);
    }

    #theme-pathos .pathos-panel {
      background: var(--pathos-panel);
      border: 1px solid var(--pathos-border);
      border-radius: 4px;
    }

    #theme-pathos .pathos-divider {
      border-color: var(--pathos-border);
    }

    #theme-pathos .pathos-table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;
      overflow: hidden;
      border: 1px solid var(--pathos-border);
      border-radius: 4px;
    }

    #theme-pathos .pathos-table th,
    #theme-pathos .pathos-table td {
      padding: 0.36rem 0.55rem;
      line-height: 1.35;
      vertical-align: top;
      border-right: 1px solid var(--pathos-border);
      border-bottom: 1px solid var(--pathos-border);
      overflow-wrap: anywhere;
    }

    #theme-pathos .pathos-table th:last-child,
    #theme-pathos .pathos-table td:last-child {
      border-right: 0;
    }

    #theme-pathos .pathos-table tr:last-child td {
      border-bottom: 0;
    }

    #theme-pathos .pathos-table thead,
    #theme-pathos .pathos-table tbody tr:nth-child(even) {
      background: var(--pathos-panel);
    }

    #theme-pathos .pathos-table tbody tr:nth-child(odd) {
      background: var(--pathos-panel-soft);
    }

    #theme-pathos .pathos-table tbody tr {
      transition: background-color 160ms ease;
    }

    #theme-pathos .pathos-table tbody tr:hover {
      background: color-mix(
        in srgb,
        var(--pathos-blue) 14%,
        var(--pathos-panel)
      );
    }

    #theme-pathos .pathos-table a {
      color: var(--pathos-blue);
      text-decoration: none;
      text-underline-offset: 0.2em;
    }

    #theme-pathos .pathos-table a:hover {
      text-decoration: underline;
    }

    #theme-pathos .pathos-mode-button {
      color: var(--pathos-muted);
    }

    #theme-pathos .pathos-mode-button:hover {
      color: var(--pathos-red);
    }

    #theme-pathos #article-wrapper #notion-article {
      color: var(--pathos-text);
      font-size: 1.02rem;
      line-height: 1.82;
    }

    #theme-pathos #article-wrapper #notion-article a {
      color: var(--pathos-blue);
      text-decoration-color: color-mix(
        in srgb,
        var(--pathos-blue) 55%,
        transparent
      );
      text-underline-offset: 0.2em;
    }

    #theme-pathos #article-wrapper .notion-quote,
    #theme-pathos #article-wrapper .notion-callout {
      background: var(--pathos-panel);
      border-color: var(--pathos-border);
    }

    #theme-pathos #article-wrapper .notion-bookmark {
      border-color: var(--pathos-border);
    }

    #theme-pathos #article-wrapper pre,
    #theme-pathos #article-wrapper code {
      background: var(--pathos-panel);
    }

    #theme-pathos #article-wrapper h1,
    #theme-pathos #article-wrapper h2,
    #theme-pathos #article-wrapper h3 {
      color: var(--pathos-gold);
      letter-spacing: -0.015em;
    }

    @media (max-width: 640px) {
      #theme-pathos .pathos-table th,
      #theme-pathos .pathos-table td {
        padding: 0.42rem 0.5rem;
        font-size: 0.84rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #theme-pathos *,
      #theme-pathos *::before,
      #theme-pathos *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    ${themeConsoleStyle('pathos', CONFIG)}
  `}</style>
)

export { Style }
