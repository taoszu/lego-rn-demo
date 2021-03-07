import BaseService from 'lego-rn/dist/core/page/service/type/base-service'
import {FetchNetParams} from 'lego-rn/dist/types/type'
import CustomViewType from '../../const/view-type'

export class CustomBaseService extends BaseService {

    appVersionCode = () => 10000 


    fetchWithNet = (params: FetchNetParams) => {
        return Promise.resolve({

        })
    }

    getPageLegoData = (params: {
        dataId?: string;
        version: number;
        pageId: string;
    }) => {
        const pageData = {
            isUpdate: true,
            colourList: [],
            id: "dadkakkkd",
            data: { viewType: CustomViewType.common.appPage , children: [
                { viewType: CustomViewType.common.container},
                { viewType: CustomViewType.common.container}
            ]}
        }
        return Promise.resolve(pageData)
    }
}