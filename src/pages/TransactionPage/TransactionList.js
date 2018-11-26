import React, { Component } from 'react'
import axios from 'axios'
import Page from 'components/Page'
import TransactionListItem from './TransactionListItem'

class TransactionList extends Component {
  state = {
    transactionList: []
}
componentDidMount() {
    
    axios.get('http://localhost:3001/order_list')
      .then(res => {
          let data = res.data
          this.setState({
              transactionList: data
          }, () => console.log(this.state))
      })
}
  render() {
    return (
      <Page
          title="Transaction List"
          breadcrumbs={[{ name: 'Transaction List', active: true }]}
          className="TablePage">
          <TransactionListItem transactions={this.state.transactionList} />
      </Page>
    )
  }
}

export default TransactionList
