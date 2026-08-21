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
      --pathos-code-block-background: var(--nord1);
      --pathos-code-block-text: #f8f8f2;
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
      --pathos-code-block-background: var(--nord1);
      --pathos-code-block-text: #f8f8f2;
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
      padding: 0 20px 0 32px;
    }

    #theme-pathos .pathos-brand {
      margin: 15px;
      color: var(--pathos-heading-red);
      font-size: 25.888px;
      font-weight: 700;
      line-height: 1;
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

    #theme-pathos .pathos-article {
      padding-bottom: 60px;
    }

    #theme-pathos .pathos-article-title {
      margin: 16px 0;
      color: var(--pathos-heading-red);
      font-size: 29.124px;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.015em;
      overflow-wrap: anywhere;
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
      overflow: visible;
      font-size: 18px;
      line-height: 27px;
    }

    #theme-pathos #article-wrapper #notion-article .notion,
    #theme-pathos #article-wrapper #notion-article .notion-page,
    #theme-pathos #article-wrapper #notion-article .notion-page-content,
    #theme-pathos #article-wrapper #notion-article .notion-page-content-inner {
      color: var(--pathos-text) !important;
      background: transparent;
    }

    #theme-pathos #article-wrapper #notion-article .notion,
    #theme-pathos #article-wrapper #notion-article .notion-page,
    #theme-pathos #article-wrapper #notion-article .notion-page-content,
    #theme-pathos #article-wrapper #notion-article .notion-page-content-inner {
      width: 100%;
      max-width: none;
      margin: 0 !important;
      padding: 0 !important;
    }

    #theme-pathos #article-wrapper #notion-article .notion-page-content-inner {
      align-items: flex-start;
    }

    #theme-pathos #article-wrapper #notion-article .notion-title,
    #theme-pathos #article-wrapper #notion-article .notion-page-cover,
    #theme-pathos #article-wrapper #notion-article .notion-page-icon-wrapper,
    #theme-pathos
      #article-wrapper
      #notion-article
      .notion-collection-page-properties {
      display: none !important;
    }

    #theme-pathos #article-wrapper #notion-article .notion-text {
      width: 100%;
      margin: 0 0 16px !important;
      padding: 0 !important;
      color: var(--pathos-text) !important;
      background: transparent;
      font-size: 18px;
      line-height: 27px;
      white-space: pre-wrap;
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

    #theme-pathos #article-wrapper .notion-h1,
    #theme-pathos #article-wrapper h1 {
      color: var(--pathos-heading-red) !important;
      font-size: 29.124px;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.015em;
    }

    #theme-pathos #article-wrapper .notion-h2,
    #theme-pathos #article-wrapper h2 {
      color: var(--pathos-heading-yellow) !important;
      font-size: 26.316px;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -0.011em;
    }

    #theme-pathos #article-wrapper .notion-h3,
    #theme-pathos #article-wrapper h3 {
      color: var(--pathos-heading-green) !important;
      font-size: 23.724px;
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -0.008em;
    }

    #theme-pathos #article-wrapper .notion-h4,
    #theme-pathos #article-wrapper h4 {
      color: var(--pathos-heading-purple) !important;
      font-size: 21.384px;
      font-weight: 600;
      line-height: 1.4;
      letter-spacing: -0.005em;
    }

    #theme-pathos #article-wrapper h5 {
      color: var(--nord7) !important;
      font-size: 19.584px;
      font-weight: 600;
      line-height: 1.5;
    }

    #theme-pathos #article-wrapper h6 {
      color: var(--nord9) !important;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.5;
    }

    #theme-pathos #article-wrapper .notion-h,
    #theme-pathos #article-wrapper h1,
    #theme-pathos #article-wrapper h2,
    #theme-pathos #article-wrapper h3,
    #theme-pathos #article-wrapper h4,
    #theme-pathos #article-wrapper h5,
    #theme-pathos #article-wrapper h6 {
      width: 100%;
      max-width: 100%;
      margin: 24px 0 16px;
      padding: 0;
      overflow-wrap: anywhere;
    }

    #theme-pathos
      #article-wrapper
      .notion-page-content-inner
      > .notion-h:first-child,
    #theme-pathos #article-wrapper .notion-h + .notion-h {
      margin-top: 0;
    }

    #theme-pathos #article-wrapper strong,
    #theme-pathos #article-wrapper b {
      color: var(--pathos-heading-yellow);
      font-weight: 600;
    }

    #theme-pathos #article-wrapper em,
    #theme-pathos #article-wrapper i {
      color: var(--pathos-heading-green);
    }

    #theme-pathos #article-wrapper .notion-quote,
    #theme-pathos #article-wrapper blockquote {
      width: 100%;
      margin: 2px 0 18px !important;
      padding: 0 0 0 24px !important;
      border: 0 !important;
      border-left: 2px solid var(--pathos-heading-red) !important;
      border-radius: 0 !important;
      color: var(--pathos-text) !important;
      background: transparent !important;
      font-size: 18px;
      line-height: 27px;
    }

    #theme-pathos #article-wrapper .notion-callout {
      margin: 0 0 16px;
      padding: 12px 12px 12px 24px;
      border: 0;
      border-radius: 4px;
      background: rgba(94, 129, 172, 0.1);
      background: color-mix(in srgb, var(--nord9) 10%, transparent);
      font-size: 16px;
      line-height: 24px;
    }

    #theme-pathos #article-wrapper .notion-bookmark {
      border-color: var(--pathos-border);
    }

    #theme-pathos #article-wrapper .notion-inline-code,
    #theme-pathos #article-wrapper :not(pre) > code {
      color: var(--pathos-code);
      background: var(--pathos-code-background);
      padding: 0.15em 0.3em;
      border: 0;
      border-radius: 4px;
      font-family:
        ui-monospace, SFMono-Regular, 'Cascadia Mono', 'Roboto Mono',
        'DejaVu Sans Mono', 'Liberation Mono', Menlo, Monaco, Consolas,
        'Source Code Pro', monospace;
      font-size: 15.75px;
      line-height: 23.625px;
    }

    #theme-pathos #article-wrapper .code-toolbar {
      width: 100%;
      margin: 0;
    }

    #theme-pathos #article-wrapper .pre-mac,
    #theme-pathos #article-wrapper .code-toolbar > .toolbar,
    #theme-pathos #article-wrapper .collapse-header-row {
      display: none !important;
    }

    #theme-pathos #article-wrapper .collapse-wrapper {
      width: 100%;
      margin: 0 0 16px;
      padding: 0 !important;
    }

    #theme-pathos #article-wrapper .collapse-panel-wrapper,
    #theme-pathos #article-wrapper .collapse-panel {
      width: 100%;
      max-height: none !important;
      overflow: visible !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      backdrop-filter: none !important;
      transition: none !important;
    }

    #theme-pathos #article-wrapper pre,
    #theme-pathos #article-wrapper .notion-code,
    #theme-pathos #article-wrapper .code-toolbar > pre {
      width: 100%;
      margin: 9px 0 !important;
      padding: 12px 16px !important;
      overflow-x: auto;
      border: 0 !important;
      border-radius: 4px !important;
      color: var(--pathos-code-block-text) !important;
      background: var(--pathos-code-block-background) !important;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 18px !important;
      line-height: 23.4px !important;
      tab-size: 2;
    }

    #theme-pathos #article-wrapper pre code,
    #theme-pathos #article-wrapper .notion-code code {
      padding: 0 !important;
      color: var(--pathos-code) !important;
      background: transparent !important;
      font-family:
        ui-monospace, SFMono-Regular, 'Cascadia Mono', 'Roboto Mono',
        'DejaVu Sans Mono', 'Liberation Mono', Menlo, Monaco, Consolas,
        'Source Code Pro', monospace !important;
      font-size: 15.75px !important;
      font-weight: 400;
      line-height: 20.475px !important;
    }

    #theme-pathos #article-wrapper .notion-list {
      width: 100%;
      margin: 0 0 16px;
      padding: 0;
      font-size: 18px;
      line-height: 27px;
    }

    #theme-pathos #article-wrapper .notion-list-disc,
    #theme-pathos #article-wrapper .notion-list-numbered {
      margin: 0;
      padding-inline-start: 1.76em;
    }

    #theme-pathos #article-wrapper .notion-list li {
      padding: 1.35px 0;
    }

    #theme-pathos #article-wrapper mark {
      color: var(--nord0);
      background: var(--nord13);
    }

    #theme-pathos #article-wrapper table,
    #theme-pathos #article-wrapper .notion-simple-table {
      display: inline-table !important;
      align-self: flex-start;
      width: auto !important;
      max-width: 100%;
      margin: 0 0 16px;
      overflow: visible !important;
      border: 1px solid var(--pathos-panel) !important;
      border-collapse: collapse;
      color: var(--pathos-text);
      background: transparent;
      font-size: 16px;
      line-height: 1.3;
    }

    #theme-pathos #article-wrapper th,
    #theme-pathos #article-wrapper td,
    #theme-pathos #article-wrapper .notion-simple-table-cell {
      padding: 4px 8px;
      border: 1px solid var(--pathos-panel);
      white-space: break-spaces;
    }

    #theme-pathos #article-wrapper th {
      font-weight: 600;
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

    #theme-pathos #article-wrapper .notion-asset-wrapper {
      width: 100%;
      margin: 0 0 16px;
    }

    #theme-pathos #article-wrapper .notion-asset-wrapper img {
      max-width: 100%;
      height: auto;
      border-radius: 0;
    }

    #theme-pathos #article-wrapper hr {
      height: 2px;
      margin: 16px 0 32px;
      border: 0;
      border-top: 2px solid var(--pathos-border);
    }

    @media (max-width: 800px) {
      #theme-pathos .pathos-brand {
        font-size: 18px;
      }

      #theme-pathos .pathos-article {
        padding-top: 167px;
      }
    }

    @media (max-width: 640px) {
      #theme-pathos #article-wrapper .notion-simple-table {
        display: block !important;
        width: 100% !important;
        overflow-x: auto !important;
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
