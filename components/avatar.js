import { Image } from 'rebass'

export default ({ size = 32, light = false, ...props }) => (
  <Image
    {...props}
    src={`https://cdn.glitch.global/802b43f3-c1b5-4932-9180-30a8d74c1804/Supernova_Logo.PNG?v=1679891514317`}
    alt="Supernova avatar"
    width={size}
    height={size}
  />
)
