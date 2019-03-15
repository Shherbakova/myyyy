import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ImageIcon from '@material-ui/icons/Image';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: 10,
        backgroundColor: theme.palette.background.paper,
    },
});

class FolderList extends React.Component {
    state = {
        selectedIndex: 1,
    };

    handleListItemClick = (index) => {
        console.log(index);
        this.setState({selectedIndex: index});
    };

    render() {
        const {classes} = this.props;
        return (
            <List className={classes.root}>
                <ListItem
                    button
                    onClick={() => this.handleListItemClick(0)}
                >
                    <ImageIcon/>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit">
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        );
    }
}

FolderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
