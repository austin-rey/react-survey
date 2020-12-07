import {makeStyles} from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        width: '100vw',
        backgroundColor:'#454852',
        zIndex: '9',
        color: '#fff',
    },
    container: {
        padding: '10px 5px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));

const Navigation = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Container maxWidth="md" className={classes.container}>
                <span><strong>Survey Tool</strong></span>
                <span>Austin Reynaud</span>
            </Container>
        </div>
    )
}

export default Navigation;