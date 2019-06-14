// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        //figure out if expenses.description has the text variable string inside of it
        //includes
        const descriptiontoLowerCase = expense.description.toLowerCase();
        const textToLowerCase = text.toLowerCase();
        descriptiontoLowerCase.includes(textToLowerCase);
        const textMatch = descriptiontoLowerCase.includes(textToLowerCase);

        
        //convert both strings to lower case 
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}