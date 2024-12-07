import type { ProviderGetImage } from '@nuxt/image'
import { createOperationsGenerator } from '#image'
import { joinURL } from 'ufo'

const operationsGenerator = createOperationsGenerator()

export const getImage: ProviderGetImage = (
  src,
  { modifiers = {}, baseURL } = {},
) => {
  const operations = operationsGenerator(modifiers)

  return {
    url: joinURL('https://github.com', src + (operations ? `?${operations}` : '')),
  }
}
