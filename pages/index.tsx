import * as React from 'react'
import { domain } from 'lib/config'
import { resolveNotionPage } from 'lib/resolve-notion-page'
import PageLayout  from 'components/PageLayout'
import DirectiveSplash from 'components/DirectiveSplash'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage() {
  return <body>
    <PageLayout noGutter>
      <DirectiveSplash />
    </PageLayout>
  </body>
}
