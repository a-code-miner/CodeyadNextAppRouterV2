'use client';
import React from 'react';
import { handleUpdateTag } from '@/actions/posts';
import { Button } from 'react-bootstrap';

const UpdatePostsBTN = ({ tag }) => {
    return (
        <Button onClick={() => handleUpdateTag(tag)}>
            Update: ({tag})
        </Button>
    );
};

export default UpdatePostsBTN;
