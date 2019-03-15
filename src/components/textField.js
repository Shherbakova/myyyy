import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 500,
    },
    menu: {
        width: 200,
    },
});

class OutlinedTextFields extends React.Component {
    state = {
        name: 'Cat in the Hat',
        test: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleClickAddItem= () =>{
    let text = this.state.name;
    this.setState({test:text});
    };

    render() {
        const {classes} = this.props;

        return (

            <TextField
                id="outlined-with-placeholder"
                label="Input"
                fullWidth
                className={classes.TextField}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange('name')}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                color="primary"
                                aria-label="Add Item"
                                onClick={this.handleClickAddItem}
                            > <SendIcon/>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
