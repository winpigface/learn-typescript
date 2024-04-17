const callbackFn = (handler: (str: string) => void) => {
  const secret = "wwwww"
  handler(secret)
}

export default callbackFn
