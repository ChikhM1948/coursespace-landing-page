import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

const textStyle = {
  fontFamily: 'Changa, sans-serif',
}

export const data: Data[] = [
  {
    title: 'سهولة الوصول',
    description: 'دوس أوت إيور دولور في ريبرهينديريت إن فولوبتات فيليت إيس سيلوم دولور',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'تكلفة أكثر توفيرًا',
    description: 'دوس أوت إيور دولور في ريبرهينديريت إن فولوبتات فيليت إيس سيلوم دولور',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'وقت دراسة مرن',
    description: 'دوس أوت إيور دولور في ريبرهينديريت إن فولوبتات فيليت إيس سيلوم دولور',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'استشارة مع مرشد',
    description: 'دوس أوت إيور دولور في ريبرهينديريت إن فولوبتات فيليت إيس سيلوم دولور',
    icon: <ContactSupportIcon />,
  },
]

export const DataList = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={textStyle}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {item.icon}
        </div>
      ))}
    </div>
  )
}
