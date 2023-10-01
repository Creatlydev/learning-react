import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard'

export function App () {
  const formatUserName = (username) => `@${username}`
  return (
    <div className='App'>
      <TwiterFollowCard
        formatUserName={formatUserName}
        username='midudev'
        name='Miguel Angel Duran'
        initialIsFollowing
      />

      <TwiterFollowCard
        formatUserName={formatUserName}
        username='freddier'
        name='Freddy Vega'
      />

      <TwiterFollowCard
        formatUserName={formatUserName}
        username='MrBeast'
        name='MrBeast'
      />

      <TwiterFollowCard
        formatUserName={formatUserName}
        username='uiuxadrian'
        name='UI Adrian'
      />
    </div>
  )
}
