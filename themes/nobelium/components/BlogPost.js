import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'

const BlogPost = ({ post }) => {
  const { NOTION_CONFIG } = useGlobal()
  const showPreview =
    siteConfig('POST_LIST_PREVIEW', false, NOTION_CONFIG) && post?.blockMap

  return (
    <SmartLink href={post?.href}>
      <article key={post.id} className='group mb-8 border-b border-[#e8e4dc] pb-8 dark:border-[#34332f]'>
        <header className='flex flex-col justify-between md:flex-row md:items-baseline'>
          <h2 className='mb-2 cursor-pointer text-xl font-medium leading-snug text-[#25231f] transition-colors duration-200 group-hover:text-[#756b5b] dark:text-[#f0ede7] dark:group-hover:text-[#c9c2b7] md:text-2xl'>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post.pageIcon} />
            )}
            {post.title}
          </h2>
          <time className='flex-shrink-0 font-mono text-xs tracking-wide text-[#8b857c] dark:text-[#9f9a92]'>
            {post?.publishDay}
          </time>
        </header>
        <main>
          {!showPreview && (
            <p className='hidden max-w-[65ch] text-[0.98rem] leading-7 text-[#68625a] dark:text-[#b4afa7] md:block'>
              {post.summary}
            </p>
          )}
          {showPreview && post?.blockMap && (
            <div className='overflow-ellipsis truncate'>
              <NotionPage post={post} />
              <hr className='border-dashed py-4' />
            </div>
          )}
        </main>
      </article>
    </SmartLink>
  )
}

export default BlogPost
