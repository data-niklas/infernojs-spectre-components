import { Component, render, createRef } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'

var Timer = function (callback, delay) {
  var timerId,
    start,
    remaining = delay,
    isPaused = true

  this.pause = function () {
    if (isPaused) return
    isPaused = true
    clearTimeout(timerId)
    remaining -= Date.now() - start
  }

  this.resume = function () {
    if (!isPaused) return
    isPaused = false
    start = Date.now()
    timerId = setTimeout(callback, remaining)
  }

  this.resume()
}

/**
 * Use the success, error, warning, primary, or showToast method to display toasts
 * duration, title, subtitle, position, ....
 * halign, valign can have start, center, end
 */
class Toast extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var props = {}

    var className = 'toast'

    if (this.props.color) {
      className += ' toast-' + this.props.color
    }

    props.className = className

    var style = ''
    if (this.props.halign) style += 'justify-self:' + this.props.halign + ';'
    if (this.props.valign) style += 'align-self:' + this.props.valign + ';'

    if (style.length > 0) props.style = style

    var items = []

    if (this.props.deletable === true) {
      var btnProps = { className: 'btn btn-clear float-right' }
      if (this.props.onClick) btnProps.onClick = this.props.onClick
      items.push(c('button', btnProps))
    }
    if (this.props.title) items.push(c('h6', null, this.props.title))
    if (this.props.subTitle) items.push(c('p', null, this.props.subTitle))
    if (this.props.text) items.push(this.props.text)

    if (this.props.onmouseout) props.onmouseout = this.props.onmouseout
    if (this.props.onmouseover) props.onmouseover = this.props.onmouseover

    return c('div', props, items)
  }
}

/**
 *
 */
class ToastContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toasts: []
    }
    this.showToast = this.showToast.bind(this)
  }

  render () {
    var props = { className: 'toast-container' }
    return c('div', props, this.state.toasts)
  }
  showToast (toast, duration) {
    var timer = {
      pause: () => {},
      resume: () => {}
    }
    toast.props.onmouseover = e => {
      if (e.target.className === 'toast') {
        timer.pause()
      }
    }
    toast.props.onmouseout = e => {
        var related = e.relatedTarget;
      if (
          related &&
        related.className !== 'toast' &&
        related.parentElement.className !== 'toast'
      ) {
        timer.resume()
      }
    }
    if (toast.props.deletable === true) {
      toast.props.onClick = () => {
        done()
      }
    }

    var toasts = this.state.toasts
    toasts.push(toast)

    var done = () => {
      var stringified = JSON.stringify(toast)
      toasts = that.state.toasts.filter(e => {
        return JSON.stringify(e) !== stringified
      })
      that.setState({
        toasts
      })
    }

    this.setState({
      toasts
    })

    var that = this
    timer = new Timer(() => {
      done()
    }, duration)
  }
}

var toastContainer
function showToast (
  subTitle,
  title = null,
  duration = 2000,
  deletable = false,
  valign = 'end',
  halign = 'center',
  color = null
) {
  if (!toastContainer) {
    toastContainer = createRef()
    render(c(ToastContainer, { ref: toastContainer }), document.body)
  }
  var toast = c(Toast, { subTitle, title, valign, halign, deletable, color })
  toastContainer.current.showToast(toast, duration)
}

function success (subTitle, title, duration, deletable, valign, halign) {
  showToast(subTitle, title, duration, deletable, valign, halign, 'success')
}

function warning (subTitle, title, duration, deletable, valign, halign) {
  showToast(subTitle, title, duration, deletable, valign, halign, 'warning')
}
function error (subTitle, title, duration, deletable, valign, halign) {
  showToast(subTitle, title, duration, deletable, valign, halign, 'error')
}
function primary (subTitle, title, duration, deletable, valign, halign) {
  showToast(subTitle, title, duration, deletable, valign, halign, 'primary')
}
export default { success, showToast, Toast, warning, error, primary }
