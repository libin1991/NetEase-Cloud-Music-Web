import {
    SELECT_ITEM,
    LIST_REQUEST_POSTS,
    LIST_RECEIVE_POSTS
} from '../actions'

const _list = [
    {
        title: "推荐",
        shrinkable: false,
        items: [
            {
                icon: "icon_yinle",
                title: "发现音乐",
                router: "/DiscoverMusic",
                select: "/DiscoverMusic/GXTJ",
                exact: true,
                items: [
                    { name: "个性推荐", router: "/GXTJ" },
                    { name: "歌单", router: "/GD" },
                    { name: "主播电台", router: "/ZBDT" },
                    { name: "排行榜", router: "/PHB" },
                    { name: "歌手", router: "/GS" },
                    { name: "最新音乐", router: "/ZXYY" }
                ]
            },
            {
                icon: "icon_yingyongtubiaoxinhao",
                title: "私人FM",
                router: "/PersonalFM",
                select: "/PersonalFM"
            },
            {
                icon: "icon_shipin",
                title: "MV",
                router: "/MV",
                select: "/MV"
            },
            {
                icon: "icon_pengyou",
                title: "朋友",
                router: "/Friends",
                select: "/Friends"
            }
        ]
    },
    {
        title: "我的音乐",
        shrinkable: false,
        items: [
            {
                icon: "icon_bendiyinle",
                title: "本地音乐",
                router: "/MyMusic",
                select: "/MyMusic"
            },
            {
                icon: "icon_xiazai",
                title: "下载管理",
                router: "/DownLoad",
                select: "/DownLoad"
            },
            {
                icon: "icon_yun",
                title: "我的音乐云盘",
                router: "/MyCloud",
                select: "/MyCloud"
            },
            {
                icon: "icon_geshou",
                title: "我的歌手",
                router: "/Mysinger",
                select: "/Mysinger"
            },
            {
                icon: "icon_yuleyinlediantai",
                title: "我的电台",
                router: "/MyRadio",
                select: "/MyRadio"
            }
        ]
    },
    {
        title: "创建的歌单",
        shrinkable: true,
        items: [

        ]
    },
    {
        title: "收藏的歌单",
        shrinkable: true,
        items: [

        ]
    }
]

function list( state=_list, action){
    switch (action.type) {
        case SELECT_ITEM:
            return state.map((list, _listIndex)=>{
                const { listIndex, itemIndex} = action
                return {
                    ...list,
                    items: list.items.map((item, _itemIndex)=>{
                        if(listIndex===_listIndex && itemIndex===_itemIndex){
                            return {...item, active: true}
                        }
                        return {...item, active: false}
                    })
                }
            })
        case LIST_RECEIVE_POSTS:
            return state.map((list, index)=>{
                if(index===2){
                    return {
                        ...list,
                        items: Array.prototype.filter.call(action.posts['playlist'], (item)=>{
                            return !item['ordered']
                        }).map((item)=>{
                            return {
                                ...item,
                                icon: "icon_liebiao",
                                router: `/playlist/${item.id}`,
                                title: item.name
                            }
                        })
                    }
                }else if(index===3){
                    return {
                        ...list,
                        items: Array.prototype.filter.call(action.posts['playlist'], (item)=>{
                            return item['ordered']
                        }).map((item)=>{
                            return {
                                ...item,
                                icon: "icon_liebiao",
                                router: `/playlist/${item.id}`,
                                title: item.name
                            }
                        })
                    }
                }
                return {
                    ...list
                }
            })
        case LIST_REQUEST_POSTS:
            return state
        default:
            return state
    }
}

export default list
