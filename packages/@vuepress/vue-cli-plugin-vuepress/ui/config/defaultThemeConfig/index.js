const flattenDeep = require('lodash/flattenDeep')

const navbarItems = require('./navbarItems')
const sidebar = require('./sidebar')
const navigation = require('./navigation')
const { isDefaultTheme } = require('./utils')

module.exports = data => {
  const promptItems = flattenDeep([
    navigation(data),
    sidebar(data),
    navbarItems(data)
  ])

  return promptItems.map(item => ({
    when: isDefaultTheme,
    ...item
  }))
}
