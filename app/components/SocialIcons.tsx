'use client'

type Social = {
  name: string
  url: string
  icon: string
}

const socials: Social[] = [
  { name: 'TikTok', url: 'https://www.tiktok.com/@velvethouse', icon: '/icons/tiktok.png' },
  { name: 'Instagram', url: 'https://www.instagram.com/velvethouse', icon: '/icons/instagram.png' },
  { name: 'Facebook', url: 'https://www.facebook.com/velvethouse', icon: '/icons/facebook.png' },
  { name: 'X', url: 'https://x.com/velvethouse', icon: '/icons/x.png' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/velvethouse', icon: '/icons/linkedin.png' },
  { name: 'Reddit', url: 'https://www.reddit.com/r/velvethouse', icon: '/icons/reddit.png' },
  { name: 'Snapchat', url: 'https://www.snapchat.com/add/velvethouse', icon: '/icons/snapchat.png' },
  { name: 'Twitch', url: 'https://www.twitch.tv/velvethouse', icon: '/icons/twitch.png' },
  { name: 'Pinterest', url: 'https://www.pinterest.com/velvethouse', icon: '/icons/pinterest.png' },
]

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {socials.map((network) => (
        <a
          key={network.name}
          href={network.url}
          target="_blank"
          rel="noopener noreferrer"
          title={network.name}
          className="transition-transform hover:scale-110"
        >
          <img
            src={network.icon}
            alt={network.name}
            width={28}
            height={28}
            style={{ filter: 'brightness(1.2)' }}
          />
        </a>
      ))}
    </div>
  )
}
