
import React from 'react';
// gql
import { useQuery } from '@apollo/client';
import { GET_POST_COMMENT } from '../graphql/querys';
// MUI
import { Container } from '@mui/material';

const Comments = ({slug}) => {

    const {loading,data,error} = useQuery(GET_POST_COMMENT,{variables:{slug}});
    console.log(data)

    return (
        <Container maxWidth>
            
        </Container>
    );
};

export default Comments;