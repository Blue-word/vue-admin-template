import request from '@/utils/request'

export function searchUser(asd) {
console.log(asd)
  const Mock = require('mockjs')

const NameList = []
const count = 100

for (let i = 0; i < count; i++) {
  NameList.push(Mock.mock({
    name: '@first'
  }))
}
NameList.push({ name: 'mock-Pan' })
const { name } = config.query
      const mockNameList = NameList.filter(item => {
        const lowerCaseName = item.name.toLowerCase()
        return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0)
      })

  return request({
    code: 20000,
        data: { items: mockNameList }
  })
}

export function transactionList(query) {
  return {
    code: 20000,
    data: {
      total: 20,
      'items|20': [{
        order_no: '@guid()',
        timestamp: +Mock.Random.date('T'),
        username: '@name()',
        price: '@float(1000, 15000, 0, 2)',
        'status|1': ['success', 'pending']
      }]
    }
  }
}
