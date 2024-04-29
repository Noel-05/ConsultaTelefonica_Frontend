import React from 'react'
import TabItem from './TabItem';
import TabItemDropDown from './TabItemDropDown';

export default function Tabs() {
    return (
        <ul className="nav nav-pills">
            <TabItem tabName={'POR EMPLEADO'} pathName={'/consultaEmpleados'}/>
            
            <TabItem tabName={'POR UNIDAD'} pathName={'/consultaUnidad'}/>
            
            <TabItem tabName={'CUMPLEAÑEROS DEL DIA'} pathName={'/cumpleaneros'}/>

            <TabItemDropDown 
                dropDownName={'MANTENIMIENTOS'} 
                dropDownOptions={[
                    {path: '/empleados', name: 'EMPLEADOS'},
                    {path: '/', name: 'DEPENDENCIAS'},
                    {path: '/', name: 'UNIDADES'}
                ]}
            />
        </ul>
    )
}