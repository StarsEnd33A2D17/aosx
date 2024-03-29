export function hello() {
    console.log("Hello World")
}

export type aosxConfig = {
    type: string,
    duration: number,
    delay: number,
}

export class AOSX {
    config: aosxConfig

    constructor()
    constructor(config?: aosxConfig) {
        if (typeof config === "object") {
            this.config = config
        } else {
            this.config = {
                type: "fade-up",
                duration: 1000,
                delay: 0,
            }
        }
    }

    public hello() {
        console.log("Hello World")
    }

    public init(): void {
        const list = document.querySelectorAll('[data-aosx]')

        const style = document.createElement('style');
        style.innerHTML = "[test]{\n" +
            "  border: red 100px solid;\n" +
            "}";
        const addCSS = (newCSS: string) => {
            style.innerHTML = style.innerHTML + "\n" + newCSS;
        }
        list.forEach(item => {
            // duration
            (item as HTMLElement).classList.add("aosx-init");
            if ((item as HTMLElement).dataset.aosxDuration !== undefined) {
                addCSS("[data-aosx-duration=\"" + (item as HTMLElement).dataset.aosxDuration + "\"] {\n" +
                    "  transition-duration: " + (item as HTMLElement).dataset.aosxDuration + "ms;\n" +
                    "}")
            }
            // delay
            if ((item as HTMLElement).dataset.aosxDelay !== undefined) {
                addCSS("[data-aosx-delay=\"" + (item as HTMLElement).dataset.aosxDelay + "\"] {\n" +
                    "  transition-delay: " + (item as HTMLElement).dataset.aosxDelay + "ms;\n" +
                    "}")
            }
            // distance
            if ((item as HTMLElement).dataset.aosxDistance !== undefined) {
                switch (<string>(item as HTMLElement).dataset.aosx) {
                    case "fade-up": {
                        addCSS("[data-aosx='fade-up'][data-aosx-distance='" + (item as HTMLElement).dataset.aosxDistance + "'] {\n" +
                            "    transform: translate3d(0, " + (item as HTMLElement).dataset.aosxDistance + ", 0);\n" +
                            "}");
                        break;
                    }
                    case "fade-right": {
                        addCSS("[data-aosx='fade-right'][data-aosx-distance='" + (item as HTMLElement).dataset.aosxDistance + "'] {\n" +
                            "    transform: translate3d(-" + (item as HTMLElement).dataset.aosxDistance + ", 0, 0);\n" +
                            "}");
                        break;
                    }
                    case "slide-up": {
                        addCSS("    [data-aosx='slide-up'][data-aosx-distance='" + (item as HTMLElement).dataset.aosxDistance + "'] {\n" +
                            "      transform: translate3d(0, " + (item as HTMLElement).dataset.aosxDistance + ", 0);\n" +
                            "    }");
                        break;
                    }
                    case "slide-right": {
                        addCSS("    [data-aosx='slide-right'][data-aosx-distance='" + (item as HTMLElement).dataset.aosxDistance + "'] {\n" +
                            "      transform: translate3d(-" + (item as HTMLElement).dataset.aosxDistance + ", 0, 0);\n" +
                            "    }");
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }

        })

        const ref = document.querySelector('script');
        ref?.parentNode?.insertBefore(style, ref);

        const io = new IntersectionObserver((entries) => {
            entries.forEach(item => {
                // isIntersecting是一个Boolean值，判断目标元素当前是否可见
                if (item.isIntersecting) {
                    (item.target as HTMLElement).classList.add("aosx-animate");
                } else {
                    (item.target as HTMLElement).classList.remove("aosx-animate");
                }
            })
        }, {
            root: document.querySelector('.root')
        })

        list.forEach(div => io.observe(div))
    }
}