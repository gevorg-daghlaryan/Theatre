class objectToArray{
    static objectToArray(obj) {
        return Object.entries(obj).map((entry) => {
            const [key, value] = entry;
            return {
                id: key,
                ...value,
            };
        });
    };

    static objectToArrayTwoLayers(obj) {
        const arr = [];
        Object.entries(obj).map((entry) => {
            const [key1, value1] = entry;
            Object.entries(value1).map((itm) => {
                const [key, value] = itm;
                arr.push({
                    userId: key1,
                    bookId: key,
                    ...value,
                });
            });
        });
        return arr;
    };
}
export default objectToArray;
