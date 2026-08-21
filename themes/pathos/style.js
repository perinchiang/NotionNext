/* eslint-disable react/no-unknown-property */
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
import CONFIG from './config'

/**
 * NotionNext adaptation of the Digital Garden layout and Obsidian Nord 0.2.0.
 * Source: https://github.com/oleeskild/digitalgarden
 * Theme: https://github.com/insanum/obsidian_nord
 */
const Style = () => (
  <style jsx global>{`
    html,
    body,
    #theme-pathos {
      background: #eceff4;
    }

    #theme-pathos {
      --nord0: #2e3440;
      --nord1: #3b4252;
      --nord2: #434c5e;
      --nord3: #4c566a;
      --nord4: #d8dee9;
      --nord5: #e5e9f0;
      --nord6: #eceff4;
      --nord7: #8fbcbb;
      --nord8: #88c0d0;
      --nord9: #81a1c1;
      --nord10: #5e81ac;
      --nord11: #bf616a;
      --nord12: #d08770;
      --nord13: #ebcb8b;
      --nord14: #a3be8c;
      --nord15: #b48ead;

      --pathos-canvas: var(--nord6);
      --pathos-header: var(--nord5);
      --pathos-panel: var(--nord4);
      --pathos-panel-alt: var(--nord5);
      --pathos-text: var(--nord0);
      --pathos-muted: var(--nord2);
      --pathos-faint: var(--nord3);
      --pathos-border: var(--nord4);
      --pathos-heading-red: var(--nord11);
      --pathos-heading-yellow: #745a20;
      --pathos-heading-green: #54713f;
      --pathos-heading-purple: #765d72;
      --pathos-link: #9a4e3e;
      --pathos-link-hover: var(--nord10);
      --pathos-code: var(--nord8);
      --pathos-code-background: var(--nord6);
      --pathos-table-head: var(--nord4);
      --pathos-table-even: var(--nord5);
      --pathos-table-odd: var(--nord6);
      --pathos-table-hover: var(--nord9);
      min-height: 100vh;
      color: var(--pathos-text) !important;
      background: var(--pathos-canvas);
      font-family:
        ui-sans-serif,
        -apple-system,
        BlinkMacSystemFont,
        system-ui,
        'Segoe UI',
        Roboto,
        Inter,
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        sans-serif;
      font-size: 18px;
      line-height: 1.5;
    }

    .dark html,
    .dark body,
    .dark #theme-pathos {
      background: var(--nord0);
    }

    .dark #theme-pathos {
      --pathos-canvas: var(--nord0);
      --pathos-header: var(--nord1);
      --pathos-panel: var(--nord1);
      --pathos-panel-alt: var(--nord2);
      --pathos-text: var(--nord6);
      --pathos-muted: var(--nord5);
      --pathos-faint: var(--nord4);
      --pathos-border: var(--nord2);
      --pathos-heading-red: var(--nord11);
      --pathos-heading-yellow: var(--nord13);
      --pathos-heading-green: var(--nord14);
      --pathos-heading-purple: var(--nord15);
      --pathos-link: var(--nord12);
      --pathos-link-hover: var(--nord9);
      --pathos-code: var(--nord8);
      --pathos-code-background: var(--nord1);
      --pathos-table-head: hsl(220, 16%, 16%);
      --pathos-table-even: hsl(220, 16%, 20%);
      --pathos-table-odd: hsl(220, 16%, 24%);
      --pathos-table-hover: var(--nord3);
    }

    #theme-pathos a {
      color: inherit;
    }

    #theme-pathos ::selection {
      color: var(--nord0);
      background: rgba(191, 97, 106, 0.6);
    }

    #theme-pathos .pathos-header {
      height: 55.8839px !important;
      background: var(--pathos-header);
    }

    #theme-pathos .pathos-navbar-inner {
      padding: 0 32px;
    }

    #theme-pathos .pathos-brand {
      color: var(--pathos-link);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: normal;
    }

    #theme-pathos .pathos-accent-red {
      color: var(--pathos-heading-red);
    }

    #theme-pathos .pathos-accent-gold {
      color: var(--pathos-heading-yellow);
    }

    #theme-pathos .pathos-accent-green {
      color: var(--pathos-heading-green);
    }

    #theme-pathos .pathos-accent-purple {
      color: var(--pathos-heading-purple);
    }

    #theme-pathos .pathos-accent-link {
      color: var(--pathos-link);
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

    #theme-pathos .pathos-home {
      padding: 182px 0 60px;
    }

    #theme-pathos .pathos-page-lead,
    #theme-pathos .pathos-article {
      padding-top: 182px;
    }

    #theme-pathos .pathos-page-lead {
      padding-bottom: 20px;
    }

    #theme-pathos .pathos-home-title {
      margin: 16px 0;
      font-size: 29.124px;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.015em;
    }

    #theme-pathos .pathos-section-title {
      margin: 16px 0;
      font-size: 26.316px;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -0.011em;
    }

    #theme-pathos .pathos-hr {
      height: 2px;
      margin: 32px 0;
      border: 0;
      border-top: 2px solid var(--pathos-border);
    }

    #theme-pathos .pathos-callout {
      --pathos-callout-color: 158, 158, 158;
      overflow: hidden;
      margin: 16px 0;
      padding: 12px 12px 12px 24px;
      border: 0;
      border-radius: 4px;
      background: rgba(var(--pathos-callout-color), 0.1);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }

    #theme-pathos .pathos-callout[data-tone='info'] {
      --pathos-callout-color: 94, 129, 172;
    }

    #theme-pathos .pathos-callout[data-tone='tip'] {
      --pathos-callout-color: 136, 192, 208;
    }

    #theme-pathos .pathos-callout-title {
      margin: 0;
      color: rgb(var(--pathos-callout-color));
      font-size: 16px;
      font-weight: 600;
      line-height: 1.3;
    }

    #theme-pathos .pathos-callout[data-tone] .pathos-callout-title {
      font-weight: 400;
      line-height: 24px;
    }

    #theme-pathos .pathos-callout-content {
      margin: 0;
    }

    #theme-pathos .pathos-callout-content p {
      margin: 16px 0;
    }

    #theme-pathos .pathos-table {
      width: 100%;
      overflow: hidden;
      margin: 16px 0;
      border: 1px solid var(--pathos-panel);
      border-collapse: collapse;
      table-layout: fixed;
    }

    #theme-pathos .pathos-table-wrap {
      display: flow-root;
    }

    #theme-pathos .pathos-col-title {
      width: 78.7%;
    }

    #theme-pathos .pathos-col-date {
      width: 21.3%;
    }

    #theme-pathos .pathos-table th:first-child,
    #theme-pathos .pathos-table td:first-child {
      width: 78.7%;
    }

    #theme-pathos .pathos-table th:last-child,
    #theme-pathos .pathos-table td:last-child {
      width: 21.3%;
    }

    #theme-pathos .pathos-table th,
    #theme-pathos .pathos-table td {
      padding: 4px 8px;
      vertical-align: top;
      border-right: 1px solid var(--pathos-panel);
      border-bottom: 1px solid var(--pathos-panel);
      overflow-wrap: anywhere;
    }

    #theme-pathos .pathos-table th {
      font-size: 21.6px;
      font-weight: 600;
      line-height: 1.3;
    }

    #theme-pathos .pathos-table td,
    #theme-pathos .pathos-table td a {
      font-size: 16px;
      line-height: 1.3;
    }

    #theme-pathos .pathos-table th:last-child,
    #theme-pathos .pathos-table td:last-child {
      border-right: 0;
    }

    #theme-pathos .pathos-table tr:last-child td {
      border-bottom: 0;
    }

    #theme-pathos .pathos-table thead {
      background: var(--pathos-table-head);
    }

    #theme-pathos .pathos-table tbody tr:nth-child(even) {
      background: var(--pathos-table-even);
    }

    #theme-pathos .pathos-table tbody tr:nth-child(odd) {
      background: var(--pathos-table-odd);
    }

    #theme-pathos .pathos-table tbody tr:hover {
      background: var(--pathos-table-hover);
    }

    #theme-pathos .pathos-table a,
    #theme-pathos .pathos-content-link {
      color: var(--pathos-link);
      font-weight: 600;
      text-decoration: none;
      text-underline-offset: 0.2em;
    }

    #theme-pathos .pathos-table a:hover,
    #theme-pathos .pathos-content-link:hover {
      color: var(--pathos-link-hover);
      text-decoration: underline;
    }

    #theme-pathos .pathos-mode-button {
      color: var(--pathos-muted);
    }

    #theme-pathos .pathos-mode-button:hover,
    #theme-pathos .pathos-mode-button:focus-visible {
      color: var(--pathos-heading-red);
    }

    #theme-pathos a:focus-visible,
    #theme-pathos button:focus-visible {
      outline: 2px solid var(--nord9);
      outline-offset: 3px;
    }

    #theme-pathos #article-wrapper #notion-article {
      color: var(--pathos-text);
      font-size: 1rem;
      line-height: 1.5;
    }

    #theme-pathos #article-wrapper #notion-article .notion,
    #theme-pathos #article-wrapper #notion-article .notion-page,
    #theme-pathos #article-wrapper #notion-article .notion-page-content,
    #theme-pathos #article-wrapper #notion-article .notion-text {
      color: var(--pathos-text) !important;
      background: transparent;
    }

    #theme-pathos #article-wrapper #notion-article a {
      color: var(--pathos-link);
      text-decoration: none;
      text-underline-offset: 0.2em;
    }

    #theme-pathos #article-wrapper #notion-article a:hover {
      color: var(--pathos-link-hover);
      text-decoration: underline;
    }

    #theme-pathos #article-wrapper h1 {
      color: var(--pathos-heading-red) !important;
    }

    #theme-pathos #article-wrapper h2 {
      color: var(--pathos-heading-yellow) !important;
    }

    #theme-pathos #article-wrapper h3 {
      color: var(--pathos-heading-green) !important;
    }

    #theme-pathos #article-wrapper h4 {
      color: var(--pathos-heading-purple) !important;
    }

    #theme-pathos #article-wrapper h5 {
      color: var(--nord7) !important;
    }

    #theme-pathos #article-wrapper h6 {
      color: var(--nord9) !important;
    }

    #theme-pathos #article-wrapper h1,
    #theme-pathos #article-wrapper h2,
    #theme-pathos #article-wrapper h3,
    #theme-pathos #article-wrapper h4,
    #theme-pathos #article-wrapper h5,
    #theme-pathos #article-wrapper h6 {
      letter-spacing: -0.015em;
    }

    #theme-pathos #article-wrapper .notion-quote,
    #theme-pathos #article-wrapper blockquote {
      margin: 1.5em 0;
      padding: 0.5em 0.85em;
      border-left: 10px solid #c1dbe3;
      background: rgba(255, 255, 255, 0.09);
    }

    #theme-pathos #article-wrapper .notion-callout {
      border: 0;
      border-radius: 4px;
      background: var(--pathos-panel);
    }

    #theme-pathos #article-wrapper .notion-bookmark {
      border-color: var(--pathos-border);
    }

    #theme-pathos #article-wrapper pre,
    #theme-pathos #article-wrapper code {
      color: var(--pathos-code);
      background: var(--pathos-code-background);
    }

    #theme-pathos #article-wrapper mark {
      color: var(--nord0);
      background: var(--nord13);
    }

    #theme-pathos #article-wrapper table {
      width: 100%;
      border: 1px solid var(--pathos-panel);
      border-collapse: collapse;
    }

    #theme-pathos #article-wrapper th,
    #theme-pathos #article-wrapper td {
      border: 1px solid var(--pathos-panel);
    }

    #theme-pathos #article-wrapper thead {
      background: var(--pathos-table-head);
    }

    #theme-pathos #article-wrapper tbody tr:nth-child(even) {
      background: var(--pathos-table-even);
    }

    #theme-pathos #article-wrapper tbody tr:nth-child(odd) {
      background: var(--pathos-table-odd);
    }

    #theme-pathos #article-wrapper tbody tr:hover {
      background: var(--pathos-table-hover);
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

    #theme-pathos {
      color: var(--pathos-text);
      background: var(--pathos-canvas);
    }

    .dark #theme-pathos {
      background: var(--pathos-canvas);
    }
  `}</style>
)

export { Style }
