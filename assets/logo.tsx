import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

interface LogoProps {
  width?: number
  height?: number
}

const Logo = ({ width = 24, height = 24 }: LogoProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="12" fill="#177EFF" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.6461 9.22671H11.9985H12.8796H19.3993V7.54912C19.3993 6.43863 18.4243 5.53601 17.2848 5.53601H9.53162V7.2136C9.53162 8.32498 10.5066 9.22671 11.6461 9.22671ZM6.71228 18.4639H7.06469H7.94574H14.4654V16.7863C14.4654 15.6747 13.4897 14.7732 12.3509 14.7732H4.59778V16.4508C4.59778 17.5615 5.57356 18.4639 6.71228 18.4639ZM11.9314 13.8436C11.8959 13.8421 11.8656 13.8408 11.8223 13.8453H4.59778V12.1677C4.59778 11.0667 5.56817 10.1546 6.71228 10.1546H12.5271H19.3993V11.8322C19.3993 12.9332 18.4289 13.8453 17.2848 13.8453H11.9985C11.9725 13.8453 11.9511 13.8444 11.9314 13.8436Z"
        fill="white"
      />
    </Svg>
  )
}

export default Logo
