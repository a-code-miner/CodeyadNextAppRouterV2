'use client';
import React from 'react';
import { handleUpdatePath } from '@/actions/users';
import { Button } from 'react-bootstrap';

const UpdateData = ({ path }) => {
    return (
        <Button onClick={() => handleUpdatePath(path)}>
            Update: ({path})
        </Button>
    );
};

export default UpdateData;
