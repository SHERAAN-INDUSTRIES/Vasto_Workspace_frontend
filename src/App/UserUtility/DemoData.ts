type colors = {
    bgContainer:string,
    borderColor:string,
    titleText:string,
    titleBg:string,
    iconColor:string,
    iconHoverColor:string,
    paragraghColor:string,
    timeColor:string
}
type data = {
    title:string,
    text:string,
    date:string,
    color:colors
}
export class DemoData{
    Data():data[]{
        return [
            {
                title:"idea",
                text:"i cant believe it works",
                date:new Date().toDateString(),
                color:{
                    bgContainer:"bg-yellow-100",
                    borderColor:"border-yellow-200/60",
                    titleText:"text-yellow-700/70",
                    titleBg:"bg-yellow-200/60",
                    iconColor:"text-yellow-700/50",
                    iconHoverColor:"hover:text-yellow-800",
                    paragraghColor:"text-yellow-800/60",
                    timeColor:"text-yellow-700/60"
                }
            },
            {
                title:"wow",
                text:"this is so cool man",
                date:new Date().toDateString(),
                color:{
                    bgContainer:"bg-pink-100",
                    borderColor:"border-pink-200/60",
                    titleText:"text-pink-700/70",
                    titleBg:"bg-pink-200/60",
                    iconColor:"text-pink-700/50",
                    iconHoverColor:"hover:text-pink-800",
                    paragraghColor:"text-pink-800/60",
                    timeColor:"text-pink-700/60"
                }
            },
            {
                title:"this is cool",
                text:"can you believe it works",
                date:new Date().toDateString(),
                color:{
                    bgContainer:"bg-blue-100",
                    borderColor:"border-blue-200/60",
                    titleText:"text-blue-700/70",
                    titleBg:"bg-blue-200/60",
                    iconColor:"text-blue-700/50",
                    iconHoverColor:"hover:text-blue-800",
                    paragraghColor:"text-blue-800/60",
                    timeColor:"text-blue-700/60"
                }
            },
            {
                title:"this is cool",
                text:"can you believe it works",
                date:new Date().toDateString(),
                color:{
                    bgContainer:"bg-green-100",
                    borderColor:"border-green-200/60",
                    titleText:"text-green-700/70",
                    titleBg:"bg-green-200/60",
                    iconColor:"text-green-700/50",
                    iconHoverColor:"hover:text-green-800",
                    paragraghColor:"text-green-800/60",
                    timeColor:"text-green-700/60"
                }
            },
            {
                title:"this is cool",
                text:"can you believe it works",
                date:new Date().toDateString(),
                color:{
                    bgContainer:"bg-violet-100",
                    borderColor:"border-violet-200/60",
                    titleText:"text-violet-700/70",
                    titleBg:"bg-violet-200/60",
                    iconColor:"text-violet-700/50",
                    iconHoverColor:"hover:text-violet-800",
                    paragraghColor:"text-violet-800/60",
                    timeColor:"text-violet-700/60"
                }
            },
            {
                title:"this is cool",
                text:"can you believe it works",
                date:new Date().toDateString(),
                color:{
                    bgContainer:"bg-orange-100",
                    borderColor:"border-orange-200/60",
                    titleText:"text-orange-700/70",
                    titleBg:"bg-orange-200/60",
                    iconColor:"text-orange-700/50",
                    iconHoverColor:"hover:text-orange-800",
                    paragraghColor:"text-orange-800/60",
                    timeColor:"text-orange-700/60"
                }
            }
        ]
    }
}