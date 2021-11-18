import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'
import Layout from './Layout'

const Dashboard = () => {
    const {users} = useContext(UserContext)
    return (
        <Layout>
            <h3>SUMMARY</h3>

            <div className='summary-grid'>
                <div className='box' id='box-1'>
                    <h3>{users.length}</h3>
                    <p>Customers</p>
                </div>
                <div className='box' id='box-2'>
                    <h3>&#x20A6; 83,000</h3>
                    <p>Cash Balance</p>
                </div>
                <div className='box' id='box-3'>
                    <h3>&#x20A6; 300,000</h3>
                    <p>Outstanding Receivables</p>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
