import BaseStoreView from "lego-rn/dist/core/view/view"
import BaseStore from "lego-rn/dist/core/store/store"
import ContainerData from "./type";
import { View } from "react-native";
import React from 'react'

export default class ContainerView extends BaseStoreView<ContainerData, BaseStore<ContainerData>> {

    constructor(props:any) {
        super(props, BaseStore)
    }

    renderLego() {
        return <View style={{width:50, height:50, backgroundColor:"#000"}}/>
    }

}