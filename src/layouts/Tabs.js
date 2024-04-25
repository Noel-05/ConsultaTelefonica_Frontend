import React from 'react'
import TabItem from './TabItem';

export default function Tabs() {
    return (
        <ul className="nav nav-pills">
            <TabItem tabName={'POR EMPLEADO'} pathName={'/consultaEmpleados'}/>
            
            <TabItem tabName={'POR UNIDAD'} pathName={'/consultaUnidad'}/>
            
            <TabItem tabName={'CUMPLEAÑEROS DEL DIA'} pathName={'/cumpleaneros'}/>
        </ul>
    )
}