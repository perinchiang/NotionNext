import Comment from '@/components/Comment'
import DarkModeButton from '@/components/DarkModeButton'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { isBrowser } from '@/lib/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ArticleLock } from '../nobelium/components/ArticleLock'
import CONFIG from './config'
import { Style } from './style'

const getPostHref = post => post?.href || `/${post?.slug || post?.id || ''}`

const getPostDate = post =>
  post?.publishDay || post?.date?.start_date || post?.date?.startDate || ''

const SectionTitle = ({ icon, children }) => (
  <h2 className='pathos-accent-gold mb-5 flex items-center gap-3 text-[1.65rem] font-semibold tracking-tight'>
    <i
      aria-hidden='true'
      className={`fas ${icon} w-5 text-center text-[1.05rem]`}
    />
    <span>{children}</span>
  </h2>
)

const PostTable = ({ posts = [] }) => (
  <div className='overflow-hidden rounded-[4px]'>
    <table className='pathos-table'>
      <colgroup>
        <col className='w-[72%]' />
        <col className='w-[28%]' />
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
              <SmartLink href={getPostHref(post)}>{post.title}</SmartLink>
            </td>
            <td className='pathos-muted whitespace-normal'>
              {getPostDate(post)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const Header = () => (
  <header className='pathos-header sticky top-0 z-40 h-14 w-full'>
    <div className='flex h-full w-full items-center justify-between px-12'>
      <SmartLink
        href='/'
        className='pathos-brand text-[0.98rem] font-semibold tracking-wide no-underline'
      >
        {CONFIG.PATHOS_BRAND}
      </SmartLink>
      <DarkModeButton
        className='pathos-mode-button'
        title='切换日间与夜间主题'
      />
    </div>
  </header>
)

const Footer = () => {
  const since = Number.parseInt(siteConfig('SINCE'))
  const currentYear = new Date().getFullYear()
  const years =
    since && since < currentYear ? `${since}–${currentYear}` : currentYear
  return (
    <footer className='mx-auto w-full max-w-[700px] px-8 pb-8 pt-4 text-sm sm:px-0'>
      <div className='pathos-divider pathos-muted border-t pt-5'>
        © {years} {CONFIG.PATHOS_BRAND}
      </div>
    </footer>
  )
}

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
      <Footer />
    </div>
  )
}

const LayoutIndex = props => {
  const { posts = [] } = props
  return (
    <div className='pb-12 pt-28 sm:pt-32'>
      <section aria-labelledby='pathos-hi'>
        <h1
          id='pathos-hi'
          className='pathos-accent-red mb-4 flex items-center gap-3 text-[1.62rem] font-semibold tracking-tight sm:text-[1.82rem]'
        >
          <i
            aria-hidden='true'
            className='fas fa-hand w-5 text-center text-[1.05rem]'
          />
          <span className='max-w-[205px] sm:max-w-none'>
            Hi, Welcome to my blog!
          </span>
        </h1>
        <blockquote className='pathos-panel px-5 py-4'>
          <div className='pathos-muted mb-2 text-sm font-semibold'>Quote</div>
          <p>{CONFIG.PATHOS_QUOTE_LEAD}</p>
          <p>{CONFIG.PATHOS_QUOTE_BODY}</p>
        </blockquote>
      </section>

      <section
        className='pathos-divider mt-8 border-t pt-7'
        aria-labelledby='latest-posts'
      >
        <SectionTitle icon='fa-pen-nib'>最新文章</SectionTitle>
        <PostTable posts={posts} />
      </section>

      <section
        className='pathos-divider mt-8 border-t pt-7'
        aria-labelledby='about-pathos'
      >
        <SectionTitle icon='fa-circle-info'>关于这个站点</SectionTitle>
        <div className='pathos-panel px-5 py-4'>{CONFIG.PATHOS_ABOUT}</div>
      </section>

      <section className='mt-8' aria-labelledby='contact-pathos'>
        <SectionTitle icon='fa-droplet'>联系我</SectionTitle>
        <div className='pathos-panel px-5 py-4'>
          有想聊的可以邮箱找我：
          <a
            className='pathos-accent-blue underline decoration-transparent underline-offset-4 hover:decoration-current'
            href={`mailto:${CONFIG.PATHOS_EMAIL}`}
          >
            {CONFIG.PATHOS_EMAIL}
          </a>
        </div>
      </section>
    </div>
  )
}

const ListHeader = ({ title, icon = 'fa-list' }) => (
  <div className='pb-5 pt-20 sm:pt-24'>
    <SectionTitle icon={icon}>{title}</SectionTitle>
  </div>
)

const LayoutPostList = ({ posts = [], tag, category }) => (
  <div className='pb-16'>
    <ListHeader title={tag || category || '文章'} />
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
      <ListHeader
        title={keyword ? `搜索：${keyword}` : '搜索'}
        icon='fa-magnifying-glass'
      />
      <PostTable posts={filtered} />
    </div>
  )
}

const LayoutArchive = ({ archivePosts = {} }) => {
  const posts = Object.values(archivePosts).flat()
  return (
    <div className='pb-16'>
      <ListHeader title='归档' icon='fa-box-archive' />
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
    <article className='pb-16 pt-20 sm:pt-24'>
      <header className='pathos-divider mb-10 border-b pb-7'>
        <h1 className='pathos-accent-red text-3xl font-semibold leading-tight tracking-tight sm:text-4xl'>
          {post.title}
        </h1>
        <div className='pathos-muted mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm'>
          {getPostDate(post) && <time>{getPostDate(post)}</time>}
          {post.category && <span>{post.category}</span>}
        </div>
      </header>
      <div id='article-wrapper'>
        <NotionPage post={post} />
      </div>
      <div className='pathos-divider mt-10 border-t pt-6'>
        <ShareBar post={post} />
        <Comment frontMatter={post} />
        <div className='mt-6 flex justify-between text-sm'>
          <SmartLink className='pathos-accent-blue' href='/'>
            ← 返回首页
          </SmartLink>
          <button
            className='pathos-accent-blue'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ 回到顶部
          </button>
        </div>
      </div>
    </article>
  )
}

const LayoutCategoryIndex = ({ categoryOptions = [] }) => (
  <div className='pb-16'>
    <ListHeader title='分类' icon='fa-folder' />
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
    <ListHeader title='标签' icon='fa-tag' />
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
    <SmartLink className='pathos-accent-blue mt-5' href='/'>
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
