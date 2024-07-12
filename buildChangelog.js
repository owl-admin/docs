// node buildChangelog.js <token>

const formatDate = (isoDateStr) => {
    const date = new Date(isoDateStr)

    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

const fetchReleases = async (params) => {
    const BaseUrl = 'https://api.github.com'
    const pageSize = 100
    let page = 1
    const releases = []

    const fetchRelease = async (params, page) => {
        const {token, owner, repo} = params
        const url = `${BaseUrl}/repos/${owner}/${repo}/releases?page=${page}&per_page=${pageSize}`
        const headers = {'X-GitHub-Api-Version': '2022-11-28'}
        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }

        const response = await fetch(url, {headers})

        return await response.json()
    }

    while (page) {
        const release = await fetchRelease(params, page)
        if (release?.message) {
            throw new Error(JSON.stringify(release))
        }

        releases.push(...release)
        if (release.length < pageSize) {
            break
        }

        page++
    }

    return releases
}

fetchReleases({
    token: process.argv.slice(2)[0],
    owner: 'slowlyo',
    repo : 'owl-admin'
}).then(res => {
    const content = res.map(release => `## ${release.tag_name}

> ${formatDate(release.published_at)}

${release.body}

[View on GitHub](${release.html_url})

<br>
<br>
<br>
`).join('\n')

    require('fs').writeFileSync('./CHANGELOG.md', content)

    console.log('done.')
})
