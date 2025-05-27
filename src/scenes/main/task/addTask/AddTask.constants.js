export const NAMESPACE = 'scenes.main.addTask';
export const NAMESCREEN = 'addTask';
import * as Yup from 'yup';

export const TASK_SCHEME = Yup.object().shape({
    task: Yup.object(), description: Yup.string(),
});
export const taskList = [// {
    //   id: 'general',
    //   label: 'Chọn loại công việc',
    //   value: 'general',
    //   color: 'black',
    // },
    {
        id: '1', label: 'Làm đất', value: '1',
    }, {
        id: '2', label: 'Xuống giống', value: '2',
    }, {
        id: '3', label: 'Bón lót', value: '3',
    }, {
        id: '4', label: 'Bón thúc', value: '4',
    }];
