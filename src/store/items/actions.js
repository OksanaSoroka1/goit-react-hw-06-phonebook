import { createAction } from '@reduxjs/toolkit';

const addItem = createAction('item/Add');

const deletItem = createAction('item/delet');

const changeFilter = createAction('filter/change');

export { addItem, deletItem, changeFilter };
