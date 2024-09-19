import {useState, useEffect} from 'react'
import {Table} from 'antd'

const DonateTable = () => {
    const url = 'https://api.owladmin.com/api/collections/donate/records?perPage=500&sort=-date&fields=amount,nickname,date,remark'

    const [data, setData] = useState([])

    const columns = [
        {
            title: '日期',
            dataIndex: 'date',
            key: 'date',
            render: (date) => <div>{ date.split(' ')[0] }</div>
        },
        {title: '金额', dataIndex: 'amount', key: 'amount'},
        {title: '昵称', dataIndex: 'nickname', key: 'nickname'},
        {title: '备注', dataIndex: 'remark', key: 'remark'},
    ]

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setData(data.items))
    }, [])

    return <Table dataSource={data} columns={columns} pagination={false}/>
}

export default DonateTable