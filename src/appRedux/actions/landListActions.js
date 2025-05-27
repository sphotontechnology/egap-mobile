import {DATA} from 'appRedux/actionsType';
import lodash from 'lodash';

export const getIdUser = (id) => {

    return {
        type: DATA.ID_USER, id,
    };
};

export const getLandList = (payload) => {
    const list = lodash.orderBy(payload, ['area_name'], );
    return {
        type: DATA.LAND_LIST, payload: list,
    };
};
