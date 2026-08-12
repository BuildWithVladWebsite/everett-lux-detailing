import { Helmet } from 'react-helmet-async'

interface Props {
  title: string
  description: string
  canonical?: string
}

export default function SEOMeta({ title, description, canonical }: Props) {
  const fullTitle = title.includes('Everett Lux') ? title : `${title} | Everett Lux Detailing`
  const url = canonical ? `https://everettluxdetailing.com${canonical}` : undefined

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
    </Helmet>
  )
}
