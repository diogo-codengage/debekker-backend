import { forwardTo } from 'prisma-binding'

export default {
  itemTranslation: {
    subscribe: forwardTo('db')
  }
}
