import DarkModeButton from '@/components/DarkModeButton'
import NotionPage from '@/components/NotionPage'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { isBrowser } from '@/lib/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ArticleLock } from '../nobelium/components/ArticleLock'
import CONFIG from './config'
import { Style } from './style'

const pathosConfig = key => siteConfig(key, CONFIG[key], CONFIG)

const getPostHref = post => post?.href || `/${post?.slug || post?.id || ''}`

const getPostDate = post =>
  post?.publishDay || post?.date?.start_date || post?.date?.startDate || ''

const formatPostDate = post => {
  const value = getPostDate(post)
  const match = String(value).match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/)
  if (!match) return value
  return `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`
}

const SectionTitle = ({ icon, id, children }) => (
  <h2 id={id} className='pathos-section-title pathos-accent-gold'>
    <span aria-hidden='true'>{icon}</span> {children}
  </h2>
)

const PostTable = ({ posts = [] }) => (
  <div className='pathos-table-wrap'>
    <table className='pathos-table'>
      <colgroup>
        <col className='pathos-col-title' style={{ width: '78.7%' }} />
        <col className='pathos-col-date' style={{ width: '21.3%' }} />
      </colgroup>
      <thead>
        <tr>
          <th className='text-left font-semibold'>标题</th>
          <th className='text-left font-semibold'>日期</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id || post.slug}>
            <td>
              <SmartLink href={getPostHref(post)} className='pathos-row-link'>{post.title}</SmartLink>
            </td>
            <td className='pathos-muted whitespace-normal'>
              {formatPostDate(post) || '-'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const Header = () => (
  <header className='pathos-header fixed left-0 right-0 top-0 z-40 h-12 w-full sm:h-[55px]'>
    <div className='pathos-navbar-inner flex h-full w-full items-center justify-between'>
      <SmartLink href='/' className='pathos-brand no-underline'>
        {pathosConfig('PATHOS_BRAND')}
      </SmartLink>
      <DarkModeButton
        className='pathos-mode-button'
        title='切换日间与夜间主题'
      />
    </div>
  </header>
)

const LayoutBase = ({ children, post }) => {
  const fullWidth = post?.fullWidth ?? false
  return (
    <div id='theme-pathos' className='flex min-h-screen w-full flex-col'>
      <Style />
      <Header />
      <main
        id='out-wrapper'
        className={`mx-auto w-full flex-grow ${
          fullWidth ? 'px-8 md:px-16' : 'max-w-[700px] px-8 sm:px-0'
        }`}
      >
        {children}
      </main>
    </div>
  )
}

const LayoutIndex = props => {
  const { posts = [] } = props
  const email = pathosConfig('PATHOS_EMAIL')

  return (
    <div className='pathos-home'>
      <section aria-labelledby='pathos-hi'>
        <h1 id='pathos-hi' className='pathos-home-title pathos-accent-red'>
          <span aria-hidden='true'>👋</span>{' '}
          {pathosConfig('PATHOS_HOME_GREETING')}
        </h1>
        <aside className='pathos-callout' aria-label='Quote'>
          <div className='pathos-callout-title'>
            {pathosConfig('PATHOS_QUOTE_TITLE')}
          </div>
          <div className='pathos-callout-content'>
            <p>
              {pathosConfig('PATHOS_QUOTE_LEAD')}
              <br />
              {pathosConfig('PATHOS_QUOTE_BODY')}
            </p>
          </div>
        </aside>
      </section>

      <hr className='pathos-hr' />

      <section aria-labelledby='latest-posts'>
        <SectionTitle id='latest-posts' icon='✍️'>
          {pathosConfig('PATHOS_LATEST_TITLE')}
        </SectionTitle>
        <PostTable posts={posts} />
      </section>

      <hr className='pathos-hr' />

      <section aria-labelledby='about-pathos'>
        <aside className='pathos-callout' data-tone='info'>
          <h2 id='about-pathos' className='pathos-callout-title'>
            {pathosConfig('PATHOS_ABOUT_TITLE')}
          </h2>
          <div className='pathos-callout-content'>
            <p>
              {pathosConfig('PATHOS_ABOUT_LEAD')}
              <br />
              {pathosConfig('PATHOS_ABOUT_BODY')}
            </p>
          </div>
        </aside>
      </section>

      <section aria-labelledby='contact-pathos'>
        <aside className='pathos-callout' data-tone='tip'>
          <h2 id='contact-pathos' className='pathos-callout-title'>
            {pathosConfig('PATHOS_CONTACT_TITLE')}
          </h2>
          <div className='pathos-callout-content'>
            <p>
              {pathosConfig('PATHOS_CONTACT_LEAD')}
              <a className='pathos-content-link' href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          </div>
        </aside>
      </section>
    </div>
  )
}

const ListHeader = ({ title, icon = '☰' }) => (
  <div className='pathos-page-lead'>
    <SectionTitle icon={icon}>{title}</SectionTitle>
  </div>
)

const LayoutPostList = ({ posts = [], tag, category }) => (
  <div className='pb-16'>
    <ListHeader title={tag || category || '文章'} icon='☰' />
    <PostTable posts={posts} />
  </div>
)

const LayoutSearch = ({ posts = [], keyword = '' }) => {
  const normalized = String(keyword).toLowerCase()
  const filtered = normalized
    ? posts.filter(post =>
        `${post.title || ''} ${post.summary || ''} ${(post.tags || []).join(' ')}`
          .toLowerCase()
          .includes(normalized)
      )
    : posts
  return (
    <div className='pb-16'>
      <ListHeader title={keyword ? `搜索：${keyword}` : '搜索'} icon='⌕' />
      <PostTable posts={filtered} />
    </div>
  )
}

const LayoutArchive = ({ archivePosts = {} }) => {
  const posts = Object.values(archivePosts).flat()
  return (
    <div className='pb-16'>
      <ListHeader title='归档' icon='▣' />
      <PostTable posts={posts} />
    </div>
  )
}

const LayoutSlug = props => {
  const { post, lock, validPassword } = props
  const router = useRouter()
  useEffect(() => {
    if (!post) {
      const timer = setTimeout(
        () => {
          if (
            isBrowser &&
            !document.querySelector('#article-wrapper #notion-article')
          ) {
            void router.push('/404')
          }
        },
        siteConfig('POST_WAITING_TIME_FOR_404') * 1000
      )
      return () => clearTimeout(timer)
    }
  }, [post, router])

  if (lock) return <ArticleLock validPassword={validPassword} />
  if (!post) return null

  return (
    <article className='pathos-article'>
      <h1 className='pathos-article-title'>{post.title}</h1>
      <div id='article-wrapper'>
        <NotionPage post={post} />
      </div>
    </article>
  )
}

const LayoutCategoryIndex = ({ categoryOptions = [] }) => (
  <div className='pb-16'>
    <ListHeader title='分类' icon='▰' />
    <div className='grid gap-3 sm:grid-cols-2'>
      {categoryOptions.map(category => (
        <SmartLink
          className='pathos-panel flex items-center justify-between px-4 py-3 hover:-translate-y-0.5'
          href={`/category/${encodeURIComponent(category.name)}`}
          key={category.name}
        >
          <span>{category.name}</span>
          <span className='pathos-muted text-sm'>{category.count}</span>
        </SmartLink>
      ))}
    </div>
  </div>
)

const LayoutTagIndex = ({ tagOptions = [] }) => (
  <div className='pb-16'>
    <ListHeader title='标签' icon='#' />
    <div className='flex flex-wrap gap-3'>
      {tagOptions.map(tag => (
        <SmartLink
          className='pathos-panel px-4 py-2'
          href={`/tag/${encodeURIComponent(tag.name)}`}
          key={tag.name}
        >
          {tag.name} <span className='pathos-muted'>({tag.count || 0})</span>
        </SmartLink>
      ))}
    </div>
  </div>
)

const Layout404 = () => (
  <div className='flex min-h-[70vh] flex-col items-center justify-center text-center'>
    <div className='pathos-accent-red text-5xl font-semibold'>404</div>
    <p className='pathos-muted mt-3'>这里没有内容。</p>
    <SmartLink className='pathos-content-link mt-5' href='/'>
      返回首页
    </SmartLink>
  </div>
)

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
