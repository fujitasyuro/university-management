const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.nav__tab__item')
const panes = $$('.container__content')

const tabActive = $('.nav__tab__item.tab--active')
const line = $('.nav__line')

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function () {
          $('.container__content.content--active').classList.remove('content--active')
          $('.nav__tab__item.tab--active').classList.remove('tab--active')

          line.style.left = this.offsetLeft + 'px'
          line.style.width = this.offsetWidth + 'px'

          this.classList.add('tab--active')
          pane.classList.add('content--active')
    }
})