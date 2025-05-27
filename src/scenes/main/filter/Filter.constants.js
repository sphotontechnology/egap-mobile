export const NAMESPACE = 'scenes.main.filter';
export const convertData = (products, typeField, values) => {
    const dataList = [];
    for (let i = 0; i < products.length; i++) {
        if (typeField === 'product') {
            const item = {
                ...products[i],
                check: products[i]?.id_product_kind === values?.product?.id_product_kind && products[i]?.id_product_origin === values?.product?.id_product_origin && products[i]?.id_production === values?.product?.id_production ? true : false,
            };
            dataList.push(item);
        }
        if (typeField === 'owner') {
            const item = {
                ...products[i], check: products[i]?.id_owner === values?.owner?.id_owner ? true : false,
            };
            dataList.push(item);
        }
        if (typeField === 'task') {
            const item = {
                ...products[i],
                check: products[i]?.id === values?.task?.id && products[i]?.id_branch === values?.task?.id_branch ? true : false,
            };
            dataList.push(item);
        }
    }
    return dataList;

};
