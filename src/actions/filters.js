//settextfilter
export const setTextFilter = (text = '') => ({
    type:'SET_TEXT',
    text
});
//sort_by_date
export const sortByDate = () => ({
    type: "SORT_BY_DATE",
    sortBy: "date"
})
//sortByAmount
export const sortByAmount = () => ({
    type:"SORT_BY_AMOUNT",
    sortBy : "amount"
});

//set_startDate
export const setStartDate = (startDate = undefined) => ({
    type:"SET_START_DATE",
    startDate
});
//set_endDate
export const setEndDate = (endDate = undefined ) => ({
    type:"SET_END_DATE",
    endDate
});
