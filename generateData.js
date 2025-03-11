// node buildChangelog.js <token>

const { request } = require("http");

const formatDate = (isoDateStr) => {
    const date = new Date(isoDateStr);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = (date.getHours() + 8).toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const app = () => {
    // 生成 changelog
    const generateChangelog = () => {
        const fetchReleases = async (params) => {
            const BaseUrl = "https://api.github.com";
            const pageSize = 100;
            let page = 1;
            const releases = [];

            const fetchRelease = async (params, page) => {
                const { token, owner, repo } = params;
                const url = `${BaseUrl}/repos/${owner}/${repo}/releases?page=${page}&per_page=${pageSize}`;
                const headers = { "X-GitHub-Api-Version": "2022-11-28" };
                if (token) {
                    headers["Authorization"] = `Bearer ${token}`;
                }

                const response = await fetch(url, { headers });

                return await response.json();
            };

            while (page) {
                const release = await fetchRelease(params, page);
                if (release?.message) {
                    throw new Error(JSON.stringify(release));
                }

                releases.push(...release);
                if (release.length < pageSize) {
                    break;
                }

                page++;
            }

            return releases;
        };

        fetchReleases({
            token: process.argv.slice(2)[0],
            owner: "slowlyo",
            repo: "owl-admin",
        }).then((res) => {
            const content = res
                .map(
                    (release) => `## ${release.tag_name}

> ${formatDate(release.published_at)}

${release.body}

[View on GitHub](${release.html_url})

<br>
<br>
<br>
`
                )
                .join("\n");

            const frontMatter = `---
footer: false
sidebar: false
---

`;

            require("fs").writeFileSync(
                "./docs/changelog/index.md",
                frontMatter + content
            );

            console.log("changelog done.");
        });
    };

    // 复制 ./donate-data.json 到 ./docs/public/donate-data.json
    const copyDonateData = () => {
        require("fs").copyFileSync(
            "./donate-data.json",
            "./docs/public/donate-data.json"
        );
    };

    // 获取扩展数据
    const generateExtensionData = async () => {
        let data = [];

        const url = `https://packagist.org/search.json?tags=owl-admin&per_page=100`;
        const query = async (url) => {
            const response = await fetch(url);
            const json = await response.json();
            data.push(...json.results);

            if (json?.next) {
                await query(json.next);
            }
        };

        await query(url);

        // 排除 slowlyo/owl-admin, 并按 downloads 排序
        data = data
            .filter((item) => item.name !== "slowlyo/owl-admin")
            .sort((a, b) => b.downloads - a.downloads);

        // 生成 ./docs/public/extension-data.json
        require("fs").writeFileSync(
            "./docs/public/extension-data.json",
            JSON.stringify(data, null, 2)
        );

        console.log("extension-data done.");
    };

    const run = () => {
        generateChangelog();
        copyDonateData();
        generateExtensionData();
    };

    run();
};

app();
