import { GithubProfile } from '@/components/github-profile'
import { LongWaitComponent } from '@/components/long-wait-component'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita
        cumque corrupti facilis ut hic exercitationem. Asperiores aliquam ut ex,
        reiciendis in nemo quam aspernatur ducimus vero necessitatibus cumque
        totam!
      </p>

      <Suspense fallback={<p>Ta carreango o LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Ta carreango o GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
