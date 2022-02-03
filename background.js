const npmjsSearchUrl = 'https://www.npmjs.com/search?q='
const npmjsPackageUrl = 'https://www.npmjs.com/package/'

function searchNpmjs(searchUrl = npmjsSearchUrl, highlightText = '') {
  const searchTerm = String(highlightText.selectionText)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .toLowerCase()
  browser.tabs.create({ url: `${searchUrl}${searchTerm}` })
}

function createUrlSearchButton() {
  browser.contextMenus.create({
    title: 'Search on npmjs',
    contexts: ['selection'],
    onclick: (event) => searchNpmjs(npmjsSearchUrl, event)
  })
}

function createPackageSearchButton() {
  browser.contextMenus.create({
    title: 'Search as Package on npmjs',
    contexts: ['selection'],
    onclick: (event) => searchNpmjs(npmjsPackageUrl, event)
  })
}

createUrlSearchButton()
createPackageSearchButton()
