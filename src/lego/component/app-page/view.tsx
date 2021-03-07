import BaseStoreView from "lego-rn/dist/core/view/view"
import BaseStore from "lego-rn/dist/core/store/store"
import AppPageData from "./type";
import { View } from "react-native";
import React from 'react'
import { renderByViewId } from 'lego-rn/dist/apis/view-builder'

export default class AppPageView extends BaseStoreView<AppPageData, BaseStore<AppPageData>> {

    constructor(props: any) {
        super(props, BaseStore)
    }

    renderLego() {
        const children = this.store.children
        const pageEngine = this.store.pageEngine
        return <View style={{ width: "100%", flex: 1, backgroundColor: "#532104" }}>
            {children.map(viewId => renderByViewId(
                viewId
            ))}
        </View>
    }

}