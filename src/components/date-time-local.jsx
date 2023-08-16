import React from 'https://cdn.skypack.dev/react';

const classes = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    dateTimeInput: {
        fontSize: '15px',
        padding: "10px",
        borderWidth: 0,
    },
};

const DateTimeLocal = ({data, updateData, runQuery}) => {
    const [datetime, setDatetime] = React.useState();

    React.useEffect(async () => {
        if (datetime) {
            await updateData({value: datetime})
            runQuery("convert_custom_date_time")
        }
    }, datetime)

    function handleChange(ev) {
        if (!ev.target['validity'].valid) return;
        const dt = ev.target['value'];
        setDatetime(dt);
    }

    return (
        <div className={classes.root}>
            <input
                value={(datetime || '').toString()}
                onChange={handleChange}
                style={classes.dateTimeInput}
                type="datetime-local"
                step="1"
                name="input-date-time"/>
        </div>
    );
}


// //for toolJet
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';
//
// const ConnectedComponent = Tooljet.connectComponent(DateTimeLocal);
// ReactDOM.render(<ConnectedComponent/>, document.body);


export default DateTimeLocal
