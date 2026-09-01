import { useDeviceUser } from '@apolloo/actions';
import React from 'react'
import View from "./View";
import Form from "./Form";
import BrowserChart from "./BrowserChart";
import Country from "./Country";
import Graph from "./Graphq";
import PieChart from "./PieChart";
import Image from "next/image";
const DeviceLog = () => {

    const { data, loading } = useDeviceUser();
    return (
        <div className="flex-2">
            <div className="flex-2-list">
                <View />
            </div>
            <div className="flex-2-list">{loading ? null : <Form />}</div>
            <div className="flex-2-list">
                {loading ? null : <PieChart data={data?.getAllDeivceInfo} />}
            </div>

            <div className="flex-2-list">
                {loading ? null : <BrowserChart data={data?.getAllDeivceInfo} />}
            </div>
        </div>
    )
}

export default DeviceLog