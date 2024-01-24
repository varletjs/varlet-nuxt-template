export default defineEventHandler(async (event) => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 200)
  // })

  const data = Array.from({ length: 3 }, () => {
    return {
      id: Math.round(Math.random() * 1000)
    }
  })

  return {
    code: 200,
    message: 'success',
    data
  }
})
