import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'
import Link from './Link.js'

/**
 * type: numbers or text
 * pages: either the number of pages or an array of page names
 * page: current page (1,2,3,4 --> beginning at 1)
 * onPage: listener, which notifies you on page changes
 */
class Pagination extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: this.props.page || 1
    }
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.setPage = this.setPage.bind(this)
  }

  previous () {
    this.setPage(this.state.page - 1);
  }
  next () {
    this.setPage(this.state.page + 1);
  }
  setPage (page) {
    this.setState({
      page
    })
    if (this.props.onPage)this.props.onPage(page);
  }

  render () {
    var props = {}

    var className = 'pagination'

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    var type = this.props.type || 'numbers'
    var items
    if (type === 'numbers') {
      items = this.generateNumbers()

      var listener = props.onClick
      var that = this

      props.onClick = e => {
        var target = e.target
        if (target.tagName === 'A' && inner != '...') {
          var inner = target.innerHTML
          switch (inner) {
            case 'Next':
              that.next()
              break
            case 'Previous':
              that.previous()
              break
            default:
              if (inner != that.state.page) {
                that.setPage(Number(inner))
              }
          }
        }

        if (listener) listener(e)
      }
    } else {
      items = this.generateText(props)
    }

    return c('ul', props, items)
  }
  generateNumbers () {
    var items = []
    var pages = this.props.pages
    var page = this.state.page
    items.push(
      c(
        'li',
        { className: 'page-item' + (page === 1 ? ' disabled' : '') },
        c(Link, { href: 'javascript:void(0)' }, 'Previous')
      )
    )
    var shownPages = this.removeDuplicates([
      1,
      2,
      page - 1,
      page,
      page + 1,
      pages - 1,
      pages
    ]).filter(e => {
      return e > 0 && e <= pages
    })

    for (let index = 0; index < shownPages.length; index++) {
      const element = shownPages[index]
      if (index > 0 && element - 1 != shownPages[index - 1]) {
        items.push(c('li', { className: 'page-item' }, c('span', null, '...')))
      }
      items.push(
        c(
          'li',
          { className: 'page-item' + (page == element ? ' active' : '') },
          c(Link, { href: 'javascript:void(0)' }, element.toString())
        )
      )
    }

    items.push(
      c(
        'li',
        { className: 'page-item' + (page === pages ? ' disabled' : '') },
        c(Link, { href: 'javascript:void(0)' }, 'Next')
      )
    )

    return items
  }
  generateText (props) {
    var items = []
    var pages = this.props.pages
    var page = this.state.page

    var prevItems = []
    prevItems.push(c('div', { className: 'page-item-subtitle' }, 'Previous'))
    if (page != 1)
      prevItems.push(
        c('div', { className: 'page-item-title h5' }, pages[page - 2])
      )

    items.push(
      c(
        'li',
        { className: 'page-item page-prev' + (page === 1 ? ' disabled' : '') },
        c(Link, { href: 'javascript:void(0)',onClick:this.previous },prevItems)
      )
    )

    var nextItems = []
    nextItems.push(c('div', { className: 'page-item-subtitle' }, 'Next'))
    if (page != pages.length)
      nextItems.push(c('div', { className: 'page-item-title h5' }, pages[page]))

    items.push(
      c(
        'li',
        {
          className:
            'page-item page-next' + (page === pages.length ? ' disabled' : '')
        },
        c(Link, { href: 'javascript:void(0)',onClick:this.next },nextItems)
      )
    )

    return items
  }
  removeDuplicates (arr) {
    var o = {}
    arr.forEach(function (e) {
      o[e] = true
    })
    return Object.keys(o)
  }
}

export default Pagination
