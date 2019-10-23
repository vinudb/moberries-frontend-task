export const monthArray = [
    {monthNum: "01", monthName:'January'}, 
    {monthNum: "02", monthName:'February'}, 
    {monthNum: "03", monthName:'March'}, 
    {monthNum: "04", monthName:'April'},
    {monthNum: "05", monthName:'May'}, 
    {monthNum: "06", monthName:'June'}, 
    {monthNum: "07", monthName:'July'}, 
    {monthNum: "08", monthName:'August'},
    {monthNum: "09", monthName:'September'}, 
    {monthNum: "10", monthName:'October'}, 
    {monthNum: "11", monthName:'November'}, 
    {monthNum: "12", monthName:'December'}];

    export const yearArray = ["2019", "2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030", ];

    export const gbArray = [
        {gbNum: "3", gbName: "3 GB"},
        {gbNum: "5", gbName: "5 GB"},
        {gbNum: "10", gbName: "10 GB"},
        {gbNum: "20", gbName: "20 GB"},
        {gbNum: "30", gbName: "30 GB"},
        {gbNum: "50", gbName: "50 GB"},
    ]
    
    export const onChangeHandle = (key, value, setSubscriptionValues) => {
        setSubscriptionValues({ target: { key, value } })
    }