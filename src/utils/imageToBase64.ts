export async function imageToBase64(imageUri: string): Promise<string> {
  const response = await fetch(imageUri)
  const blob = await response.blob()
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = () => {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(blob)
  })
}

export function toBase64(image: ArrayBuffer) {
  return btoa(
    new Uint8Array(image).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  )
}
