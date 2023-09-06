import { createApp } from 'vue'
import popPageEL from "./index.vue";
// interface 

class PopPage {
    popUpStack = []
    getTopPopUp() {
        return this.popUpStack[this.popUpStack.length - 1]
    }
    // 创建masking
    createMask() {
        // this.maskingDom = document.createElement('div')
        this.popUpStack.push({
            maskingDom: document.createElement('div'),
            popPage: null,
        })
    }

    // 清除masking
    removeMasking(popUpStatus, arg) {
        const topPopUp = this.getTopPopUp()
        return new Promise((resolve, reject) => {
            // 解除绑定
            topPopUp.popPage.unmount(topPopUp.maskingDom)
            document.body.removeChild(topPopUp.maskingDom)
            this.popUpStack.pop()
            popUpStatus(arg)
        })
    }


    // 打开 openMasking
    openMasking(data) {
        this.createMask()
        const topPopUp = this.getTopPopUp()
        return new Promise((resolve, reject) => {
            topPopUp.popPage = createApp(popPageEL, {
                popPageStyle: data.popPageStyle || {},
                title: data.title || '',
                onClose: (arg = { status: 'success', message: '关闭成功' }) => {
                    this.removeMasking(resolve, arg)
                },
                // popUpStatus: { resolve, reject },
                url: data.url,
                propParams: Object.assign(data.props,{ resolve, reject })
            })
            // 让我们节点挂在到一个dom元素上
            document.body.appendChild(topPopUp.maskingDom)
            topPopUp.popPage.mount(topPopUp.maskingDom)
        })
    }
    constructor() {
    }
}

const popPage = new PopPage()

export default popPage