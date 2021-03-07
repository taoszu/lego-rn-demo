import PageEngine from 'lego-rn/dist/core/page/engine/page-engine'
import FactoryInstance from "lego-rn/dist/global/factory"
import AppPageConfig from '../component/app-page/config'
import {ServiceId} from 'lego-rn/dist/core/page/service/type/service-type'
import { CustomBaseService } from './service/base-service'
import { Alert } from 'react-native'
import CustomViewType from '../const/view-type'

export default class CustomPageEngine extends PageEngine {

    constructor(params: any) {
        super(params)
        this.registerService(ServiceId.base, CustomBaseService)
    }

    destroy = () => {

    }
}