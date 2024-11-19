const BASE64_IMAGE_REGEX = /^data:image\/(\w+);base64,/

const getImageExtensionFromBase64 = (base64Data: string): string => {
  const matches = base64Data.match(BASE64_IMAGE_REGEX)

  if (matches && matches.length === 2) {
    return matches[1]!
  }

  return 'jpeg'
}

export const base64ToFile = (base64String: string, fileName: string): File => {
  const extension = getImageExtensionFromBase64(base64String)
  const mimeType = `image/${extension}`
  const base64Data = base64String.replace(/^data:.+;base64,/, '')
  const byteCharacters = atob(base64Data)
  const byteArrays = new Array(byteCharacters.length)

  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays[i] = byteCharacters.charCodeAt(i)
  }

  const byteArray = new Uint8Array(byteArrays)
  const blob = new Blob([byteArray], { type: mimeType })

  return new File([blob], `${fileName}.${extension}`, { type: mimeType })
}

export function getRandomName(length: number) {
  const characters =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  return Array.from({ length })
    .map(() => characters[Math.floor(Math.random() * characters.length)])
    .join('')
}
