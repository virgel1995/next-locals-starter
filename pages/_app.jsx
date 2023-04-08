import { Layout } from "@/components";
import { useRouter } from 'next/router'
import local from '@/locals'
import '@/assets/css/global.css'
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router
  const lang = local(locale)

  return (
    <Layout lang={lang}>
      <Component {...pageProps} lang={...lang}/>
    </Layout>
  );
}
