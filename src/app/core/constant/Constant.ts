export const Constant = {
    API_END_POINT: {
        LGOIN: "Auth/Login",
        //#region  Brand
        BRAND_SAVE: 'brand/brandSave',
        BRAND_GET: 'brand/getbrands',
        BRAND_GET_BY_ID: 'brand/getbrandbyId?id=',
        BRAND_UPDATE: 'brand/brandUpdate?id=',
        BRAND_DELETE: 'brand/brandDelete?id=',
        //#endregion

        //#region  Product
        PRODUCT_SAVE: 'Product/ProductSave',
        PRODUCT_GET: 'Product/getProducts',
        PRODUCT_GET_BY_ID: 'Product/getProductbyId?id=',
        PRODUCT_UPDATE: 'Product/ProductUpdate?id=',
        PRODUCT_DELETE: 'Product/productDelete?id=',
        PRODUCT_GET_BY_BRAND_ID: 'Product/getProductByBrandId?id=',
        //#endregion

        //#region Model
        MODEL_SAVE:'Model/ModelSave',
        MODEL_GET:'Model/getModels',
        MODEL_GET_BY_ID:'Model/getProductbyId?id=',
        MODEL_UPDATE: 'Model/ModelUpdate?id=',
        MODEL_DELETE: 'Model/ModelDelete?id=',
        //#endregion

    }
}