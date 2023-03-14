import { ModalInterface } from '@interfaces/components/ModalInterface';

import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

import styled from '@emotion/styled';

const Box = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

export default function CustomModal({
  open,
  onClose,
  children,
}: ModalInterface.CustomModalInterface) {
  return (
    <div>
      <Modal open={open}>
        <Paper
          elevation={2}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflowY: 'auto',
            padding: '4rem',
            minWidth: '360px',
          }}
        >
          <Box>
            <Button
              variant='text'
              onClick={onClose}
              sx={{ color: '#0b4988', minWidth: '7px', padding: '7px' }}
            >
              <ClearIcon />
            </Button>
          </Box>
          {children}
        </Paper>
      </Modal>
    </div>
  );
}
