import PageView from 'lego-rn/dist/core/page/page-view'
import CustomPageEngine from './custom-page-engine'
import { View, Alert } from 'react-native'
import React from 'react'
import AppPageConfig from '../component/app-page/config'
import ContainerConfig from '../component/container/config'

interface PageProps {
    pageId:string
}

export default class AppPageView extends PageView<PageProps> {

    constructor(props:PageProps) {
        super(props, {pageId: props.pageId}, CustomPageEngine)
    }
    
    shouldRegisteredComponents = () => [
        AppPageConfig,
        ContainerConfig
    ]
}