import React from 'react'
import Sidebar from './Sidebar'
import Tabs from './Tabs'

export default function Navbar() {
    return (
        <>
            <div>
                <div className="row">

                    <div className="col-1">
                        <Sidebar />
                    </div>

                    <div className="col-11 sidebar">
                        <Tabs />
                    </div>
                    
                </div>
            </div>
        </>
    ) 
}