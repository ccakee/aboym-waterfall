<template>
    <div class="waterfallList">
        <ul :style="{
            width: itemWidth + 'px',
            marginLeft: gapLeft ? gapLeft : gap + 'px',
            marginRight: gapRight ? gapRight : gap + 'px',
        }" v-for="(item, index) in list" class="col-item">
            <li :style="{
                'margin-top': gapTop ? gapTop : gap + 'px',
                'margin-bottom': gapBottom ? gapBottom : gap + 'px'
            }" v-for="(item2, index2) in list[index]" :key="index2">
                <slot :itemData="item2"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'aWaterfall',
    props: {
        /* 每一项的宽度 */
        itemWidth: {
            type: Number | String,
            required: true,
            default: 100
        },
        /* 列表数据 */
        listData: {
            type: Array,
            required: true,
        },
        /* 间隙 */
        gap: {
            type: Number | String,
        },
        gapTop: {
            type: Number | String,
        },
        gapBottom: {
            type: Number | String,
        },
        gapLeft: {
            type: Number | String,
        },
        gapRight: {
            type: Number | String,
        },
    },
    data() {
        return {
            // 列
            list: [],
            // 渲染的下标
            i: 0,
            // 浏览器宽
            windowWidth: document.documentElement.clientWidth
        }
    },
    watch: {
        listData: function () {
            this.setDom()
        }
    },
    mounted() {
        for (let i = 0; i < Math.trunc(this.windowWidth / this.itemWidth); i++) {
            this.list.push([])
        }
        this.$nextTick(() => {
            this.setDom()
        })
    },
    methods: {
        getMinNum(list) {
            return list.indexOf(Math.min.apply(null, list))
        },
        setDom() {
            const items = document.querySelectorAll('.col-item')
            const list = Object.values(items).map((item) => {
                return item.offsetHeight
            })
            this.list[this.getMinNum(list)].push(this.listData[this.i])
            this.i++
            this.$nextTick(() => {
                this.i < this.listData.length && this.setDom()
            })
        },
    }
}
</script>

<style scoped>
ul,
li {
    padding: 0;
    margin: 0;
    list-style: none
}

.waterfallList {
    /* display: flex; */
    width: 100%;
}

.waterfallList>ul {
    float: left;

}

.waterfallList>ul>li {
    width: 100%;
    /* border: 1px solid #ccc; */
    overflow: hidden;
}
</style>