// src/api/mockData/home.js
export default {
    getHomeData: () => {
        return {
            code: 200,
            data: {
                tableData: [
                    {
                        name: '张三',
                        sex: '男',
                        phone: '13465876789'
                    },
                    {
                        name: '小红',
                        sex: '女',
                        phone: '13465870645'
                    },
                    {
                        name: '李四',
                        sex: '男',
                        phone: '13465870645'
                    }
                ]
            }
        }
    }
}