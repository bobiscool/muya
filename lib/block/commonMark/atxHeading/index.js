import Parent from '@/block/base/parent'
import ScrollPage from '@/block/scrollPage'

class AtxHeading extends Parent {
  static blockName = 'atx-heading'

  static create (muya, state) {
    const heading = new AtxHeading(muya, state)

    heading.append(ScrollPage.loadBlock('atxheading.content').create(muya, state.text))

    return heading
  }

  get path () {
    const { path: pPath } = this.parent
    const offset = this.parent.offset(this)

    return [...pPath, offset]
  }

  constructor (muya, { meta }) {
    super(muya)
    this.tagName = `h${meta.level}`
    this.meta = meta
    this.classList = ['mu-atx-heading']
    this.createDomNode()
  }
}

export default AtxHeading
