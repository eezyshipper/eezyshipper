import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal } from 'rsuite';
import { setDeleteConfirmationState } from '../../../redux/Actions/eeztshipperActions';

const DeleteConfirmationLayout = ({deleteConfirmationState, setDeleteConfirmationState}) => {
    return (
        <>
        <Modal style={{backgroundColor: '#F0F9FE'}} backdrop={true} show={deleteConfirmationState} onHide={() => setDeleteConfirmationState(false)} size="sm">
          <Modal.Body>
            <Icon
              icon="remind"
              style={{
                color: '#ffb300',
                fontSize: 24
              }}
            />
            {'  '}
            Once a project is disabled, there will be no update on project report, and project
            members can access history data only. Are you sure you want to proceed?
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setDeleteConfirmationState(false)} appearance="primary">
              Ok
            </Button>
            <Button onClick={() => setDeleteConfirmationState(false)} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal> 
        </>
    );
};

const mapStateToProps = state => {
    return{
        deleteConfirmationState: state.deleteConfirmationState
    }
}

const mapDispatchToProps = {
    setDeleteConfirmationState: setDeleteConfirmationState
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteConfirmationLayout);