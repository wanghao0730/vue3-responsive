// export const getAssertsFile = (url: string) => {
//   console.log(import.meta.url)
//   return new URL(`../assets/${url}`, import.meta.url).href
// }

export const getAsserts = (url: string) => {
  if (!url) return
  const imgPath = `/src/assets/images/${url}`
  const fileImg = import.meta.glob(`/src/assets/images/**/*`, {
    eager: true,
  }) as Record<string, any>
  console.log(fileImg)
  return fileImg[imgPath].default
}
