import Head from 'next/head'

export default ({
  title = 'Supernova Lynbrook',
  description = 'On May 19th & May 20th, students are coming together for a fun filled 24-hours at Lynbrook high school in order to help their communities using technology.',
  image = 'https://cdn.glitch.global/802b43f3-c1b5-4932-9180-30a8d74c1804/Supernova_Logo.PNG?v=1679891514317)',
  url = 'https://chlynbrookhs.wixsite.com/website'
}) => (
  <Head>
   <meta name="google-site-verification" content="sez4o6qiaXwoAXBws5KHqtSPjSyUgAWhhWKCmsTiHu4" />
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Supernova Lynbrook" />
    <meta name="twitter:site" content="#" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="theme-color" content="#2b34b6" />
    <link
      rel="shortcut icon"
      href="https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2FGroup.svg?v=1572625597700"
    />
    
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#fff" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="apple-mobile-web-app-title" content="@supernova lynbrook/site" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'supernova lynbrook',
        url: 'https://chlynbrookhs.wixsite.com/website',
        logo: 'https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Flogo(3).png?v=1572646181748',
        sameAs: [
          
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'supernova.lhs@gmail.com',
            contactType: 'customer support',
            url: 'https://chlynbrookhs.wixsite.com/website'
          }
        ]
      })}}
    />
  </Head>
)

