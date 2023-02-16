// 复制文本
window.copyText = (text) => {
    return new Promise((resolve, reject) => {
        let input = document.createElement("input")
        input.value = text
        document.body.appendChild(input)
        input.select()
        if (document.execCommand("copy")) {
            document.execCommand("copy")
            resolve("复制成功")
        }
        document.body.removeChild(input)
    })
}

const extensionCardTemplate = document.createElement("template")

extensionCardTemplate.innerHTML = `
<style>
    .extension-card {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .extension-card-info {
        display: flex;
        width: 85%;
    }
    
    .text-overflow {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .cursor-pointer {
        cursor: pointer;
    }
    
    .cursor-pointer:hover{
        text-decoration: underline;
    }
    
    .extension-card-name {
        color: #42b983;
        width: 300px;
        padding-right: 10px;
        font-weight: bold;
    }
    .extension-card-author {
        width: 200px;
        padding-right: 10px;
        overflow: hidden;
        text-decoration: underline;
    }
    
    .extension-card-description {
        padding-right: 10px;
        width: 100%;
    }
    
    .extension-card-install{
        color: #1890FF;
        display: flex;
    }
    
    .hide-box{
        display: none;
    }
</style>
<div class="extension-card">
    <div class="extension-card-info">
        <div class="extension-card-name text-overflow cursor-pointer" title="打开扩展主页">
        扩展名称 扩展名称 扩展名称 扩展名称 扩展名称
        </div>
        <div class="extension-card-author text-overflow cursor-pointer" title="打开作者主页">开发者</div>
        <div class="extension-card-description text-overflow">描述</div>
    </div>
    <div class="extension-card-install">
        <div class="extension-card-zip cursor-pointer hide-box">zip下载</div>
        &emsp;
        <div class="extension-card-composer cursor-pointer hide-box">复制命令</div>
    </div>
</div>
`

/**
 * 扩展卡片
 * @class ExtensionCard
 */
class ExtensionCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(extensionCardTemplate.content.cloneNode(true))

        this.extensionCardName = this.shadowRoot.querySelector(".extension-card-name")
        this.extensionCardAuthor = this.shadowRoot.querySelector(".extension-card-author")
        this.extensionCardDescription = this.shadowRoot.querySelector(".extension-card-description")
        this.extensionCardComposer = this.shadowRoot.querySelector(".extension-card-composer")
        this.extensionCardZip = this.shadowRoot.querySelector(".extension-card-zip")


        // 扩展名称
        this.extensionCardName.innerHTML = this.getAttribute("name")
        this.extensionCardName.addEventListener("click", () => {
            window.open(this.getAttribute("extension-homepage"))
        })

        // 开发者
        this.extensionCardAuthor.innerHTML = this.getAttribute("author")
        this.extensionCardAuthor.addEventListener("click", () => {
            window.open(this.getAttribute("author-homepage"))
        })

        // 描述
        this.extensionCardDescription.innerHTML = this.getAttribute("description")

        // 安装命令
        let composer = this.getAttribute("composer")
        if (composer) {
            this.extensionCardComposer.classList.remove("hide-box")
            this.extensionCardComposer.addEventListener("click", () => {
                // navigator.clipboard.writeText(composer).then(() => {
                window.copyText(composer).then(() => {
                    this.extensionCardComposer.innerHTML = "已复制"
                    setTimeout(() => {
                        this.extensionCardComposer.innerHTML = "复制命令"
                    }, 1000)
                })
            })
        }

        // zip下载地址
        let zipUrl = this.getAttribute("zip")
        if (zipUrl) {
            this.extensionCardZip.classList.remove("hide-box")
            this.extensionCardZip.addEventListener("click", () => {
                window.open(zipUrl)
            })
        }
    }
}

customElements.define("extension-card", ExtensionCard)