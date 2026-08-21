import { siteConfig } from '@/lib/config'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const { post } = props
  const fullWidth = post?.fullWidth ?? false
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return <footer
     className={`z-10 relative mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
       !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
     }`}
   >
     <hr className="border-[#e8e4dc] dark:border-[#34332f]" />
     <div className="my-5 text-xs leading-6 tracking-wide">
       <div className="flex flex-wrap items-baseline justify-between">
         <p>
           © {siteConfig('AUTHOR')} {copyrightDate}
         </p>
       </div>
     </div>
   </footer>
}
