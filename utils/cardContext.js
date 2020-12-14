export const getRandomCardContext = index => {
  const ctx = ['success', 'info', 'secondary']

  // Choose randomly if index is not present
  let idx = Math.floor(Math.random() * ctx.length)

  if (index !== undefined) idx = index % ctx.length

  return ctx[idx]
}
